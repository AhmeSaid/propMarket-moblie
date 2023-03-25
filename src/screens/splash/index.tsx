import React, {FC, useEffect, useMemo} from 'react';
import {
  CommonActions,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {_retrieveData} from '../../utils/storageController';
import {setFavourites} from '../../store/slices/favSlice';
import {useGetMySavedPropertiesmutationMutation} from '../../services/propService';
import {
  setFilter,
  setNumberFilter,
  setParamFilter,
  setSearchName,
  setSortName,
} from '../../store/slices/filterSlice';
import {Image, LogBox, View} from 'react-native';
import {setLocation} from '../../store/slices/homeSlice';
import createStyles from './styles';
import {whiteLogo} from '../../assets/images';
import Animated, {BounceInUp} from 'react-native-reanimated';
import reactotron from 'reactotron-react-native';
import {selectIsFirst, selectNotFirst, setIsFirst} from '../../store';
import AsyncStorage from '@react-native-community/async-storage';

interface SplashProps {
  navigation: NavigationProp<ParamListBase>;
}

const Splash: FC<SplashProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  const {container, logo} = styles;
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  const dispatch = useDispatch();
  const [getFav] = useGetMySavedPropertiesmutationMutation();
  const auth = useSelector(state => state?.auth);
  // const notFirst = useSelector(selectNotFirst);

  const getUserData = async () => {
   const notFirst= await AsyncStorage.getItem('notFirst')
   reactotron.log('>>>>', notFirst);

    if (notFirst) {
      if (auth?.user) {
        dispatch(setFilter(null));
        dispatch(setNumberFilter(null));
        dispatch(setLocation(null));
        dispatch(setSearchName(null));
        dispatch(setSortName(null));

        dispatch(setParamFilter(null));
        getFav().then(res => {
          if (res?.data) {
            var arr = [];
            res.data.results.map(val => {
              arr.push(val.id);
            });
            dispatch(setFavourites(arr));
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{name: 'Landing'}],
              }),
            );
          } else {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{name: 'Register'}],
              }),
            );
          }
        });

        // navigation.navigate('Register');
      } else {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: 'Register'}],
          }),
        );
      }
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Onboarding'}],
        }),
      );
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getUserData();
    }, 2100);
  }, []);
  return (
    <View style={container}>
      <Animated.View entering={BounceInUp.duration(2000)}>
        <Image source={whiteLogo} style={logo} resizeMode='contain' />
      </Animated.View>
    </View>
  );
};

export default Splash;

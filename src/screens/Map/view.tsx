import React, {FC, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Pressable,
  NativeModules,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import {GetLocation} from '../../utils/geoLocation';
import {randomCirclePoint} from 'random-location';

import {COLORS, height, sh, sw} from '../../constants/theme';
import {Back, Location, LocSvg, Pin, X} from '../../assets/svg';
import CustomText from '../../components/customText';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import CustomInput from '../../components/customInput';
import {StatusBar} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Loc} from '../../assets/images';
import {useGetAllPropeOnMapQuery} from '../../services/propService';
import Loader from '../../components/loader';
import {useSelector} from 'react-redux';
import {setLocation} from '../../store/slices/homeSlice';
import {iteratorSymbol} from 'immer/dist/internal';

interface MAPViewProps {
  navigation: NavigationProp<ParamListBase>;
}

const MAPView: FC<MAPViewProps> = ({navigation}) => {
  const [location, setLocationData] = useState(null);
  const [pointedLocation, setPointedLocation] = useState(null);
  const [randomLocations, setRandomLocations] = useState([]);
  const [loader, setLoader] = useState(false);
  const homeData = useSelector(state => state.home.homeData);
  const {t} = useTranslation();

  useEffect(() => {
    setLoader(false);
    GetLocation(response => {
      if (response.location) {

        setLocation(response.location);
        setLocationData(response.location);
        var homeDataShow = [];

        homeData.results.map(res => {
          var obj = {latitude: Number(res.lat), longitude: Number(res.lng)};
          var data = {obj: obj, id: res.id, price: res.price};
          homeDataShow.push(data);
        });
        setRandomLocations(homeDataShow);

        // let arr;
        // for (let i = 0; i <= 20; i++) {
        //   const loc = randomCirclePoint(response.location, 500);
        //   arr.push(loc);
        //   if (i == 20) {
        //     setRandomLocations(arr);
        //   }
        // }
      } else {
      }
    });
    setLoader(true);
  }, [loader]);

  const onMapPressed = (event: object) => {
    let myLocationObj = Object.assign({}, location);
    myLocationObj.longitude = event.nativeEvent.coordinate.longitude;
    myLocationObj.latitude = event.nativeEvent.coordinate.latitude;
    setPointedLocation(myLocationObj);
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: t('Map'),

      headerLeft: () => (
        <Pressable
          style={{}}
          onPress={() => {
            navigation.goBack();
          }}>
          <View
            style={{
              height: 30,
              position: 'absolute',
              width: 50,
              bottom: -15,
              right: 5,
            }}
          />

          <X style={{paddingHorizontal: 20}} />
        </Pressable>
      ),
      headerRight: () => (
        <Pressable
          onPress={() => {
            navigation.navigate('Filter');
          }}
          style={{paddingVertical: 5}}>
          <CustomText
            text={t('Filter')}
            fontFamily={'regular'}
            color={'primary'}
          />
        </Pressable>
      ),
      headerStyle: {},
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      {location && loader ? (
        <View style={styles.mapView}>
          {(pointedLocation || location) && (
            <MapView
              provider={PROVIDER_GOOGLE}
              showsUserLocation={true}
              showsMyLocationButton={true}
              // customMapStyle={require('./mapStyle.json')}
              style={styles.mapStyle}
              initialRegion={location}
              region={pointedLocation || location}
              onPress={onMapPressed}>
              {(pointedLocation || location || null) && (
                <Marker coordinate={location} />
              )}
              {randomLocations.map(item => {
                return (
                  <Pressable style={{}} onPress={() => {}}>
                    <Marker
                      style={{}}
                      onPress={() => {
                        navigation.navigate('Properity', {id: item?.id});
                      }}
                      coordinate={item?.obj}>
                      <View
                        style={{
                          backgroundColor: COLORS.primary,
                          padding: 5,
                          borderRadius: 7,
                        }}>
                        <CustomText
                          color="white"
                          text={item?.price + 'SAR'}
                          size={12}
                        />
                      </View>
                    </Marker>
                  </Pressable>
                );
              })}
            </MapView>
          )}
        </View>
      ) : (
        <View>
          <ActivityIndicator
            size={'large'}
            style={{
              flex: 1,
            }}
            color={COLORS.primary}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default MAPView;

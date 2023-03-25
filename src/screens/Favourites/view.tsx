import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {FC, useEffect, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator, Alert, FlatList, Pressable, View} from 'react-native';
import { useSelector } from 'react-redux';
import CustomText from '../../components/customText';
import Loader from '../../components/loader';
import LoaderJs from '../../components/LoaderJs';
import RenderVerticalItem from '../../components/renderFlatList/RenderVerticalItem';
import {COLORS} from '../../constants/theme';
import {useGetMySavedPropertiesQuery} from '../../services/propService';
import { selectUserToken } from '../../store';
import {DATA} from '../../utils/constants';
import createStyles from './styles';
interface FavouritesViewProps {
  navigation: NavigationProp<ParamListBase>;
}

const Favourites: FC<FavouritesViewProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  const {t} = useTranslation();
  const {data, isLoading, refetch} = useGetMySavedPropertiesQuery();
  const [isSelected, setIsSelected] = useState(false);
  const [isNotLogged, setIsNotLogged] = useState(false)
  const token = useSelector(selectUserToken);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: t('Favourites'),
      headerLeft: () => (
        <Pressable
          onPress={() => {
            //stop
            navigation.navigate('Map');
          }}
          style={styles.header}>
          <CustomText
            text={t('Map')}
            fontFamily={'bold'}
            color={'white'}
            size={18}
          />
        </Pressable>
      ),
      headerRight: () => (
        <Pressable
          style={styles.header}
          onPress={() => {
            //stop
            navigation.navigate('Compare', {data: data?.results});
          }}>
          <CustomText
            text={t('CompareHeader')}
            fontFamily={'bold'}
            color={'white'}
            size={18}
          />
        </Pressable>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    if(token)
    refetch();
    else
    Alert.alert(
      "",
      "تحتاج ان تسجل دخول",
      [
        {
          text: "الغاء",
          onPress: () => navigation.goBack(),
          style: "cancel"
        },
        { text: "تسجيل دخول", onPress: () => navigation.navigate('Register') }
      ]
    );
    setIsSelected(false);
  }, [isSelected && navigation]);
  return (
    <View style={styles.keyboardAvoiding}>
      {isLoading ? (
        <ActivityIndicator
          size={'large'}
          style={{
            alignSelf: 'center',
            flex: 1,
          }}
          color={COLORS.primary}
        />
      ) : data?.results && data?.results?.length > 0 ? (
        <FlatList
          data={data?.results}
          style={styles.flatList}
          renderItem={({item}) => (
            <RenderVerticalItem
              item={item}
              navigation={navigation}
              favScreen={true}
              onClick={() => {
                setIsSelected(true);
              }}
            />
          )}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.sep} />}
          ListFooterComponent={() => <View style={styles.footer} />}
        />
      ) : (
        <CustomText
          size={18}
          fontFamily={'bold'}
          containerStyle={styles.noResult}
          color={'black'}
          text={t('resultsFav')}
        />
      )}
    </View>
  );
};

export default Favourites;

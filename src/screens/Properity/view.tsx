import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import createStyles from './styles';

import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {
  FlatList,
  Image,
  Linking,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import CustomText from '../../components/customText';

import {
  Ac,
  Age,
  Back,
  Basment,
  Bath,
  BedRoom,
  HeartProp,
  Home,
  HomeSvg,
  Or,
  Parking,
  PropDown,
  Rooms,
  Saved,
  ShareIcons,
  Shawr,
  Size,
  Status,
} from '../../assets/svg';
import CustomButton from '../../components/customButton';
import {COLORS, height, sh, sw, width} from '../../constants/theme';
import {useTranslation} from 'react-i18next';
import {
  useAddAndRemoveFavMutation,
  useGetMySavedPropertiesmutationMutation,
  useGetMySavedPropertiesQuery,
  useGetPropertyDetailsMutation,
  useGetPropertyDetailsqueryQuery,
} from '../../services/propService';
import LoaderJs from '../../components/LoaderJs';
import {set} from 'immer/dist/internal';
import {useDispatch, useSelector} from 'react-redux';
import {setFavourites} from '../../store/slices/favSlice';
import moment from 'moment';
import {WideBlack, WidePng} from '../../assets/images';
import Tour from '../../components/Tour';
import reactotron from 'reactotron-react-native';

interface ProperityViewProps {
  navigation: NavigationProp<ParamListBase>;
}

const ProperityView: FC<ProperityViewProps> = ({navigation, route}) => {
  const {t} = useTranslation();
  const styles = useMemo(() => createStyles(), []);
  const [active, setActive] = useState(false);
  const [sheetState, setSheetState] = useState(0);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [getData] = useGetPropertyDetailsMutation();
  const {data, error, refetch} = useGetPropertyDetailsqueryQuery(
    route?.params?.id,
  );
  const [addAndRemove, {isLoading}] = useAddAndRemoveFavMutation();
  const [getFav] = useGetMySavedPropertiesmutationMutation();

  const [saved, setSaved] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const tourSheetRef = useRef<BottomSheet>(null);

  const dispatch = useDispatch();
  const FavouritesData = useSelector(state => state.Favourites.FavouritesData);
  var arr = [...FavouritesData];
  const searchIndex = FavouritesData?.findIndex(i => i == route?.params?.id);
  const isSelected = searchIndex >= 0;
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2s8ba',
      title: 'PropertyType',
      img: require('../../../assets/image/landing.png'),
      icons: <HomeSvg />,
      sec: data?.property?.property_type,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa9s7f63',
      title: 'Status',
      icons: <Status />,
      img: require('../../../assets/image/landing.png'),
      sec: 'For Sale',
    },
    {
      id: '3ac68afc-c605-48d3-a43f8-fbd91aa97sf63',
      title: 'q',
      icons: <BedRoom />,

      img: require('../../../assets/image/landing.png'),
      sec: data?.property?.size,
    },
    {
      id: '3ac68afc-c605-48d3-a74f8-fbd91aa97f63',
      title: 'Bedrooms',
      icons: <BedRoom />,
      img: require('../../../assets/image/landing.png'),
      sec: data?.property?.bathrooms_count,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd918aa97f63',
      title: 'Bathrooms',
      icons: <Bath />,
      img: require('../../../assets/image/landing.png'),
      sec: data?.property?.bedrooms_count,
    },
    {
      id: '3ac68afc-c605-48d3asd-a4f8-fbd918aa97f63',
      title: 'PropertyAge',
      icons: <Age />,
      img: require('../../../assets/image/landing.png'),
      sec: data?.property?.age,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-asdfbd9fds18aa97f63',
      title: 'AC',
      icons: <Ac />,
      img: require('../../../assets/image/landing.png'),
      sec: data?.property?.air_condition_exisit,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd918asasddaa97f63',
      title: 'Basment',
      icons: <Basment />,
      img: require('../../../assets/image/landing.png'),
      sec: data?.property?.Basement,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd918asdaas97f63',
      title: 'Parking',
      icons: <Parking />,
      img: require('../../../assets/image/landing.png'),
      sec: 'Yes',
    },
  ];
  const snapPoints = useMemo(() => ['25%', '90%'], []);
  const tourSnapPoints = useMemo(() => ['90%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    setSheetState(index);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 1000);
  }, [!active]);
  useEffect(() => {
    // getData().then(res => console.log(res.data, 'hi'));
    setActive(true);

    const isSelected = searchIndex >= 0;
    setSaved(isSelected ? true : false);
  }, []);

  const FactandFeatures = ({
    title,
    sec,
    icons,
  }: {
    title: string;
    sec: string;
    icons: any;
  }) => {
    return (
      <View style={styles.flatlistRender}>
        <CustomText
          text={t(title)}
          leftIcon={icons}
          color="black"
          size={14}
          fontFamily="regular"
          containerStyle={styles.text}
        />
        <CustomText
          containerStyle={styles.text}
          text={sec}
          color="gray"
          size={14}
          fontFamily="regular"
        />
      </View>
    );
  };
  useEffect(() => {
    refetch();
  }, [navigation && saved]);
  console.log(data?.property);

  const closeTourSheet = () => {
    tourSheetRef.current?.close();
    setIsTourOpen(false);
  };
  return (
    <View style={styles.keyboardAvoiding}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'light-content'}
      />
      <FlatList
        nestedScrollEnabled={true}
        data={DATA}
        renderItem={() => (
          <View style={styles.img}>
            <Image
              style={{width: width + 5}}
              source={require('../../../assets/image/pro.png')}
            />
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        alwaysBounceVertical={false}
        ListFooterComponent={() => <View style={{height: sh(150)}}></View>}
      />
      {/* {header} */}
      <View style={styles.headersIcons}>
        <Pressable
          style={{paddingHorizontal: sw(17)}}
          onPress={() => navigation.goBack()}>
          <Back color={COLORS.white} />
        </Pressable>
        <View style={styles.row}>
          <Pressable
            onPress={() => {
              var id = {id: route?.params?.id};
              addAndRemove({id}).then(res => {
                if (isSelected) {
                  arr.splice(searchIndex, 1);
                } else {
                  arr.push(route?.params?.id);
                }

                dispatch(setFavourites(arr));
                setSaved(!saved);
              });
            }}
            style={[styles.padding, {paddingHorizontal: sw(15)}]}>
            <HeartProp color={saved ? COLORS.orange : COLORS.white} />
          </Pressable>
          <Pressable
            style={[styles.padding, {paddingLeft: 5, paddingRight: sw(17)}]}>
            <ShareIcons />
          </Pressable>
        </View>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        // index={0}

        handleComponent={() => (
          <View
            style={{
              paddingTop: 17,
              paddingBottom: 22,
              height: 44,
              alignSelf: 'center',
              alignItem: 'center',
            }}>
            {sheetState == 1 && (
              <PropDown
                style={{
                  alignSelf: 'center',
                }}
              />
            )}
            {sheetState == 0 && (
              <View
                style={{
                  backgroundColor: COLORS.inactive,
                  width: 44,
                  borderRadius: 4,
                  height: 4,
                  alignSelf: 'center',
                }}
              />
            )}
          </View>
        )}
        animateOnMount={true}
        snapPoints={snapPoints}
        enableHandlePanningGesture={true}
        detached={true}
        // onAnimate={res => console.log(res)}
        onChange={handleSheetChanges}>
        <BottomSheetScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={styles.panel}
          contentContainerStyle={styles.panelContentContainer}>
          <>
            <View style={styles.rowText}>
              <CustomText
                text={data?.property?.price + ' SAR'}
                fontFamily="semiBold"
              />
              {data?.property?.bedrooms_count && (
                <>
                  <Rooms style={styles.icon} />
                  <CustomText
                    color="gray"
                    size={12}
                    text={data?.property?.bedrooms_count}
                    fontFamily={'regular'}
                  />
                </>
              )}
              {data?.property?.bathrooms_count && (
                <>
                  <Shawr style={styles.icon} />

                  <CustomText
                    color="gray"
                    size={12}
                    text={data?.property?.bathrooms_count}
                    fontFamily={'regular'}
                  />
                </>
              )}

              <Image
                source={WidePng}
                style={{
                  height: 13,
                  width: 13,
                  marginLeft: sw(16),
                  marginRight: sw(4),
                }}
              />
              <CustomText
                color="gray"
                size={12}
                text={data?.property?.size + ' sqm'}
                fontFamily={'regular'}
              />
            </View>

            <CustomText
              size={14}
              text={data?.property?.address}
              fontFamily="medium"
              style={{marginBottom: sh(10)}}
            />

            <View style={[styles.rowText, {marginBottom: sh(31)}]}>
              <View style={styles.cir} />
              <CustomText
                size={14}
                text={t('Houseforsale')}
                containerStyle={styles.sale}
                fontFamily="semiBold"
              />

              <CustomText
                size={12}
                text={t('GardenView')}
                fontFamily="regular"
              />
            </View>

            <>
              <View style={styles.rowText}>
                <CustomText
                  style={{marginLeft: sw(5)}}
                  size={14}
                  text={
                    moment(data?.property?.createdAt, 'YYYYMMDD')
                      .fromNow()
                      ?.toString()
                      ?.split('ago')[0]
                  }
                  color="black"
                  fontFamily="bold"
                />
                <CustomText
                  text={t('onPropMarket')}
                  color="black"
                  fontFamily="regular"
                  size={14}
                />
                <View style={styles.view}>
                  <CustomText
                    style={{marginRight: sw(6)}}
                    fontFamily="bold"
                    size={12}
                    text={data?.property?.views_count}
                  />
                  <CustomText
                    size={12}
                    text={t('Views')}
                    fontFamily="regular"
                  />
                </View>

                <CustomText
                  style={{marginRight: sw(6)}}
                  fontFamily="bold"
                  size={12}
                  text={data?.property?.saved_count}
                />
                <CustomText size={12} text={t('Saves')} fontFamily="regular" />
              </View>
              <CustomText
                containerStyle={styles.description}
                text={t('Properitydescription')}
                fontFamily="bold"
                size={16}
              />
              <CustomText
                size={14}
                fontFamily="regular"
                text={data?.property?.description}
              />
              <CustomText
                containerStyle={styles.facts}
                text={t('FactsFeatures')}
                fontFamily="bold"
                size={16}
              />
            </>
            <View style={styles.flat}>
              <FactandFeatures
                title={'PropertyType'}
                sec={data?.property?.property_type}
                icons={<HomeSvg />}
              />
              <FactandFeatures
                title={'Status'}
                sec={data?.property?.status}
                icons={<Status />}
              />
              <FactandFeatures
                title={'PropertySize'}
                sec={data?.property?.size}
                icons={
                  <Image
                    source={WideBlack}
                    style={{
                      height: 13,
                      width: 13,
                    }}
                  />
                }
              />

              <FactandFeatures
                title={'Bedrooms'}
                sec={data?.property?.bedrooms_count}
                icons={<BedRoom />}
              />

              <FactandFeatures
                title={'Bathrooms'}
                sec={data?.property?.bathrooms_count}
                icons={<Bath />}
              />
              <FactandFeatures
                title={'PropertyAge'}
                sec={
                  new Date().getFullYear() -
                  new Date(data?.property?.built_year).getFullYear() +
                  ' Years'
                }
                icons={<Age />}
              />

              <FactandFeatures
                title={'AC'}
                sec={data?.property?.air_condition_exisit ? 'Yes' : 'No'}
                icons={<Ac />}
              />
              <FactandFeatures
                title={'Basment'}
                sec={data?.property?.Basement ? 'Yes' : 'No'}
                icons={<Basment />}
              />
              <FactandFeatures
                title={'Parking'}
                sec={data?.property?.on_site_parking ? 'Yes' : 'No'}
                icons={<Parking />}
              />
            </View>
          </>
        </BottomSheetScrollView>
      </BottomSheet>

      <BottomSheet
        ref={tourSheetRef}
        index={-1}
        handleComponent={() => (
          <View
            style={{
              height: 44,
              justifyContent: 'center',
            }}>
            <Pressable onPress={closeTourSheet} style={styles.x}>
              <CustomText text={'X'} />
            </Pressable>
          </View>
        )}
        animateOnMount={true}
        snapPoints={tourSnapPoints}
        enableHandlePanningGesture={false}
        detached={true}
        onChange={handleSheetChanges}>
        <BottomSheetScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={styles.panel}
          contentContainerStyle={styles.panelContentContainer}>
          <Tour
            onBookPress={closeTourSheet}
            data={data?.property?.appointments}
          />
        </BottomSheetScrollView>
      </BottomSheet>

      {!isTourOpen && data?.property && (
        <View style={styles.buttonsView}>
          {data?.property.property_link ? (
            <Pressable onPress={() => {
              Linking.openURL(data?.property.property_link)
            }}>
            <CustomText
              size={14}
              fontFamily="regular"
              text={data?.property?.property_link}
              num={1}
              color="blue"
              style={styles.linkText}
            />
            </Pressable>
          ) : (
            <>
              <CustomButton
                text={t('Call')}
                textColor="primary"
                containerStyle={styles.button}
              />
              <CustomButton
                text={t('Message')}
                textColor="primary"
                containerStyle={styles.button}
              />
              <CustomButton
                text={t('Tour')}
                textStyle={{fontWeight: '600'}}
                containerStyle={[styles.button, styles.tour]}
                onPress={() => {
                  setIsTourOpen(true);
                  tourSheetRef.current?.expand();
                }}
              />
            </>
          )}
        </View>
      )}
    </View>
  );
};

export default ProperityView;

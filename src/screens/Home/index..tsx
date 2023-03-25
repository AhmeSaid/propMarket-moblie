import React, {FC, useEffect, useMemo, useRef, useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {_retrieveData} from '../../utils/storageController';
import createStyles from './style';
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {COLORS, height, sh} from '../../constants/theme';
import LogoText from '../../components/LogoText';
import CustomText from '../../components/customText';
import {useSelector, useDispatch} from 'react-redux';
import {selectCurrentUser} from '../../store';
import {
  ArrowDown2,
  FilterIcon,
  FurnitureIcon,
  RentIcon,
  SaleIcon,
  SearchIcon,
} from '../../assets/svg';
import {HomeLogo, kitchen} from '../../assets/images';
import {useSearchPropertiesMutation} from '../../services/propService';
import PropItem from '../../components/PropItem';
import OfferItem from '../../components/OfferItem';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import BottomSheet from '@gorhom/bottom-sheet';
import {useTranslation} from 'react-i18next';
import {GetLocation} from '../../constants/geoLocation';
import {
  setFilter,
  setSearchName,
  setSortName,
} from '../../store/slices/filterSlice';
import {setHomeData, setLocation} from '../../store/slices/homeSlice';
import {useKeyboardHeight} from '../../utils/useKeyboardHeight';
import reactotron from 'reactotron-react-native';
import {FlashList} from '@shopify/flash-list';
import SliderView from '../../components/SliderView';
import CustomButton from '../../components/customButton';
import LastSearchItem from '../../components/LastSearchItem';
import PropTypeFilter from '../../components/PropTypeFilter';
import SliderRangeContainer from '../../components/SliderRangeContainer';
import CountFilterContainer from '../../components/CountFilterContainer';
import CardButton from '../../components/CardButton';
import CitiesModal from '../../components/CitiesModal';

const TagsArr = [
  'price',
  'House size',
  'Style of home',
  'Layout',
  'Living room',
  'Bedrooms',
  'Kitchen',
  'Bathrooms',
  'Backyard',
  'Location',
  'Commute',
  'Schools',
  'Basment',
];

// const LastSearchItem = ({item}: {item: any}) => {
//   const styles = useMemo(() => createStyles(), []);

//   const {} = styles;

//   return (
//     <CustomButton text={item.title}  />
//   );
// };

const Home: FC<HomeProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  const user = useSelector(selectCurrentUser);
  const [getData] = useSearchPropertiesMutation();
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState({});
  const [selctedLocation, setSelctedLocation] = useState({});

  const {
    container,
    topContainer,
    bottomContainer,
    top,
    bottom,
    locationContainer,
    location,
    locationText,
    searchContainer,
    placholder,
    iconAndTextSearch,
    selectContainer,
    selectItem,
    selectItemIcon,
    row,
    homeLogo,
    searchWrap,
    logoTextWrap,
    selectedToU,
    title,
    separator,
    selectedToUFlatList,
    offersContainer,
    offerHeader,
    offersFlatlist,
    scroll,
    scrollContent,
    filterPress,
    selectToSearch,
    overrideSlider,
    buttonWrap,
    btn,
    backBtn,
    lastSearch,
    lastSearchText,
    lastSearchSeparator,
    sliderContainer,
    furAndKitch,
  } = styles;
  const topHight = sh(340);
  const Max_Header_Height = sh(430);
  const Min_Header_Height = sh(134);
  const Scroll_Distance = Max_Header_Height - Min_Header_Height;

  // useEffect(() => {
  //   getData().then(res => {
  //     setData(res?.data);
  //   });
  // }, []);

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      scrollY.value = e.contentOffset.y;
    },
  });
  const topHeightStyles = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollY.value,
      [0, Scroll_Distance * 3],
      [Max_Header_Height, 0],
      {extrapolateRight: Extrapolation.CLAMP},
    );

    return {
      height: scale,
    };
  });

  const searchTransformStyles = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollY.value,
      [0, Scroll_Distance],
      [0, -Min_Header_Height],
      {extrapolateRight: Extrapolation.CLAMP},
    );

    return {
      transform: [{translateY: scale}],
    };
  });

  const opacityStyles = useAnimatedStyle(() => {
    const scale = interpolate(scrollY.value, [100, 0], [0, 1], {
      extrapolateRight: Extrapolation.CLAMP,
    });

    return {
      opacity: scale,
    };
  });

  const {t} = useTranslation();
  const dispatch = useDispatch();

  const filterDate = useSelector(state => state?.filter?.filterDate);
  const paramFilter = useSelector(state => state?.filter.paramFilter);
  const loc = useSelector(state => state.home.loc);
  const sortName = useSelector(state => state.filter.sortName);
  const [tabState, setTabState] = useState(
    filterDate?.purpose ? filterDate?.purpose : 'For Sale',
  );
  const [filterStep, setFilterStep] = useState(1);

  const totalSteps = 6;

  const limit = 10;
  const [isLoader, setIsLoader] = useState(true);
  const [skip, setSkip] = useState(0);
  const [isCityModal, setIsCityModal] = useState(false);
  const [propType, setPropType] = useState<string | undefined>();
  const [selectedSize, setSelectedSize] = useState<Array<string>>([]);
  const [selectedPrice, setSelectedPrice] = useState<Array<string>>([]);
  const [selectedRooms, setSelectedRooms] = useState();
  const [selectedPath, setSelectedPath] = useState();
  const [quickSearchData, setQuickSearchData] = useState('');

  // const getDataLocation = () => {
  //   // setIsLoader(true);
  //   var checkPurpose = filterDate?.purpose ? filterDate?.purpose : 'For Sale';

  //   var paramHome = paramFilter ? paramFilter.split('purpose=')[0] : '&';
  //   var selectedSort = paramHome + 'purpose=' + checkPurpose;
  //   var location = loc
  //     ? selectedSort + '&lat=' + loc.latitude + '&lng=' + loc.longitude
  //     : selectedSort;
  //   var sortData = sortName ? location + `&sorting=[${sortName}]` : location;
  //   dispatch(
  //     setFilter({
  //       name: filterDate?.name ? filterDate?.name : null,
  //       price: filterDate?.price ? filterDate?.price : null,
  //       address: filterDate?.address ? filterDate?.address : null,
  //       property_type: filterDate?.property_type
  //         ? filterDate?.property_type
  //         : null,
  //       size: filterDate?.size ? filterDate?.size : null,
  //       built_year: filterDate?.built_year ? filterDate?.built_year : null,
  //       bedrooms_count: filterDate?.bedrooms_count
  //         ? filterDate?.bedrooms_count
  //         : null,
  //       bathrooms_count: filterDate?.bathrooms_count
  //         ? filterDate?.bathrooms_count
  //         : null,
  //       air_condition_exisit: filterDate?.air_condition_exisit
  //         ? filterDate?.air_condition_exisit
  //         : null,
  //       Basement: filterDate?.Basement ? filterDate?.Basement : false,
  //       stories: filterDate?.stories ? filterDate?.stories : false,
  //       purpose: filterDate?.purpose ? filterDate?.purpose : 'For Sale',
  //       sort: filterDate?.sort ? filterDate?.sort : false,
  //       flagSelected: 0,
  //     }),
  //   );
  //   reactotron.log(sortData, paramFilter, 'sortData');

  //   getData(sortData).then(res => {
  //     if (res.data) setData(res.data);
  //     // setTimeout(() => {
  //     //   setIsLoader(false);
  //     // }, 500);
  //   });
  // };

  const getProps = (params: any, skipNum: number) => {
    let newData = params + '&limit=' + limit + '&skip=' + skipNum;
    getData(newData).then((res: any) => {
      if (skipNum) {
        setData([...data, ...res?.data?.results]);
      } else setData(res?.data?.results);
      dispatch(setHomeData(res.data));
    });
  };

  const handleParams = (skipNum: number) => {
    if (quickSearchData!='') {
      getProps(quickSearchData, skipNum);
    }
    else if (filterDate?.length == 0 || !filterDate) {
      var selected = 'purpose=' + tabState;
      getProps(selected, skipNum);
    } else {
      var location = loc
        ? paramFilter + '&lat=' + loc.latitude + '&lng=' + loc.longitude
        : paramFilter;
      var sortData = sortName ? location + `&sorting=[${sortName}]` : location;
      getProps(sortData, skipNum);
    }
  };
  useEffect(() => {
    // setIsLoader(true);
    handleParams(0);

    // setTimeout(() => {
    //   setIsLoader(false);
    // }, 500);
  }, [paramFilter, loc, tabState, quickSearchData]);
  // useEffectuseEffect(() => {
  //   navigation.setOptions({
  //     tabBarStyle: {
  //       display: undefined,
  //       height: sh(82),
  //     },
  //   });
  // }, [navigation && bottom]);

  // useEffect(() => {
  //   getDataLocation();
  // }, [loc]);
  const handleNextDisabled = () => {
    switch (filterStep) {
      case 1:
        if (Object.keys(selctedLocation).length == 0) return true;
        break;
      case 2:
        if (!propType) return true;
        break;
      case 3:
        if (selectedSize.length == 0) return true;
        break;
      case 4:
        if (selectedRooms == 0) return true;
        break;
      case 5:
        if (Object.keys(selctedLocation).length == 0) return true;
        break;
      case 6:
        if (selectedPrice.length == 0) return true;
        break;

      default:
        break;
    }
    return false;
  };

  return (
    <View style={container}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="light-content"
      />
      <Animated.View style={[topContainer, topHeightStyles]}>
        <Animated.View style={[top, topHeightStyles]}>
          {/* <Animated.View style={[logoTextWrap, opacityStyles]}>
            <LogoText propColor="white" />
          </Animated.View> */}

          <Animated.View style={[row, opacityStyles]}>
            <CustomText
              color="white"
              text={
                t('welcome') +
                ' ' +
                (user?.username ? user.username : t('withYou'))
              }
            />

            <View style={sliderContainer}>
              <CustomText
                color={COLORS.whiteRgba(0.7)}
                text={t('selectToSearch')}
                size={14}
              />

              <SliderView
                overrideContainerStyle={overrideSlider}
                total={totalSteps}
                current={filterStep}
              />
            </View>

            {filterStep == 1 ? (
              <Animated.View style={[selectToSearch, opacityStyles]}>
                <View style={selectContainer}>
                  <Pressable
                    onPress={() => {
                      setTabState('For Sale');
                    }}
                    style={[
                      selectItem,
                      {
                        borderWidth: tabState == 'For Sale' ? 1 : 0,
                      },
                    ]}>
                    <SaleIcon activeColor={COLORS.white} />
                    <CustomText
                      color={
                        tabState == 'For Sale'
                          ? COLORS.white
                          : COLORS.whiteRgba(0.7)
                      }
                      text={t('forSale')}
                      containerStyle={selectItemIcon}
                    />
                  </Pressable>

                  <Pressable
                    onPress={() => {
                      setTabState('For Rent');
                    }}
                    style={[
                      selectItem,
                      {
                        borderWidth: tabState == 'For Rent' ? 1 : 0,
                      },
                    ]}>
                    <RentIcon activeColor={COLORS.white} />
                    <CustomText
                      color={
                        tabState == 'For Rent'
                          ? COLORS.white
                          : COLORS.whiteRgba(0.7)
                      }
                      text={t('forRent')}
                      containerStyle={selectItemIcon}
                    />
                  </Pressable>
                </View>
              </Animated.View>
            ) : filterStep == 2 ? (
              <PropTypeFilter
                onSelected={selected => {
                  setPropType(selected);
                }}
                defauld={propType}
              />
            ) : filterStep == 3 ? (
              <SliderRangeContainer
                onSelect={(range: Array<string>) => {
                  setSelectedSize(range);
                }}
                title={t('propSize')}
                defaultVal={selectedSize}
              />
            ) : filterStep == 4 ? (
              <CountFilterContainer
                defaultSelected={selectedRooms}
                onSelected={(item: number) => {
                  setSelectedRooms(item);
                }}
                title={t('Bedrooms')}
                // overrideItemContainer={{borderWidth: selectedRooms == item ? 1 : 0}}
              />
            ) : filterStep == 5 ? (
              <CountFilterContainer
                defaultSelected={selectedPath}
                title={t('Bathrooms')}
                onSelected={(item: number) => {
                  setSelectedPath(item);
                }}
              />
            ) : (
              <SliderRangeContainer
                onSelect={(range: Array<string>) => {
                  setSelectedPrice(range);
                }}
                title={t('price')}
                defaultVal={selectedPrice}
              />
            )}
            {/* <View style={locationContainer}>
                <CustomText
                  color={COLORS.whiteRgba(0.7)}
                  text={t('currentLocation')}
                  size={14}
                />
                <View style={location}>
                  <CustomText
                    text={'الرياض'}
                    color={COLORS.whiteRgba(0.7)}
                    size={14}
                    containerStyle={locationText}
                  />
                  <ArrowDown2 />
                </View>
              </View> */}
            <Image source={HomeLogo} style={homeLogo} />
          </Animated.View>

          {filterStep == 1 && (
            <Animated.View style={[searchWrap, searchTransformStyles]}>
              <Pressable
                onPress={() => {
                  // navigation.navigate('Search');
                  setIsCityModal(true);
                }}
                style={searchContainer}>
                <View style={iconAndTextSearch}>
                  <SearchIcon />
                  <CustomText
                    text={selctedLocation?.name || t('searchPlaceholder')}
                    color={'inactive'}
                    size={14}
                    containerStyle={placholder}
                  />
                </View>
                {/* <Pressable
                onPress={() => {
                  navigation.navigate('Filter');
                }}
                style={filterPress}>
                <FilterIcon />
              </Pressable> */}
              </Pressable>
            </Animated.View>
          )}
          <Animated.View style={[buttonWrap, opacityStyles]}>
            <CustomButton
              onPress={() => {
                if (filterStep < totalSteps) setFilterStep(filterStep + 1);
                else {
                  setQuickSearchData(`purpose=${tabState}&lat=${selctedLocation.lat}&lng=${selctedLocation.lng}&property_type=${propType}&size=[${selectedSize}]&bedrooms_count=[${selectedRooms}]&bathrooms_count=[${selectedPath}]&price=[${selectedPrice}]`)
                  // handleParams(0);
                }
              }}
              text={filterStep == totalSteps ? t('showProps') : t('next')}
              containerStyle={btn}
              disabled={handleNextDisabled()}
            />
            {filterStep != 1 && (
              <CustomButton
                onPress={() => {
                  setFilterStep(filterStep - 1);
                }}
                text={t('back')}
                containerStyle={[btn, backBtn]}
              />
            )}
          </Animated.View>

          <Animated.View style={[lastSearch, opacityStyles]}>
            <CustomText
              color={COLORS.whiteRgba(0.7)}
              text={t('lastSearch')}
              size={14}
              style={lastSearchText}
            />
            <FlatList
              horizontal
              data={[
                {title: 'شقق للبيع - الرياض. حي الإزدهار'},
                {title: 'شقق للبيع - الرياض. حي الإزدهار'},
                {title: 'شقق للبيع - الرياض. حي الإزدهار'},
              ]}
              extraData={data}
              initialNumToRender={4}
              renderItem={({item}) => (
                <LastSearchItem navigation={navigation} item={item} />
              )}
              ItemSeparatorComponent={() => <View style={separator} />}
              showsHorizontalScrollIndicator={false}
            />
          </Animated.View>
        </Animated.View>
      </Animated.View>

      <View style={bottomContainer}>
        <View style={[bottom]}>
          <ScrollView
            bounces={false}
            alwaysBounceVertical={false}
            scrollEventThrottle={16}
            // onScroll={scrollHandler}
            showsVerticalScrollIndicator={false}
            style={scroll}
            contentContainerStyle={scrollContent}>
            <View style={furAndKitch}>
              <CardButton
                text={t('movingFurniture')}
                icon={<FurnitureIcon />}
                onPress={() => {
                  navigation.navigate('LocationSelect');
                }}
              />

              <CardButton
                text={t('kitchen')}
                icon={
                  <Image source={kitchen} style={{width: 71, height: 71}} />
                }
                onPress={() => {}}
              />
            </View>
            <View style={selectedToU}>
              <CustomText
                color={'black'}
                text={t('selectedToU')}
                containerStyle={title}
              />

              <FlatList
                horizontal
                data={data}
                extraData={data}
                initialNumToRender={4}
                renderItem={item => (
                  <PropItem navigation={navigation} item={item} />
                )}
                ItemSeparatorComponent={() => <View style={separator} />}
                contentContainerStyle={selectedToUFlatList}
                showsHorizontalScrollIndicator={false}
                onEndReached={() => {
                  setSkip(skip + limit);
                  handleParams(data.length + limit);
                }}
              />
              <View style={offersContainer}>
                <View style={offerHeader}>
                  <CustomText
                    color={'black'}
                    text={t('bestOffers')}
                    size={14}
                  />

                  <Pressable>
                    <CustomText size={12} color={'blue'} text={t('seeAll')} />
                  </Pressable>
                </View>

                <FlatList
                  numColumns={2}
                  data={data?.slice(0, 4)}
                  renderItem={item => (
                    <OfferItem navigation={navigation} item={item} />
                  )}
                  ItemSeparatorComponent={() => <View style={separator} />}
                  contentContainerStyle={offersFlatlist}
                  showsHorizontalScrollIndicator={false}
                  columnWrapperStyle={{
                    justifyContent: 'space-between',
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <CitiesModal
        isOpen={isCityModal}
        onClose={() => {
          setIsCityModal(false);
        }}
        onSelect={item => {
          setSelctedLocation(item);
        }}
      />
    </View>
  );
};

export default Home;

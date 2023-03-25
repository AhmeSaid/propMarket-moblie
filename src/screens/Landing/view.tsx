import BottomSheet, {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {FC, useEffect, useMemo, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Filter} from '../../assets/images';
import {LocSvg, RedHeart, X} from '../../assets/svg';
import Border from '../../components/Border';
import BottomAbsolute from '../../components/BottomAbsolute';
import Absolute from '../../components/CustomAbsoluteView/Absolute';
import CustomBottomSheet from '../../components/CustomBottomSheet';
import CustomButton from '../../components/customButton';
import CustomInput from '../../components/customInput';
import CustomText from '../../components/customText';
import HomeHeader from '../../components/HomeHeader';
import Loader from '../../components/loader';
import RenderVerticalItem from '../../components/renderFlatList/RenderVerticalItem';
import Select from '../../components/Select/Select';
import SortingComponent from '../../components/Sorting/SortingHome';
import RenderTags from '../../components/Tags';
import ViewShadow from '../../components/ViewShadow';
import {GetLocation} from '../../constants/geoLocation';
import {COLORS, sh, sw} from '../../constants/theme';
import {navigate} from '../../navigation/NavigationService';
import {useSearchPropertiesMutation} from '../../services/propService';
import {
  setFilter,
  setSearchName,
  setSortName,
} from '../../store/slices/filterSlice';
import {setHomeData, setLocation} from '../../store/slices/homeSlice';
import {useKeyboardHeight} from '../../utils/useKeyboardHeight';
import createStyles from './styles';
import SafeAreaViewDecider from 'react-native-smart-statusbar'
import reactotron from 'reactotron-react-native';

interface LandingViewProps {
  navigation: NavigationProp<ParamListBase>;
}
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

const LandingView: FC<LandingViewProps> = ({navigation, route}) => {
  const styles = useMemo(() => createStyles(), []);
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const filterDate = useSelector(state => state?.filter?.filterDate);
  const paramFilter = useSelector(state => state?.filter.paramFilter);
  const loc = useSelector(state => state.home.loc);
  const filterNumber = useSelector(state => state.filter.filterNumber);
  const searchName = useSelector(state => state.filter.searchName);
  const sortName = useSelector(state => state.filter.sortName);
  const [show, setShow] = useState<boolean>(loc ? false : true);
  const [tabState, setTabState] = useState(
    filterDate?.purpose ? filterDate?.purpose : 'For Sale',
  );
  const [bottom, setBottom] = useState(true);
  const [getData, {isLoading}] = useSearchPropertiesMutation();
  const [data, setData] = useState([]);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const bottomSheetRefHeart = useRef<BottomSheet>(null);
  const id = useSelector(state => state?.auth?.user?.id);
  const [tagArr, setTagsArr] = useState(TagsArr);
  const [tage, setTage] = useState('');
  const [daily, setDaily] = useState(false);
  const [close, setClose] = useState(false);
  const [input, setInput] = useState('');
  const [dailySelected, setDailySelected] = useState('Daily');
  const [isLoader, setIsLoader] = useState(true);
  const [sort, setSort] = useState(null);
  var keybord = useKeyboardHeight();


  const getDataTab = nameSelect => {
    setIsLoader(true);
    var paramHome = paramFilter ? paramFilter.split('purpose=')[0] : '&';
    var selectedSort = paramHome + 'purpose=' + nameSelect;
    var location = loc
      ? selectedSort + '&lat=' + loc.latitude + '&lng=' + loc.longitude
      : selectedSort;
    var sortData = sortName ? location + `&sorting=[${sortName}]` : location;
    dispatch(
      setFilter({
        name: filterDate?.name ? filterDate?.name : null,
        price: filterDate?.price ? filterDate?.price : null,
        address: filterDate?.address ? filterDate?.address : null,
        property_type: filterDate?.property_type
          ? filterDate?.property_type
          : null,
        size: filterDate?.size ? filterDate?.size : null,
        built_year: filterDate?.built_year ? filterDate?.built_year : null,
        bedrooms_count: filterDate?.bedrooms_count
          ? filterDate?.bedrooms_count
          : null,
        bathrooms_count: filterDate?.bathrooms_count
          ? filterDate?.bathrooms_count
          : null,
        air_condition_exisit: filterDate?.air_condition_exisit
          ? filterDate?.air_condition_exisit
          : null,
        Basement: filterDate?.Basement ? filterDate?.Basement : false,
        stories: filterDate?.stories ? filterDate?.stories : false,
        sort: filterDate?.sort ? filterDate?.sort : false,

        purpose: nameSelect,
        flagSelected: 0,
      }),
    );

    getData(sortData).then(res => {
      if (res.data) setData(res.data);
      setTimeout(() => {
        setIsLoader(false);
      }, 500);
    });
  };
  const getDataLocation = () => {
    setIsLoader(true);
    var checkPurpose = filterDate?.purpose ? filterDate?.purpose : 'For Sale';

    var paramHome = paramFilter ? paramFilter.split('purpose=')[0] : '&';
    var selectedSort = paramHome + 'purpose=' + checkPurpose;
    var location = loc
      ? selectedSort + '&lat=' + loc.latitude + '&lng=' + loc.longitude
      : selectedSort;
    var sortData = sortName ? location + `&sorting=[${sortName}]` : location;
    dispatch(
      setFilter({
        name: filterDate?.name ? filterDate?.name : null,
        price: filterDate?.price ? filterDate?.price : null,
        address: filterDate?.address ? filterDate?.address : null,
        property_type: filterDate?.property_type
          ? filterDate?.property_type
          : null,
        size: filterDate?.size ? filterDate?.size : null,
        built_year: filterDate?.built_year ? filterDate?.built_year : null,
        bedrooms_count: filterDate?.bedrooms_count
          ? filterDate?.bedrooms_count
          : null,
        bathrooms_count: filterDate?.bathrooms_count
          ? filterDate?.bathrooms_count
          : null,
        air_condition_exisit: filterDate?.air_condition_exisit
          ? filterDate?.air_condition_exisit
          : null,
        Basement: filterDate?.Basement ? filterDate?.Basement : false,
        stories: filterDate?.stories ? filterDate?.stories : false,
        purpose: filterDate?.purpose ? filterDate?.purpose : 'For Sale',
        sort: filterDate?.sort ? filterDate?.sort : false,
        flagSelected: 0,
      }),
    );

    getData(sortData).then(res => {
      if (res.data) setData(res.data);
      setTimeout(() => {
        setIsLoader(false);
      }, 500);
    });
  };
  useEffect(() => {
    
    setIsLoader(true);

    if (filterDate?.length == 0 || !filterDate) {
      var selected = 'purpose=' + tabState;
      getData(selected).then(res => {
        if (res.data) setData(res.data);
        dispatch(setHomeData(res.data));
      });
    } else {
      var location = loc
        ? paramFilter + '&lat=' + loc.latitude + '&lng=' + loc.longitude
        : paramFilter;
      var sortData = sortName ? location + `&sorting=[${sortName}]` : location;
      getData(sortData).then(res => {
        if (res.data) setData(res.data);
        dispatch(setHomeData(res.data));
      });
    }
    setTimeout(() => {
      setIsLoader(false);
    }, 500);
  }, [paramFilter || navigation]);
  const getDataSorting = nameSelect => {
    setIsLoader(true);
    var checkPurpose = filterDate?.purpose ? filterDate?.purpose : 'For Sale';
    var paramHome = paramFilter ? paramFilter.split('purpose=')[0] : '&';
    var selectedSort = paramHome + 'purpose=' + checkPurpose;
    var location = loc
      ? selectedSort + '&lat=' + loc.latitude + '&lng=' + loc.longitude
      : selectedSort;
    var sortData = nameSelect
      ? location + `&sorting=[${nameSelect}]`
      : location;
    dispatch(
      setFilter({
        name: filterDate?.name ? filterDate?.name : null,
        price: filterDate?.price ? filterDate?.price : null,
        address: filterDate?.address ? filterDate?.address : null,
        property_type: filterDate?.property_type
          ? filterDate?.property_type
          : null,
        size: filterDate?.size ? filterDate?.size : null,
        built_year: filterDate?.built_year ? filterDate?.built_year : null,
        bedrooms_count: filterDate?.bedrooms_count
          ? filterDate?.bedrooms_count
          : null,
        bathrooms_count: filterDate?.bathrooms_count
          ? filterDate?.bathrooms_count
          : null,
        air_condition_exisit: filterDate?.air_condition_exisit
          ? filterDate?.air_condition_exisit
          : null,
        Basement: filterDate?.Basement ? filterDate?.Basement : false,
        stories: filterDate?.stories ? filterDate?.stories : false,
        purpose: filterDate?.purpose ? filterDate?.purpose : 'For Sale',
        flagSelected: 0,
      }),
    );
    dispatch(setSortName(nameSelect));
    getData(sortData).then(res => {

      if (res.data) setData(res.data);
      setTimeout(() => {
        setIsLoader(false);
      }, 600);
    });
  };
  // useEffect(() => {
  //   navigation.setOptions({
  //     tabBarStyle: {
  //       display: undefined,
  //       height: sh(82),
  //     },
  //   });
  // }, [navigation && bottom]);

  useEffect(() => {
    getDataLocation();
  }, [loc]);

  var getLocation = () => {
    setIsLoader(true);

    GetLocation(response => {
      if (response.location) {
        setShow(false);

        dispatch(setLocation(response.location));
        dispatch(setSearchName('Current Location'));
      } else {
      }
    });
    setTimeout(() => {
      setIsLoader(false);
    }, 500);
  };
  const Daily = [
    {title: t('Daily')},
    {title: t('every')},
    {title: t('Weekly')},
    {title: t('Off')},
  ];

  return (
    <View style={styles.keyboardAvoiding}>
      <StatusBar barStyle={'light-content'}/>
      <View style={styles.header}>
        <HomeHeader />

        <Select
          onSelect={(res: number) => {
            var selected;
            if (res == 0) {
              selected = 'For Sale';
            } else if (res == 1) {
              selected = 'For Rent';
            }
            setTabState(selected);
            getDataTab(selected);
          }}
          first={t('ForSale')}
          sec={t('ForRent')}
          def={filterDate?.purpose == 'For Rent' ? 1 : 0}
          containerStyle={styles.selectContainer}
        />
        <View style={[styles.cont]}>
          <CustomInput
            editable={false}
            value={searchName && searchName}
            inputStyle={styles.input}
            placeholder={t('City')}
            leftIcon={<LocSvg />}
            maxLength={40}
            rightIcon={
              <Pressable
                onPress={() => {
                  navigate('Filter');
                }}
                style={styles.right}>
                <Image
                  source={Filter}
                  resizeMode={'contain'}
                  style={styles.img}
                />
                {filterNumber && filterNumber > 1 && (
                  <View>
                    <CustomText fontFamily="medium" style={styles.num}>
                      {filterNumber}
                    </CustomText>
                    <View style={styles.dot} />
                  </View>
                )}
              </Pressable>
            }
          />
          <Pressable
            onPress={() => {
              navigation.navigate('Search');
            }}
            style={styles.navi}
          />
        </View>
      </View>
      {/* {Showing results for Properties } */}

      {isLoader ? (
        <ActivityIndicator
          size={'large'}
          style={{
            alignSelf: 'center',
            flex: 1,
          }}
          color={COLORS.primary}
        />
      ) : (
        <ScrollView
          style={styles.textInput}
          showsVerticalScrollIndicator={false}>
          {data?.results?.length != 0 ? (
            <FlatList
              data={data?.results}
              ListHeaderComponent={() => (
                <>
                  {show && (
                    <View style={styles.locView}>
                      <Pressable onPress={() => setShow(false)}>
                        <View
                          style={{
                            height: 30,
                            position: 'absolute',
                            width: 50,
                            bottom: -sh(17),
                            right: 5,
                          }}
                        />

                        <X
                          style={{
                            right: sw(12),
                            position: 'absolute',
                          }}
                        />
                      </Pressable>
                      <CustomText
                        color={'black'}
                        fontFamily="regular"
                        containerStyle={styles.locTextContainer}
                        style={styles.locText}>
                        {t('location')}
                      </CustomText>
                      <CustomButton
                        onPress={getLocation}
                        text={t('turnLocation')}
                        containerStyle={styles.locButt}
                      />
                    </View>
                  )}
                  <View style={styles.twoText}>
                    <CustomText
                      text={t('Showing')}
                      color={'black'}
                      fontFamily={'regular'}
                    />
                    <CustomText
                      text={t('Properties')}
                      color={'black'}
                      fontFamily={'bold'}
                    />
                  </View>
                </>
              )}
              style={styles.mainFlatlist}
              renderItem={({item, index}) => {
                var check = false;

                return (
                  <>
                    <RenderVerticalItem
                      favScreen={check}
                      item={item}
                      navigation={navigation}
                    />
                    <View style={styles.sep} />
                  </>
                );
              }}
              alwaysBounceVertical={false}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={() => (
                <>
                  <View style={styles.footer} />
                </>
              )}
            />
          ) : (
            <CustomText
              size={18}
              fontFamily={'bold'}
              containerStyle={styles.noResult}
              color={'black'}
              text={t('results')}
            />
          )}
        </ScrollView>
      )}
      <BottomAbsolute
        onSort={res => {
          setSort(res);

          getDataSorting(res);
        }}
        bottomSheetRef={bottomSheetRef}
      />
      <CustomBottomSheet
        height={true}
        onClose={() => {}}
        bottomSheetRef={bottomSheetRef}>
        <View style={styles.bottomSheetSaved}>
          <View>
            <CustomText
              text={t('SavedSearch')}
              size={18}
              fontFamily={'bold'}
              style={styles.searchSaved}
            />
            <View style={styles.savedSaved}>
              <View style={styles.nameViewSaved}>
                <CustomText
                  text={t('Name')}
                  size={14}
                  fontFamily={'regular'}
                  containerStyle={styles.nameSaved}
                  // style={{flex: 1}}
                />
                <BottomSheetTextInput
                  placeholder={t('Enter')}
                  onChangeText={res => {
                    setInput(res);
                  }}
                  placeholderTextColor={COLORS.gray}
                  style={styles.inputSaved}
                />
              </View>
              <Border style={styles.borderSaved} />

              <View style={styles.receiveSaved}>
                <CustomText
                  text={t('ReceiveUpdates')}
                  size={14}
                  style={styles.res}
                  fontFamily={'regular'}
                />
                <Pressable
                  style={styles.selectedP}
                  onPress={() => setDaily(!daily)}>
                  <CustomText
                    text={dailySelected}
                    color={'primary'}
                    size={14}
                    fontFamily={'regular'}
                  />
                </Pressable>
              </View>
            </View>
            {daily && (
              <ViewShadow
                style={styles.daily}
                children={
                  <ScrollView horizontal>
                    <FlatList
                      data={Daily}
                      renderItem={({item}) => (
                        <SortingComponent
                          style={{width: sw(190)}}
                          item={item}
                          clicked={dailySelected}
                          onClick={res => {
                            setDailySelected(res);
                          }}
                        />
                      )}
                      alwaysBounceVertical={false}
                      showsVerticalScrollIndicator={false}
                    />
                  </ScrollView>
                }
              />
            )}
          </View>
          <View>
            <Border style={styles.borderSaved} />
            <Pressable
              style={styles.buttonSaved}
              onPress={() => {
                setClose(false);
                bottomSheetRef.current?.close();
                bottomSheetRefHeart.current.collapse();
              }}>
              <CustomText
                text={t('SaveSearch')}
                size={14}
                style={{opacity: input.length > 0 ? 1 : 0.5}}
                color={'primary'}
                fontFamily={'medium'}
              />
            </Pressable>
          </View>
        </View>
      </CustomBottomSheet>
      <CustomBottomSheet
        height={keybord}
        onClose={res => {
          setClose(true);
          setBottom(false);
        }}
        bottomSheetRef={bottomSheetRefHeart}>
        <Absolute
          style={[
            styles.red,
            {
              top: close ? 0 : -sh(60),
            },
          ]}
          children={<RedHeart color={COLORS.white} />}
        />
        <CustomText
          text={t('HomeSaved')}
          size={16}
          fontFamily={'bold'}
          containerStyle={styles.home}
        />

        <CustomText
          text={t('like')}
          size={14}
          color={'primary'}
          fontFamily={'regular'}
          style={{marginBottom: sh(17)}}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.tagView}>
            {tagArr.map(item => {
              return <RenderTags item={item} />;
            })}

            <BottomSheetTextInput
              placeholderTextColor={COLORS.gray}
              style={[
                {
                  height: 27,
                },
                styles.tags,
                {
                  color: 'grey',
                  fontSize: 12,
                },
              ]}
              value={tage}
              placeholder="+ Add tage"
              onChangeText={setTage}
            />
          </View>
        </ScrollView>

        <Pressable
          style={styles.padding}
          onPress={() => {
            if (tage != '') {
              setTagsArr([...tagArr, tage]);
              setTage('');
            }
          }}>
          <CustomText
            text={t('Savemytags')}
            size={14}
            color={'primary'}
            fontFamily={'medium'}
            containerStyle={[styles.home, styles.save]}
          />
        </Pressable>
      </CustomBottomSheet>
    </View>
  );
};

export default LandingView;

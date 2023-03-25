import React, {FC, useMemo, useRef, useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './styles';

import {useTranslation} from 'react-i18next';
import {
  Animated,
  FlatList,
  Image,
  View,
  Pressable,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import CustomInput from '../../components/customInput';
import {Back, Current, Location, Reload, Search, X, XP} from '../../assets/svg';
import {COLORS, sh, sw, width} from '../../constants/theme';
import Container from '../../components/container';
import CustomText from '../../components/customText';
import Select from '../../components/Select/Select';
import {ViewRow} from '../../components/ViewRow';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {search} from 'react-native-country-picker-modal/lib/CountryService';
import {
  useGoogleSearchMutation,
  useGoogleSearchPlaceIDMutation,
} from '../../services/googleService';
import {GetLocation} from '../../utils/geoLocation';
import {setLocation} from '../../store/slices/homeSlice';
import {useDispatch, useSelector} from 'react-redux';
import {setFilter, setSearchName} from '../../store/slices/filterSlice';

interface SearchViewProps {
  navigation: NavigationProp<ParamListBase>;
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Price (low to high)',
    img: require('../../../assets/image/landing.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Price (high to low)',
    img: require('../../../assets/image/landing.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a43f8-fbd91aa97f63',
    title: 'Bedrooms (low to high)',
    img: require('../../../assets/image/landing.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a74f8-fbd91aa97f63',
    title: 'Bedrooms (high to low)',
    img: require('../../../assets/image/landing.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd918aa97f63',
    title: 'Bathrooms (low to high)',
    img: require('../../../assets/image/landing.png'),
  },
];

const SearchView: FC<SearchViewProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  const filterDate = useSelector(state => state?.filter?.filterDate);

  const {t} = useTranslation();
  const [data, setData] = useState(null);
  const searchName = useSelector(state => state.filter.searchName);

  const [searchNameSelect, setSearchNameSelect] = useState(
    searchName ? searchName : '',
  );
  const [searchData, setSearchData] = useState([]);
  const [tabState, setTabState] = useState(
    filterDate?.purpose ? filterDate?.purpose : 'For Sale',
  );
  const [isLoader, setIsLoader] = useState(false);

  const dispatch = useDispatch();

  const [searchGoogle] = useGoogleSearchMutation();
  const [searchGooglePlaceID] = useGoogleSearchPlaceIDMutation();

  const search = title => {
    // stop
    setIsLoader(true);

    searchGoogle(title).then(res => {
      if (res.data) {
        var dataArr = [];
        res.data.predictions.map(res => dataArr.push(res.description));
        setSearchData(res.data.predictions);
      }
    });
    setIsLoader(false);
  };
  var getLocation = () => {
    setIsLoader(true);

    GetLocation(response => {
      if (response.location) {
        dispatch(setLocation(response.location));
        dispatch(setSearchName('Current Location'));
        navigation.navigate('Landing');
      } else {
      }
    });
    setIsLoader(false);
  };

  const getPlaceByPlaceID = id => {
    if (id) {
      setIsLoader(true);

      searchGooglePlaceID(id).then(res => {
        if (res.data) {
          var loc = {
            latitude: res.data.result.geometry.location.lat,
            latitudeDelta: 0.0036132212457324897,
            longitude: res.data.result.geometry.location.lng,
            longitudeDelta: 0.004023313522338867,
          };
          dispatch(setLocation(loc));
          dispatch(setSearchName(data.description));
          navigation.navigate('Landing');
        }
      });
      setIsLoader(false);
    }
  };
  return (
    <View style={styles.keyboardAvoiding}>
      <Select
        onSelect={res => {
          var selected;
          if (res == 0) {
            selected = 'For Sale';
          } else if (res == 1) {
            selected = 'For Rent';
          }
          setTabState(selected);
          dispatch(
            setFilter({
              name: filterDate?.name ? filterDate?.name : null,
              price: filterDate?.price ? filterDate?.price : null,
              address: filterDate?.address ? filterDate?.address : null,
              property_type: filterDate?.property_type
                ? filterDate?.property_type
                : null,
              size: filterDate?.size ? filterDate?.size : null,
              built_year: filterDate?.built_year
                ? filterDate?.built_year
                : null,
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
              purpose: selected,
              flagSelected: 0,
            }),
          );
        }}
        first={t('ForSale')}
        sec={t('ForRent')}
        def={filterDate?.purpose == 'For Rent' ? 1 : 0}
      />

      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <View style={styles.header}>
        <CustomInput
          value={searchNameSelect}
          inputStyle={styles.input}
          placeholder={t('City')}
          containerStyle={styles.cont}
          onChangeText={res => {
            search(res);
            setSearchNameSelect(res);
          }}
        />
        <Pressable
          onPress={() => {
            // navigation.navigate('Landing');
            getPlaceByPlaceID(data?.place_id);
          }}>
          <CustomText
            color="primary"
            // containerStyle={styles.loc}
            text={t('Done')}
            size={16}
            fontFamily={'regular'}
          />
        </Pressable>
      </View>
      <View style={styles.loc}>
        {/* <ViewRow style={{flexWrap: 'wrap'}}>
          {data && (
            <View style={styles.locSelect}>
              <CustomText
                color="primary"
                size={14}
                fontFamily={'regular'}
                text={data.description}
                num={1}
              />
              <Pressable
                style={{
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
                onPress={() => {
                  // var oldData = [...data];
                  // const searchIndex = oldData.findIndex(i => i == res);
                  // oldData.splice(searchIndex, 1);
                  setData(null);
                }}>
                <XP style={{marginLeft: sw(4), padding: 5, top: 1}} />
              </Pressable>
            </View>
          )}
        </ViewRow> */}
        <Pressable
          style={{padding: 5}}
          onPress={() => {
            getLocation();
          }}>
          <CustomText
            color="primary"
            leftIcon={<Current />}
            text={t('CurrentLocation')}
            fontFamily={'regular'}
          />
        </Pressable>
      </View>
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
        searchData.map(res => (
          <Pressable
            onPress={() => {
              // var oldData = [...data];
              // const searchIndex = oldData.findIndex(i => i == res);
              // const isSelected = searchIndex >= 0;
              // if (isSelected) {
              //   oldData.splice(searchIndex, 1);
              // } else {
              //   oldData.push(res);
              // }

              setData(res);
              setSearchNameSelect(res?.description);
            }}
            style={styles.textSearch}>
            <CustomText
              num={1}
              color="semiBlock"
              leftIcon={<Reload />}
              // containerStyle={styles.locData}
              text={res?.description}
            />
          </Pressable>
        ))
      )}
    </View>
  );
};

export default SearchView;

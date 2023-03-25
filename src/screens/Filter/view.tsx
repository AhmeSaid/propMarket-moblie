import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {FC, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import reactotron from 'reactotron-react-native';
import {
  X,
} from '../../assets/svg';
import Container from '../../components/container';
import CustomButton from '../../components/customButton';
import CustomPicker from '../../components/CustomPicker';
import CustomText from '../../components/customText';
import RenderFlatListFilter from '../../components/RenderFlatListFilter';
import Select from '../../components/Select/Select';
import SelectedButton from '../../components/SelectedButton';
import CustomSlider from '../../components/Slider';
import {COLORS} from '../../constants/theme';
import {
  setFilter,
  setNumberFilter,
  setParamFilter,
} from '../../store/slices/filterSlice';
import createStyles from './styles';

const Data = ['Apartments', 'Land', 'Villas', 'Floor'];
const typeOfUseData = ['residential', 'commercial'];
const serviceData = ['driver_room', 'maid_room', 'air_condition_exisit'];
const garagData = ['on_site_parking'];

interface FilterViewProps {
  navigation: NavigationProp<ParamListBase>;
}

const FilterView: FC<FilterViewProps> = ({navigation}) => {
  const {t} = useTranslation();

  const styles = useMemo(() => createStyles(), []);
  const filterDate = useSelector(state => state?.filter?.filterDate);

  const [feet, setFeet] = useState(false);
  const [year, setYear] = useState(false);

  const [propertytype, setPropertytype] = useState([]);
  const dispatch = useDispatch();
  

  const [rooms, setRooms] = useState(filterDate?.bedrooms_count);
  const [isRoomFrom, setIsRoomFrom] = useState(false);
  const [isRoomTo, setIsRoomTo] = useState(false);

  const [size, setSize] = useState(filterDate?.size);
  const [isSizeFrom, setIsSizeFrom] = useState(false);
  const [isSizeTo, setIsSizeTo] = useState(false);

  const [bath, setBath] = useState(filterDate?.bathrooms_count);
  const [isBathFrom, setIsBathFrom] = useState(false);
  const [isBathTo, setIsBathTo] = useState(false);


  const [dataToSend, setDataToSend] = useState({
    name: filterDate?.name ? filterDate?.name : null,
    price: filterDate?.price ? filterDate?.price : null,
    address: filterDate?.address ? filterDate?.address : null,
    property_type: filterDate?.property_type ? filterDate?.property_type : null,
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
    // flagSelected: filterDate?.flagSelected ? filterDate?.flagSelected : 0,
    flagSelected: 0,
    type_of_use: filterDate?.type_of_use ? filterDate?.type_of_use : null,
    driver_room: filterDate?.driver_room ? filterDate?.driver_room : null,
    maid_room: filterDate?.maid_room ? filterDate?.maid_room : null,
    on_site_parking: filterDate?.on_site_parking
      ? filterDate?.on_site_parking
      : null,
  });

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: t('Fillter'),

      headerLeft: () => (
        <Pressable
          style={{
            padding: 15,
            paddingLeft: 0,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <X />
        </Pressable>
      ),
      headerRight: () => (
        <Pressable
          style={{padding: 15, paddingRight: 0}}
          onPress={() => {
            //stop
            dispatch(setFilter(null));
            setDataToSend([]);
            dispatch(setNumberFilter(null));

            dispatch(setParamFilter(null));
            navigation.goBack();
            navigation.navigate('Filter');
          }}>
          <CustomText text={t('Clear')} fontFamily={'medium'} color={'white'} />
        </Pressable>
      ),
      headerStyle: {
        backgroundColor: COLORS.primary,
      },
    });
  }, [navigation]);

  var setFilterdata = async () => {
    var filterDataParam = '';
    var flag = 0;
    if (dataToSend?.name) {
      filterDataParam = filterDataParam + `&name=${dataToSend.name}`;
      flag++;
    }
    if (dataToSend?.price != '0,2800000' && dataToSend.price) {
      filterDataParam = filterDataParam + `&price=[${dataToSend.price}]`;
      flag++;
    }

    if (dataToSend?.bedrooms_count) {
      filterDataParam =
        filterDataParam + `&bedrooms_count=[${dataToSend.bedrooms_count}]`;
      flag++;
    }
    if (dataToSend?.bathrooms_count) {
      filterDataParam =
        filterDataParam + `&bathrooms_count=[${dataToSend.bathrooms_count}]`;
      flag++;
    }
    if (dataToSend?.size) {
      filterDataParam = filterDataParam + `&size=[${dataToSend.size}]`;
      flag++;
    }

    if (dataToSend?.address) {
      filterDataParam = filterDataParam + `&address=${dataToSend.address}`;
      flag++;
    }
    if (dataToSend?.property_type && dataToSend.property_type?.length > 0) {
      const stringfie = JSON.stringify([...dataToSend.property_type]);
      flag++;

      filterDataParam = filterDataParam + `&property_type=${stringfie}`;
    }
    if (dataToSend?.type_of_use && dataToSend.type_of_use?.length > 0) {
      const stringfie = JSON.stringify([...dataToSend.type_of_use]);
      flag++;

      filterDataParam = filterDataParam + `&type_of_use=${stringfie}`;
    }

    if (dataToSend?.built_year) {
      flag++;

      filterDataParam =
        filterDataParam + `&built_year=${dataToSend.built_year}`;
    }

    if (dataToSend?.driver_room) {
      flag++;

      filterDataParam =
        filterDataParam + `&driver_room=${dataToSend.driver_room}`;
    }
    if (dataToSend?.maid_room) {
      flag++;

      filterDataParam = filterDataParam + `&maid_room=${dataToSend.maid_room}`;
    }
    if (dataToSend?.on_site_parking) {
      flag++;

      filterDataParam =
        filterDataParam + `&on_site_parking=${dataToSend.on_site_parking}`;
    }

    if (dataToSend?.air_condition_exisit) {
      flag++;

      filterDataParam =
        filterDataParam +
        `&air_condition_exisit=${dataToSend.air_condition_exisit}`;
    }
    if (dataToSend?.Basement) {
      flag++;

      filterDataParam = filterDataParam + `&Basement=${dataToSend.Basement}`;
    }
    if (dataToSend?.stories) {
      flag++;

      filterDataParam = filterDataParam + `&stories=${dataToSend.stories}`;
    }
    if (dataToSend?.city) {
      flag++;

      filterDataParam = filterDataParam + `&city=${dataToSend.city}`;
    }
    if (dataToSend?.purpose) {
      filterDataParam = filterDataParam + `&purpose=${dataToSend.purpose}`;
      flag++;
    }

    dispatch(setFilter({...dataToSend}));
    dispatch(setParamFilter(filterDataParam));
    dispatch(setNumberFilter(flag));
    navigation.navigate('Landing', {filterDataParam: filterDataParam});
  };

  const SavedData = () => {
    setFilterdata();
  };
  reactotron.log('&&&&&', size);
  return (
    <>
      <Container style={styles.keyboardAvoiding}>
        {/* <CustomText
        style={styles.loc}
        text={'Location (0/50)'}
        fontFamily={'medium'}
      /> */}
        {/* <CustomInput
        inputStyle={styles.input}
        placeholder={t('City')}
        containerStyle={styles.cont}
      /> */}
        {/* <SelectThree
        value={
          filterDate?.purpose == 'Recently Sold'
            ? 2
            : filterDate?.purpose == 'For Rent'
            ? 1
            : 0
        }
        onSelect={res => {
          var selected;
          if (res == 0) {
            selected = 'For Sale';
          } else if (res == 1) {
            selected = 'For Rent';
          } else {
            selected = 'Recently Sold';
          }
          setDataToSend(prevState => ({
            ...prevState,
            purpose: selected,
          }));
        }}
        first={t('ForSale')}
        sec={t('ForRent')}
        thr={t('RecentlySold')}
      /> */}
        <Select
          onSelect={(res: number) => {
            var selected: string;
            if (res == 0) {
              selected = 'For Sale';
            } else if (res == 1) {
              selected = 'For Rent';
            }
            setDataToSend(prevState => ({
              ...prevState,
              purpose: selected,
            }));
          }}
          first={t('ForSale')}
          sec={t('ForRent')}
          def={filterDate?.purpose == 'For Rent' ? 1 : 0}
        />

        <View style={styles.shadow}>
          <CustomText
            text={t('typeOfUse')}
            color="black"
            size={14}
            fontFamily="bold"
            containerStyle={[styles.text, styles.title]}
          />

          {typeOfUseData.map(item => (
            <RenderFlatListFilter
              value={filterDate?.type_of_use}
              onSelect={res => {
                let arr = dataToSend?.type_of_use
                  ? [...dataToSend?.type_of_use]
                  : [];
                const searchIndex = arr.findIndex(i => i == res);
                const isSelected = searchIndex >= 0;
                if (isSelected) {
                  arr.splice(searchIndex, 1);
                } else {
                  arr.push(res);
                }
                setDataToSend(prevState => ({
                  ...prevState,
                  type_of_use: arr,
                }));
              }}
              item={item}
            />
          ))}
        </View>

        <View style={styles.shadow}>
          <CustomText
            text={t('propType')}
            color="black"
            size={14}
            fontFamily="bold"
            containerStyle={[styles.text, styles.title]}
          />

          {Data.map(item => (
            <RenderFlatListFilter
              value={filterDate?.property_type}
              onSelect={res => {
                let arr = dataToSend?.property_type
                  ? [...dataToSend?.property_type]
                  : [];
                const searchIndex = arr.findIndex(i => i == res);
                const isSelected = searchIndex >= 0;
                if (isSelected) {
                  arr.splice(searchIndex, 1);
                } else {
                  arr.push(res);
                }
                setPropertytype(arr);
                setDataToSend(prevState => ({
                  ...prevState,
                  property_type: arr,
                }));
              }}
              item={item}
            />
          ))}
        </View>

        <CustomSlider
          value={filterDate?.price ?? null}
          onChange={res => {
            setDataToSend(prevState => ({
              ...prevState,
              price: res,
            }));
          }}
        />

        <View style={styles.shadow}>
          <CustomText
            text={t('propSize')}
            color="black"
            size={14}
            fontFamily="bold"
            containerStyle={styles.text}
          />
          <View style={styles.selectedContainer}>
            <SelectedButton
              onPress={() => {
                setIsSizeFrom(true);
              }}
              text={(size && size[0]) || t('from')}
            />
            <SelectedButton
              onPress={() => {
                setIsSizeTo(true);
              }}
              text={(size && size[1]) || t('to')}
            />
          </View>
        </View>

        <View style={styles.shadow}>
          <CustomText
            text={t('Bedrooms')}
            color="black"
            size={14}
            fontFamily="bold"
            containerStyle={styles.text}
          />
          <View style={styles.selectedContainer}>
            <SelectedButton
              onPress={() => {
                setIsRoomFrom(true);
              }}
              text={(rooms && rooms[0]) || t('from')}
            />
            <SelectedButton
              onPress={() => {
                setIsRoomTo(true);
              }}
              text={(rooms && rooms[1]) || t('to')}
            />
          </View>
        </View>
        <View style={styles.shadow}>
          <CustomText
            text={t('Bathrooms')}
            color="black"
            size={14}
            fontFamily="bold"
            containerStyle={styles.text}
          />
          <View style={styles.selectedContainer}>
            <SelectedButton
              onPress={() => {
                setIsBathFrom(true);
              }}
              text={(bath && bath[0]) || t('from')}
            />
            <SelectedButton
              onPress={() => {
                setIsBathTo(true);
              }}
              text={(bath && bath[1]) || t('to')}
            />
          </View>
        </View>

        <View style={styles.shadow}>
          <CustomText
            text={t('service')}
            color="black"
            size={14}
            fontFamily="bold"
            containerStyle={[styles.text, styles.title]}
          />

          {serviceData.map(item => (
            <RenderFlatListFilter
              value={[filterDate && filterDate[item] && item]}
              onSelect={res => {
                
                let newResult = dataToSend
                if (newResult[res]) {
                  newResult[res] = null;
                } else {
                  newResult[res] = true;
                }
                
               
                setDataToSend(prevState => ({
                  ...prevState,
                  ...newResult,
                }));
              }}
              item={item}
            />
          ))}
        </View>

        <View style={styles.shadow}>
          <CustomText
            text={t('garag')}
            color="black"
            size={14}
            fontFamily="bold"
            containerStyle={[styles.text, styles.title]}
          />

          {garagData.map(item => (
            <RenderFlatListFilter
              value={[filterDate && filterDate[item] && item]}
              onSelect={res => {
                let newResult = dataToSend
                if (newResult[res]) {
                  newResult[res] = null;
                } else {
                  newResult[res] = true;
                }
                
               
                setDataToSend(prevState => ({
                  ...prevState,
                  ...newResult,
                }));
              }}
              item={item}
            />
          ))}
        </View>

        <CustomButton
          containerStyle={styles.button}
          text={'Apply'}
          onPress={() => {
            SavedData();
          }}
          textFontFamily={'medium'}
        />
      </Container>
      {isRoomFrom && (
        <CustomPicker
          onClose={() => {
            setIsRoomFrom(false);
          }}
          list={Array.from({length: 9}, (_, i) => i + 1).map(String)}
          onDone={(selected: {selected: string}) => {
            setRooms([selected, null]);
            setIsRoomFrom(false);
          }}
        />
      )}
      {isRoomTo && rooms && (
        <CustomPicker
          onClose={() => {
            setIsRoomTo(false);
          }}
          placeholder={t('from')}
          list={Array.from(
            {length: 10 - parseInt(rooms[0])},
            (_, i) => parseInt(rooms[0]) + 1 + i,
          ).map(String)}
          onDone={(selected: {selected: string}) => {
            let selectedRooms = rooms;
            selectedRooms[1] = selected;
            setRooms(selectedRooms);
            setDataToSend(prevState => ({
              ...prevState,
              bedrooms_count: selectedRooms,
            }));
            setIsRoomTo(false);
          }}
        />
      )}

      {isSizeFrom && (
        <CustomPicker
          onClose={() => {
            setIsSizeFrom(false);
          }}
          list={Array.from({length: 99}, (_, i) => (i + 5) * 10).map(String)}
          onDone={(selected: {selected: string}) => {
            setSize([selected, null]);
            setIsSizeFrom(false);
          }}
        />
      )}
      {isSizeTo && size && (
        <CustomPicker
          onClose={() => {
            setIsSizeTo(false);
          }}
          placeholder={t('from')}
          list={Array.from(
            {length: 105 - parseInt(size[0]) / 10},
            (_, i) => (parseInt(size[0]) / 10 + 1 + i) * 10,
          ).map(String)}
          onDone={(selected: {selected: string}) => {
            let selectedSize = size;
            selectedSize[1] = selected;
            setSize(selectedSize);
            setDataToSend(prevState => ({
              ...prevState,
              size: selectedSize,
            }));
            setIsSizeTo(false);
          }}
        />
      )}

      {isBathFrom && (
        <CustomPicker
          onClose={() => {
            setIsBathFrom(false);
          }}
          list={Array.from({length: 9}, (_, i) => i + 1).map(String)}
          onDone={(selected: {selected: string}) => {
            setBath([selected, null]);
            setIsBathFrom(false);
          }}
        />
      )}
      {isBathTo && bath && (
        <CustomPicker
          onClose={() => {
            setIsBathTo(false);
          }}
          placeholder={t('from')}
          list={Array.from(
            {length: 10 - parseInt(bath[0])},
            (_, i) => parseInt(bath[0]) + 1 + i,
          ).map(String)}
          onDone={(selected: {selected: string}) => {
            let selectedBath = bath;
            selectedBath[1] = selected;
            setBath(selectedBath);
            setDataToSend(prevState => ({
              ...prevState,
              bathrooms_count: selectedBath,
            }));
            setIsBathTo(false);
          }}
        />
      )}
    </>
  );
};

export default FilterView;

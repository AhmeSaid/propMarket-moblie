import React, {useEffect, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {I18nManager, Modal, View, FlatList, Pressable} from 'react-native';
import reactotron from 'reactotron-react-native';
import {SearchIcon, SideArrow} from '../../assets/svg';
import {COLORS} from '../../constants/theme';
import {
  useGetAllCitiesMutation,
  useGetAllStatesMutation,
} from '../../services/propService';
import CustomInput from '../customInput';
import CustomText from '../customText';
import createStyles from './styles';

const CitiesModal = ({
  isOpen,
  onClose,
  onSelect,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (selected: object) => void;
}) => {
  const {t} = useTranslation();

  const styles = useMemo(() => createStyles(), []);
  const [getCities] = useGetAllCitiesMutation();
  const [getStates] = useGetAllStatesMutation();

  const [cityList, setCityList] = useState();
  const [stateList, setStateList] = useState();
  const [isState, setIsStates] = useState(false);
  const [selectedCity, setSelectedCity] = useState({});
  const [selectedState, setSelectedState] = useState({});
  const [isCitySelected, setIsCitySelected] = useState(false);

  const {
    container,
    body,
    header,
    titleStyle,
    inputStyle,
    listTitle,
    listStyle,
    itemContainer,
    closeContainer,
  } = styles;

  useEffect(() => {
    if (isOpen)
      getCities().then((res: any) => {
        setCityList(res?.data?.results);
      });
  }, [isOpen]);

  const handleStates = (data: any) => {
    getStates(data).then((res: any) => {
      setStateList(res?.data?.results);
    });
  };

  const onItemPress = (item: any) => {
    if (!isCitySelected) {
      handleStates(item?.id);
      setSelectedCity(item);
      setIsCitySelected(true);
    } else {
      setSelectedState(item);
      setSelectedCity({});
      setStateList(undefined);
      setIsCitySelected(false);
      onClose();
      onSelect(item);
    }
  };

  const renderItem = ({item}: {item: any}) => {
    return (
      <Pressable
        onPress={() => {
          onItemPress(item);
        }}
        style={itemContainer}>
        <CustomText color="black" text={item.name} />
      </Pressable>
    );
  };

  return (
    <Modal transparent visible={isOpen}>
      <View style={container}>
        <View style={body}>
          <View style={header}>
            <Pressable
              onPress={() => {
                if (isCitySelected) {
                  setStateList(undefined);
                } else {
                  onClose();
                }
                setIsCitySelected(false);
              }}
              style={closeContainer}>
              <SideArrow
                color={COLORS.primary}
                style={{
                  transform: [{rotateZ: I18nManager.isRTL ? '180deg' : '0deg'}],
                }}
              />
            </Pressable>
            <CustomText
              fontFamily="bold"
              color="primary"
              text={isCitySelected ? selectedCity?.name : t('selectCity')}
              containerStyle={titleStyle}
            />
          </View>

          <CustomInput
            placeholder={
              (isCitySelected
                ? t('searchIn') + selectedCity?.name
                : t('citySearch')) + ' ...'
            }
            inputStyle={inputStyle}
            leftIcon={<SearchIcon />}
          />

          <CustomText
            fontFamily="bold"
            text={t('allCities')}
            size={14}
            containerStyle={listTitle}
          />

          <FlatList
            style={listStyle}
            data={stateList || cityList || []}
            renderItem={renderItem}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CitiesModal;

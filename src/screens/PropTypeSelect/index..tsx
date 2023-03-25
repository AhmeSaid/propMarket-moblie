import React, {FC, useMemo, useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {_retrieveData} from '../../utils/storageController';
import createStyles from './style';
import {FlatList, Image, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import StepsBar from '../../components/StepsBar';
import CustomButton from '../../components/customButton';
import CustomText from '../../components/customText';
import {
  ApartmentIcon,
  ApartmentSelectIcon,
  BedRoom,
  DeskIcon,
  FloorIcon,
  VillaIcon,
} from '../../assets/svg';
import CardButton from '../../components/CardButton';
import {PropType} from '../../assets/images';
import CountFilterItem from '../../components/CountFilterItem';
import {COLORS} from '../../constants/theme';
import { useDispatch } from 'react-redux';
import { setMoving } from '../../store/slices/movingSlice';

const numbers = [...Array(7).keys()];
interface PropTypeSelect {
  navigation: NavigationProp<ParamListBase>;
}

const PropTypeSelect: FC<PropTypeSelect> = ({navigation}) => {
  const totalSteps = 5;
  const dispatch = useDispatch();

  const styles = useMemo(() => createStyles(), []);

  const {
    container,
    body,
    nextBtn,
    row,
    propTypeIcon,
    overrideContainer,
    separator,
    bedroomsContainer,
    bedroomsText,
    propTypeText,
  } = styles;

  const {t} = useTranslation();
  const [selectedPropType, setSelectedPropType] = useState('');
  const [selectedRoomCount, setSelectedRoomCount] = useState(-1);

  return (
    <View style={container}>
      <StepsBar
        title={t('propDetails')}
        totalSteps={totalSteps}
        currentStep={2}
      />

      <View style={body}>
        <CustomText
          text={t('PropertyType')}
          leftIcon={<Image source={PropType} style={propTypeIcon} />}
          containerStyle={propTypeText}
        />

        <View style={row}>
          <CardButton
            text={t('Apartments')}
            icon={<ApartmentSelectIcon />}
            onPress={() => {
              setSelectedPropType('Apartments');
            }}
            overrideContainerStyle={{
              borderWidth: selectedPropType == 'Apartments' ? 1 : 0,
            }}
          />

          <CardButton
            text={t('Villas')}
            icon={<VillaIcon width={69} height={69} />}
            onPress={() => {
              setSelectedPropType('Villas');
            }}
            overrideContainerStyle={{
              borderWidth: selectedPropType == 'Villas' ? 1 : 0,
            }}
          />
        </View>

        <View style={row}>
          <CardButton
            text={t('Floor')}
            icon={<FloorIcon width={69} height={69} />}
            onPress={() => {
              setSelectedPropType('Floor');
            }}
            overrideContainerStyle={{
              borderWidth: selectedPropType == 'Floor' ? 1 : 0,
            }}
          />

          <CardButton
            text={t('desk')}
            icon={<DeskIcon />}
            onPress={() => {
              setSelectedPropType('desk');
            }}
            overrideContainerStyle={{
              borderWidth: selectedPropType == 'desk' ? 1 : 0,
            }}
          />
        </View>

        <View style={bedroomsContainer}>
          <CustomText
            text={t('Bedrooms')}
            leftIcon={<BedRoom />}
            containerStyle={bedroomsText}
          />

          <FlatList
            horizontal
            data={numbers}
            renderItem={({item}) => (
              <CountFilterItem
                textColor="black"
                overrideContainer={[
                  overrideContainer,
                  {
                    borderColor:
                      selectedRoomCount == item ? COLORS.blue : COLORS.inactive,
                    backgroundColor:
                      selectedRoomCount == item ? COLORS.lightBlue : COLORS.flbg,
                  },
                ]}
                item={item}
                onPress={() => {
                  setSelectedRoomCount(item);
                }}
              />
            )}
            ItemSeparatorComponent={() => <View style={separator} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={nextBtn}>
          <CustomButton
            text={t('next')}
            disabled={selectedPropType == '' || selectedRoomCount == -1}
            activeColor={COLORS.primary}
            onPress={() => {
              dispatch(setMoving({propType: selectedPropType, roomsCount: selectedRoomCount}));
              navigation.navigate('MovingWaySelect');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default PropTypeSelect;

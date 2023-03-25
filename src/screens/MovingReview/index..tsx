import React, {FC, useMemo, useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {_retrieveData} from '../../utils/storageController';
import createStyles from './style';
import {FlatList, Text, Modal, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import StepsBar from '../../components/StepsBar';
import CustomButton from '../../components/customButton';
import CustomText from '../../components/customText';
import {
  ApartmentIcon,
  ApartmentSelectIcon,
  BedRoom,
  DeskIcon,
  ElevatorIcon,
  FloorIcon,
  GroundIcon,
  MovingWayIcon,
  NoPackagingIcon,
  PackaginIcon,
  PhoneIcon,
  PinIcon,
  ProfileIcon,
  StairsIcon,
  SuccessIcon,
  VillaIcon,
  WinchIcon,
} from '../../assets/svg';
import CardButton from '../../components/CardButton';
import {PropType} from '../../assets/images';
import CountFilterItem from '../../components/CountFilterItem';
import ReviewCard from '../../components/ReviewCard';
import {useSelector} from 'react-redux';
import {selectCurrentUser} from '../../store';
import {selectMovingData} from '../../store/slices/movingSlice';

const numbers = [...Array(7).keys()];
interface MovingReview {
  navigation: NavigationProp<ParamListBase>;
}

const MovingReview: FC<MovingReview> = ({navigation}) => {
  const user = useSelector(selectCurrentUser);
  const movingData = useSelector(selectMovingData);
  const totalSteps = 5;

  const styles = useMemo(() => createStyles(), []);

  const {container, body, nextBtn, modalContainer, modalBody, requestNum, waitForPrice, homeButton} = styles;

  const {roomsCount, fromLocation, toLocation, fromWay, toWay} = movingData;

  const {t} = useTranslation();
  const [isOpen, setIsOpen] = useState(false)

  const reviewData = [
    {
      title: t('Name'),
      icon: <ProfileIcon />,
      value: user?.username,
    },
    {
      title: t('phoneNum'),
      icon: <PhoneIcon />,
      value: user?.phone,
    },
    {
      title: t('oldAddress'),
      icon: <PinIcon />,
      value: fromLocation,
    },
    {
      title: t('movingWayReview'),
      icon: <MovingWayIcon />,
      value: t(fromWay),
    },
    {
      title: t('newAddress'),
      icon: <PinIcon />,
      value: toLocation,
    },
    {
      title: t('movingWayReview'),
      icon: <MovingWayIcon />,
      value: t(toWay),
    },
    {
      title: t('Bedrooms'),
      icon: <BedRoom />,
      value: roomsCount,
    },
  ];

  return (
    <View style={container}>
      <StepsBar title={t('review')} totalSteps={totalSteps} currentStep={5} />

      <View style={body}>
        {reviewData.map((item, index) => (
          <ReviewCard
            title={item.title}
            icon={item.icon}
            value={item.value}
            isLine={index != 2 && index != 4}
          />
        ))}

        <CustomButton
          text={t('next')}
          containerStyle={nextBtn}
          onPress={() => {
            setIsOpen(true)
          }}
        />
      </View>
      <Modal transparent visible={isOpen}>
        <View style={modalContainer}>
          <View style={modalBody}>
            <SuccessIcon />

            <CustomText text={t('furRequestSent')} />
            <CustomText style={waitForPrice} size={14} text={t('waitForPrice')} />
            <CustomText size={13} text={t('requestNum')}>
              <Text style={requestNum} >{Math.floor(Math.random() * (9999999 - 1111111))}</Text>
            </CustomText>
            <CustomButton text={t('home')} containerStyle={homeButton} onPress={() => {
              navigation.navigate('Home')
            }} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MovingReview;

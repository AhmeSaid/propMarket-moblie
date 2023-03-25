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
  ElevatorIcon,
  FloorIcon,
  GroundIcon,
  NoPackagingIcon,
  PackaginIcon,
  StairsIcon,
  VillaIcon,
  WinchIcon,
} from '../../assets/svg';
import CardButton from '../../components/CardButton';
import {PropType} from '../../assets/images';
import CountFilterItem from '../../components/CountFilterItem';
import {useDispatch} from 'react-redux';
import {setMoving} from '../../store/slices/movingSlice';
import {COLORS} from '../../constants/theme';

const numbers = [...Array(7).keys()];
interface MovingWaySelect {
  navigation: NavigationProp<ParamListBase>;
}

const MovingWaySelect: FC<MovingWaySelect> = ({navigation}) => {
  const totalSteps = 5;
  const dispatch = useDispatch();
  const styles = useMemo(() => createStyles(), []);

  const {
    container,
    body,
    nextBtn,
    row,

    cardButton,
    title,
  } = styles;

  const {t} = useTranslation();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [isPackaging, setIsPackaging] = useState(null);

  return (
    <View style={container}>
      <StepsBar
        title={t('movingWay')}
        totalSteps={totalSteps}
        currentStep={3}
      />

      <View style={body}>
        <CustomText
          text={t('movingFurFrom')}
          size={15}
          containerStyle={title}
        />

        <View style={row}>
          <CardButton
            text={t('groundFloor')}
            icon={<GroundIcon />}
            textSize={13}
            onPress={() => {
              setFrom('groundFloor');
            }}
            overrideContainerStyle={[
              cardButton,
              {borderWidth: from == 'groundFloor' ? 1 : 0},
            ]}
          />

          <CardButton
            text={t('stairs')}
            icon={<StairsIcon />}
            textSize={13}
            onPress={() => {
              setFrom('stairs');
            }}
            overrideContainerStyle={[
              cardButton,
              {borderWidth: from == 'stairs' ? 1 : 0},
            ]}
          />
          <CardButton
            text={t('elevator')}
            icon={<ElevatorIcon />}
            textSize={13}
            onPress={() => {
              setFrom('elevator');
            }}
            overrideContainerStyle={[
              cardButton,
              {borderWidth: from == 'elevator' ? 1 : 0},
            ]}
          />
          <CardButton
            text={t('winch')}
            icon={<WinchIcon />}
            textSize={13}
            onPress={() => {
              setFrom('winch');
            }}
            overrideContainerStyle={[
              cardButton,
              {borderWidth: from == 'winch' ? 1 : 0},
            ]}
          />
        </View>

        <CustomText text={t('movingFurTo')} size={15} containerStyle={title} />

        <View style={row}>
          <CardButton
            text={t('groundFloor')}
            icon={<GroundIcon />}
            textSize={13}
            onPress={() => {
              setTo('groundFloor');
            }}
            overrideContainerStyle={[
              cardButton,
              {borderWidth: to == 'groundFloor' ? 1 : 0},
            ]}
          />

          <CardButton
            text={t('stairs')}
            icon={<StairsIcon />}
            textSize={13}
            onPress={() => {
              setTo('stairs');
            }}
            overrideContainerStyle={[
              cardButton,
              {borderWidth: to == 'stairs' ? 1 : 0},
            ]}
          />
          <CardButton
            text={t('elevator')}
            icon={<ElevatorIcon />}
            textSize={13}
            onPress={() => {
              setTo('elevator');
            }}
            overrideContainerStyle={[
              cardButton,
              {borderWidth: to == 'elevator' ? 1 : 0},
            ]}
          />
          <CardButton
            text={t('winch')}
            icon={<WinchIcon />}
            textSize={13}
            onPress={() => {
              setTo('winch');
            }}
            overrideContainerStyle={[
              cardButton,
              {borderWidth: to == 'winch' ? 1 : 0},
            ]}
          />
        </View>

        <CustomText
          text={t('packagingService')}
          size={15}
          containerStyle={title}
        />

        <View style={row}>
          <CardButton
            text={t('yesPackaging')}
            icon={<PackaginIcon />}
            onPress={() => {
              setIsPackaging(true);
            }}
            overrideContainerStyle={[
              {borderColor: COLORS.blue, borderWidth: isPackaging ? 1 : 0},
            ]}
          />

          <CardButton
            text={t('noPackaging')}
            icon={<NoPackagingIcon />}
            onPress={() => {
              setIsPackaging(false);
            }}
            overrideContainerStyle={[
              {
                borderColor: COLORS.blue,
                borderWidth: isPackaging == false ? 1 : 0,
              },
            ]}
          />
        </View>
        <View style={nextBtn}>
          <CustomButton
            text={t('next')}
            disabled={from == '' || to == '' || isPackaging == null}
            activeColor={COLORS.primary}
            onPress={() => {
              dispatch(
                setMoving({
                  fromWay: from,
                  toWay: to,
                  isPackaging: isPackaging,
                }),
              );

              navigation.navigate('MovingTimeSelect');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default MovingWaySelect;

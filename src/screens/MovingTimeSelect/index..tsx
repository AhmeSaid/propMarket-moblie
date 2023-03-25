import React, {FC, useMemo, useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {_retrieveData} from '../../utils/storageController';
import createStyles from './style';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import StepsBar from '../../components/StepsBar';
import CustomButton from '../../components/customButton';
import CustomText from '../../components/customText';
import SelectTimeCard from '../../components/SelectTimeCard';
import {useDispatch} from 'react-redux';
import {setMoving} from '../../store/slices/movingSlice';
import { COLORS } from '../../constants/theme';

const numbers = [...Array(7).keys()];
interface MovingTimeSelect {
  navigation: NavigationProp<ParamListBase>;
}

const MovingTimeSelect: FC<MovingTimeSelect> = ({navigation}) => {
  const totalSteps = 5;
  const dispatch = useDispatch();

  const styles = useMemo(() => createStyles(), []);

  const {container, body, nextBtn, title, overrideContainerStyle} = styles;

  const {t} = useTranslation();

  const [movingTime, setMovingTime] = useState('');

  const times = ['withen3weeks', 'in2months', 'in6months', 'pricesOnly'];

  return (
    <View style={container}>
      <StepsBar
        title={t('movingTime')}
        totalSteps={totalSteps}
        currentStep={4}
      />

      <View style={body}>
        <CustomText
          text={t('movingTimeSelect')}
          size={15}
          containerStyle={title}
        />

        {times.map(item => (
          <SelectTimeCard
            text={t(item)}
            overrideContainerStyle={[
              overrideContainerStyle,
              {borderWidth: movingTime == item ? 1 : 0},
            ]}
            onPress={() => {
              setMovingTime(item);
            }}
          />
        ))}

        <CustomButton
          text={t('next')}
          containerStyle={nextBtn}
          disabled={movingTime == ''}
          activeColor={COLORS.primary}
          onPress={() => {
            dispatch(
              setMoving({
                movingTime: movingTime,
              }),
            );
            navigation.navigate('MovingReview');

          }}
        />
      </View>
    </View>
  );
};

export default MovingTimeSelect;

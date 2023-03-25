import React, {useMemo} from 'react';
import {View} from 'react-native';
import createStyles from './styles';
import moment from 'moment';
import CustomText from '../customText';
import SliderView from '../SliderView';
import {COLORS} from '../../constants/theme';
import {useTranslation} from 'react-i18next';

const StepsBar = ({
  currentStep,
  totalSteps,
  title
}: {
  currentStep: number;
  totalSteps: number;
  title: string
}) => {
  const styles = useMemo(() => createStyles(), []);
  const {t} = useTranslation();

  const {
    stiderContainer,
    overrideContainerStyle,
    overrideSilerContainer,
    overrideFilledView,
  } = styles;

  moment.locale();
  return (
    <View style={stiderContainer}>
      <CustomText text={title} size={15} />
      <SliderView
        total={totalSteps}
        current={currentStep}
        overrideContainerStyle={overrideContainerStyle}
        overrideSilerContainer={overrideSilerContainer}
        overrideFilledView={overrideFilledView}
        textColor={COLORS.black}
      />
    </View>
  );
};

export default StepsBar;

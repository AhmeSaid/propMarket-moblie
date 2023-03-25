import React, {useMemo} from 'react';
import {View} from 'react-native';
import createStyles from './styles';
import moment from 'moment';
import CustomText from '../customText';

const SliderView = ({
  total,
  current,
  overrideContainerStyle,
  overrideSilerContainer,
  overrideFilledView,
  textColor = 'white',
}: {
  total: number;
  current: number;
  overrideContainerStyle?: object;
  overrideSilerContainer?: object;
  overrideFilledView?: object;
  textColor?: string;
}) => {
  const styles = useMemo(() => createStyles(), []);

  const {container, sliderContainer, filledView} = styles;

  moment.locale();
  return (
    <View style={[container, overrideContainerStyle]}>
      <View style={[sliderContainer, overrideSilerContainer]}>
        <View
          style={[
            filledView,
            {width: `${(current / total) * 100}%`},
            overrideFilledView,
          ]}
        />
      </View>
      <CustomText text={total + '/' + current} color={textColor} />
    </View>
  );
};

export default SliderView;

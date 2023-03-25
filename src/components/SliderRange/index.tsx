import {Slider} from '@miblanchard/react-native-slider';
import {t} from 'i18next';
import React, {useEffect, useMemo} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {COLORS} from '../../constants/theme';
import CustomText from '../customText';
import createStyles from './styles';
const DEFAULT_VALUE = [0, 2800000];

const SliderContainer = (React.FC = ({
  caption,
  children,
  sliderValue,
  trackMarks,
  vertical,
  onChangeValue,
}: {
  caption: string;
  children: React.ReactElement;
  sliderValue?: Array<number>;
  trackMarks?: Array<number>;
  vertical?: boolean;
  onChangeValue: any;
}) => {
  // const {caption, sliderValue, trackMarks} = props;
  const [value, setValue] = React.useState(
    sliderValue ? sliderValue : DEFAULT_VALUE,
  );
  let renderTrackMarkComponent: React.ReactNode;
  useEffect(() => {
    onChangeValue(value);
  }, [value]);
  const styles = useMemo(() => createStyles(), []);

  const {ter, terh, priceView, anyView} = styles;

  const renderChildren = () => {
    return React.Children.map(children, (child: React.ReactElement) => {
      if (!!child && child.type === Slider) {
        return React.cloneElement(child, {
          onValueChange: setValue,
          renderTrackMarkComponent,
          trackMarks,
          value,
        });
      }

      return child;
    });
  };

  return (
    <View style={priceView}>
      <View style={anyView}>
        <CustomText
          fontFamily="regular"
          size={13}
          color={'black'}
          text={Array.isArray(value) ? value.join(' - ') : value}
        />
      </View>

      <View style={[ter]} />
      <View
        style={[
          terh,
          {
            // borderColor: COLORS.inactive,
          },
        ]}
      />
      <>{renderChildren()}</>
    </View>
  );
});

// import { Container } from './styles';
const SliderRange = ({onChange, value}: {onChange: any; value: any}) => {
  const styles = useMemo(() => createStyles(), []);
  const {thumbStyle} = styles;
  return (
    <SliderContainer
      onChangeValue={res => {
        onChange(res);
      }}
      sliderValue={value}>
      <Slider
        animateTransition
        maximumTrackTintColor={COLORS.lightBlue2}
        maximumValue={2800000}
        minimumTrackTintColor={COLORS.white}
        minimumValue={0}
        thumbStyle={thumbStyle}
        step={1}
        value={value}
        // onValueChange={res => console.log(res)}
        thumbTintColor={COLORS.white}
      />
    </SliderContainer>
  );
};

export default SliderRange;

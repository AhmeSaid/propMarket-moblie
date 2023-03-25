import {Slider} from '@miblanchard/react-native-slider';
import {t} from 'i18next';
import React, {useEffect} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {COLORS, sh, sw, width} from '../constants/theme';
import CustomText from './customText';
import ViewShadow from './ViewShadow';
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
    <View style={styles.priceView}>
      <CustomText
          text={t('price')}
          color="black"
          size={14}
          fontFamily="bold"
        />
      <View style={styles.anyView}>
        <CustomText
          fontFamily="regular"
          size={13}
          color={'black'}
          text={
            value[0] == 0 && value[1] == 2800000
              ? t('notSelected')
              : Array.isArray(value)
              ? value.join(' - ')
              : value
          }
        />
      </View>

      <View style={[styles.ter]} />
      <View
        style={[
          styles.terh,
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
const CustomSlider = ({onChange, value}: {onChange: any; value: any}) => {
  return (
    <SliderContainer
      onChangeValue={res => {
        onChange(res);
      }}
      sliderValue={value}>
      <Slider
        animateTransition
        maximumTrackTintColor={COLORS.semiGray}
        maximumValue={2800000}
        minimumTrackTintColor={COLORS.primary}
        minimumValue={0}
        thumbStyle={styles.thumbStyle}
        step={1}
        value={value}
        // onValueChange={res => console.log(res)}
        thumbTintColor={COLORS.white}
      />
    </SliderContainer>
  );
};

export default CustomSlider;
const styles = StyleSheet.create({
  thumbStyle: {
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  ter: {
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    bottom: -16.7,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    color: 'transparent',
    overflow: 'hidden',
    alignSelf: 'center',
    transform: [{rotate: '180deg'}],
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderBottomColor: COLORS.inactive,
  },
  terh: {
    bottom: -6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    alignSelf: 'center',
    transform: [{rotate: '180deg'}],
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderBottomColor: COLORS.white,
  },
  priceView: {
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    marginBottom: 14,
    paddingVertical: 14
  },

  any: {
    marginTop: 0,
    paddingVertical: sh(22),
  },
  anyLast: {
    paddingVertical: sh(22),
    paddingHorizontal: sw(18),
    borderColor: COLORS.gray,
  },
  anyView: {
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    paddingVertical: sh(10),
    width: width / 2,
    borderColor: COLORS.inactive,
    borderWidth: 0.5,
    borderRadius: 3,
    alignItems: 'center',
    top: sh(20),
  },
});

import {t} from 'i18next';
import React, {useMemo} from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import reactotron from 'reactotron-react-native';
import {
  ApartmentIcon,
  BedRoom,
  FloorIcon,
  LandIcon,
  VillaIcon,
} from '../../assets/svg';
import {COLORS} from '../../constants/theme';
import CustomText from '../customText';
import PropTexts from '../PropTexts';
import PropTypeFilterItem from '../PropTypeFilterItem';
import CustomSlider from '../Slider';
import SliderRange from '../SliderRange';
import createStyles from './styles';

const SliderRangeContainer = ({
  title,
  onSelect,
  defaultVal
}: {
  title?: string;
  onSelect: (selected: Array<string>) => void;
  defaultVal: Array<string>
}) => {
  const styles = useMemo(() => createStyles(), []);

  const {separator, text} = styles;


  return (
    <View style={{}}>
      <CustomText
        color={COLORS.whiteRgba(0.7)}
        text={title}
        size={14}
        style={text}
      />

      <SliderRange
        value={defaultVal}
        onChange={(res: any) => {
          onSelect(res);
        }}
      />
    </View>
  );
};

export default SliderRangeContainer;

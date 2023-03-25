import {t} from 'i18next';
import React, {useMemo, useState} from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import reactotron from 'reactotron-react-native';
import {BedRoom} from '../../assets/svg';
import {COLORS} from '../../constants/theme';
import CustomText from '../customText';
import PropTexts from '../PropTexts';
import createStyles from './styles';

const CountFilterItem = ({
  item,
  overrideContainer,
  textColor= "white",
  onPress
}: {
  item: any;
  overrideContainer?: object;
  textColor?: string
  onPress: (selected: number) => void
}) => {
  const styles = useMemo(() => createStyles(), []);


  const {container, text} = styles;
  return (
    <Pressable
      onPress={() => {onPress(item)}}
      style={[container, overrideContainer]}>
      <CustomText text={item+1} size={18} color={textColor} style={text} />
    </Pressable>
  );
};

export default CountFilterItem;

import React, {useMemo} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import reactotron from 'reactotron-react-native';
import {BedRoom} from '../../assets/svg';
import {COLORS} from '../../constants/theme';
import CustomText from '../customText';
import PropTexts from '../PropTexts';
import createStyles from './styles';

const LastSearchItem = ({item, navigation}: {item: any; navigation: any}) => {
  const styles = useMemo(() => createStyles(), []);

  const {container} = styles;
  return (
    <Pressable
      onPress={() => {
      }}
      style={container}>
      <CustomText num={1} color={COLORS.whiteRgba(1)} text={item.title} size={14} />
    </Pressable>
  );
};

export default LastSearchItem;

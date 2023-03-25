import {t} from 'i18next';
import React, {useMemo, useState} from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import reactotron from 'reactotron-react-native';
import {BedRoom} from '../../assets/svg';
import {COLORS} from '../../constants/theme';
import CustomText from '../customText';
import PropTexts from '../PropTexts';
import createStyles from './styles';

const PropTypeFilterItem = ({
  item,
  onSelected,
  containerStyle
}: {
  item: any;
  onSelected: (name: string) => void;
  containerStyle?: object
}) => {
  const styles = useMemo(() => createStyles(), []);

  const [selected, setSelected] = useState(null);

  const {container, text} = styles;
  return (
    <Pressable
      onPress={() => {
        setSelected(item.name);
        onSelected(item.name)
      }}
      style={[container, containerStyle]}>
      {item.icon}
      <CustomText text={t(item.name)} size={11} color="white" style={text} />
    </Pressable>
  );
};

export default PropTypeFilterItem;

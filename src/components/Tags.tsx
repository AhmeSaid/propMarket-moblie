import React, {useMemo, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {COLORS, sw} from '../constants/theme';
import CustomText from './customText';

// import { Container } from './styles';

const RenderTags = ({item}: {item: object}) => {
  const [select, setSelect] = useState(false);

  return (
    <Pressable
      onPress={() => setSelect(!select)}
      style={[styles.tags, select && styles.selected]}>
      <CustomText
        text={item}
        size={12}
        color={select ? 'white' : 'gray'}
        fontFamily={'regular'}
      />
    </Pressable>
  );
};

export default RenderTags;
const styles = StyleSheet.create({
  tags: {
    borderWidth: 0.5,
    alignSelf: 'center',
    paddingHorizontal: sw(15),
    paddingVertical: sw(6),
    borderColor: COLORS.inactive,
    borderRadius: 17,
    marginRight: sw(8),
    marginBottom: sw(8),
  },
  tagView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    paddingBottom: sw(10),
    borderColor: COLORS.shadow,
  },
  selected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
});

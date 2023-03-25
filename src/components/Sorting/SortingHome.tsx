//import liraries
import React, {useMemo, useState} from 'react';
import {Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {True} from '../../assets/svg';
import CustomText from '../customText';
import createStyles from './styles';

// create a component
const SortingComponent = ({
  item,
  onClick,
  style,
  clicked,
  onSelected,
}: {
  item: object;
  onClick: any;
  style: any;
  clicked: any;
  onSelected?: any;
}) => {
  const styles = useMemo(() => createStyles(), []);
  const sortName = useSelector(state => state.filter.sortName);
  return (
    <Pressable
      onPress={() => {
        if (clicked == item) {
          onClick && onClick('');
        } else {
          onClick && onClick(item.title);
          onSelected && onSelected(item);
        }
      }}
      style={[styles.rowShow, style]}>
      <CustomText fontFamily="regular" containerStyle={styles.flatListText}>
        {item?.title}
      </CustomText>
      {item.subTitle == sortName && <True />}
    </Pressable>
  );
};

export default SortingComponent;

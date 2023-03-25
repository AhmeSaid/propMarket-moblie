import React, {FC, useEffect, useMemo, useRef, useState} from 'react';
import {Pressable} from 'react-native';
import {EmptyCircle, GreenCircle} from '../assets/svg';
import RenderVerticalItem from './renderFlatList/RenderVerticalItem';

const CompareItem = ({item, onPress, onSelect, data}) => {
  // const [select, setSelect] = useState(false);

  const isSelected = useMemo(() => {
    return data.includes(item);
  }, [data]);
  // useEffect(() => {
  //   setSelect(data.includes(item));
  // }, [data]);
  return (
    <RenderVerticalItem
      item={item}
      icons={
        <Pressable
          onPress={() => {
            // setSelect(!select);
            onPress();
          }}>
          {isSelected ? <GreenCircle /> : <EmptyCircle />}
        </Pressable>
      }
    />
  );
};
export default CompareItem;

import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, View} from 'react-native';
import reactotron from 'reactotron-react-native';
import {COLORS} from '../../constants/theme';
import CountFilterItem from '../CountFilterItem';
import CustomText from '../customText';
import createStyles from './styles';

const CountSelectContainer = ({
  title,
  onSelected,
  overrideItemContainer,
  defaultSelected,
}: {
  title: string;
  onSelected: (selected: number) => void;
  overrideItemContainer: object;
  defaultSelected: number;
}) => {
  const styles = useMemo(() => createStyles(), []);

  const {container, separator, text} = styles;

  const numbers = [...Array(7).keys()];
  const [selected, setSelected] = useState<number>();

  return (
    <View>
      <CustomText
        color={COLORS.whiteRgba(0.7)}
        text={title}
        size={14}
        style={text}
      />

      <FlatList
        horizontal
        data={numbers}
        renderItem={({item}) => (
          <CountFilterItem
            onPress={(selectedItem: number) => {
              setSelected(selectedItem);
              onSelected(selectedItem + 1);
            }}
            overrideContainer={{
              borderWidth: defaultSelected == item + 1 ? 1 : 0,
            }}
            item={item}
          />
        )}
        ItemSeparatorComponent={() => <View style={separator} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CountSelectContainer;

import {t} from 'i18next';
import React, {useMemo, useState} from 'react';
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
import createStyles from './styles';

const PropTypeFilter = ({defauld, onSelected}: {onSelected: (name: string) => void, defauld: string}) => {
  const styles = useMemo(() => createStyles(), []);

  const [selected, setSelected] = useState<string | undefined>(defauld);

  const {container, separator, text} = styles;

  const propTypes = [
    {name: 'Apartments', icon: <ApartmentIcon />},
    {name: 'Land', icon: <LandIcon />},
    {name: 'Villas', icon: <VillaIcon />},
    {name: 'Floor', icon: <FloorIcon />},
  ];

  return (
    <View style={{}}>
      <CustomText
        color={COLORS.whiteRgba(0.7)}
        text={t('PropertyType')}
        size={14}
        style={text}
      />

      <FlatList
        horizontal
        data={propTypes}
        renderItem={({item}) => (
          <PropTypeFilterItem
            onSelected={selectedItem => {
              setSelected(selectedItem);
              onSelected(selectedItem);
            }}
            item={item}
            containerStyle={{borderWidth: selected == item.name ? 1 : 0}}
          />
        )}
        ItemSeparatorComponent={() => <View style={separator} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PropTypeFilter;

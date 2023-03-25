import {t} from 'i18next';
import React, {useMemo} from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import reactotron from 'reactotron-react-native';
import {ApartmentIcon, BedRoom, FloorIcon, LandIcon, VillaIcon} from '../../assets/svg';
import {COLORS} from '../../constants/theme';
import CountFilterItem from '../CountFilterItem';
import CustomText from '../customText';
import PropTexts from '../PropTexts';
import PropTypeFilterItem from '../PropTypeFilterItem';
import createStyles from './styles';

const CountFilterContainer = ({navigation, title}: {navigation?: any, title: string}) => {
  const styles = useMemo(() => createStyles(), []);

  const {container, separator, text} = styles;

  const numbers = [...Array(7).keys()];

  return (
    <View style={{}}>
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
          <CountFilterItem navigation={navigation} item={item} />
        )}
        ItemSeparatorComponent={() => <View style={separator} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CountFilterContainer;

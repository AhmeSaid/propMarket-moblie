import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Back, Heart, More, SmallBack} from '../assets/svg';
import {COLORS, sh, sw} from '../constants/theme';
import CustomText from './customText';
import Divider from './Divider';
import RenderhorizontalItem from './HorizontalFlatList/RenderHorizontalFlatList';

// import { Container } from './styles';

const DiscoverItem: React.FC = ({
  recommendations,
  update,
}: {
  update?: boolean;
  recommendations?: boolean;
}) => {
  const isSelected = useMemo(() => {
    return update;
  }, [update]);

  return (
    <View>
      <View style={styles.row}>
        <CustomText
          text={'For Sale near Ahmed Oman, KSA 11213 '}
          fontFamily={'bold'}
          size={14}
          rightIcon={<SmallBack />}
        />
        {isSelected ? (
          <More />
        ) : (
          <View style={styles.cir}>
            <CustomText
              text={12}
              color="white"
              fontFamily={'regular'}
              size={12}
            />
          </View>
        )}
      </View>
      {!recommendations && (
        <CustomText
          text={'For Sale, SAR250K - SAR6.0M, 6 Beds, 6 Baths, 387 sqm'}
          fontFamily={'regular'}
          size={12}
          containerStyle={styles.title}
        />
      )}

      <FlatList
        data={[1, 1, 1, 1]}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
        renderItem={({item}) => <RenderhorizontalItem item={item} />}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Divider width={sw(11)} />}
        ListFooterComponent={() => <Divider width={sw(20)} />}
      />
    </View>
  );
};

export default DiscoverItem;
const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: sw(20),
  },
  cir: {
    width: sw(22),
    height: sw(22),
    backgroundColor: COLORS.orange,
    borderRadius: sw(11),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {marginHorizontal: sw(20), marginTop: sh(6)},
  flatList: {paddingTop: sh(13)},
});

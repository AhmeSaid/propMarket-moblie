import React, {useMemo} from 'react';
import {Image, Pressable, View} from 'react-native';
import {Search} from '../../assets/svg';
import {COLORS} from '../../constants/theme';
import CustomText from '../customText';
import createStyles from './styles';

const RenderhorizontalItem = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.rowView}>
      <Pressable
        onPress={() => navigation.navigate('MapView')}
        style={styles.map}>
        <CustomText color={'primary'} containerStyle={styles.mapText}>
          {'Map'}
        </CustomText>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Search')}
        style={styles.whereYou}>
        <Search color={COLORS.primary} />
        <CustomText color={'primary'} containerStyle={styles.mapText}>
          {'Where are you going ?'}
        </CustomText>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Filter')}
        style={styles.map}>
        <CustomText color={'primary'} containerStyle={styles.mapText}>
          {'Filter'}
        </CustomText>
      </Pressable>
    </View>
  );
};
export default RenderhorizontalItem;

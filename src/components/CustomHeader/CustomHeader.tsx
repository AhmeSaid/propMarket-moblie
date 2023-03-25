import React, {useMemo} from 'react';
import {Image, View} from 'react-native';
import CustomText from '../customText';
import createStyles from './styles';

const RenderhorizontalItem = ({item, index, navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.horizontalView}>
      <Image
        style={styles.horizontalImg}
        source={require('../../../assets/image/landing2.png')}
      />
      <View style={styles.aboutRoomHorizontal}>
        <CustomText style={styles.horizontalText}>{'Oman'}</CustomText>
      </View>
    </View>
  );
};
export default RenderhorizontalItem;

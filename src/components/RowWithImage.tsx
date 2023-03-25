import React, {FC, ReactNode} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {sh, sw} from '../constants/theme';
import CustomText from './customText';

interface RowWithImageProps {
  firstText?: string;
  secText?: string;
  secComponent?: ReactNode;
  thirdText?: string;
  thirdComponent?: ReactNode;
}

const RowWithImage: FC<RowWithImageProps> = ({
  firstText,
  secText,
  secComponent,
  thirdText,
  thirdComponent,
}) => {
  return (
    <View style={styles.container}>
      <CustomText
        size={14}
        color={'primary'}
        containerStyle={styles.first}
        text={firstText}
      />

      <View style={styles.secView}>
        {secComponent ? (
          secComponent
        ) : (
          <>
            <Image
              style={styles.img}
              source={require('../../assets/image/landing.png')}
            />
            <CustomText size={14} text={secText} color={'semiBlock'} />
          </>
        )}
      </View>
      <View style={styles.secView}>
        {thirdComponent ? (
          thirdComponent
        ) : (
          <>
            <Image
              style={styles.img}
              source={require('../../assets/image/landing.png')}
            />
            <CustomText size={14} text={thirdText} color={'semiBlock'} />
          </>
        )}
      </View>
    </View>
  );
};

export default RowWithImage;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
  },
  first: {
    borderRightWidth: 1,
    paddingVertical: sh(9),
    borderColor: '#DDDDDD',
    flex: 0.32,
  },
  secView: {
    paddingVertical: sh(9),
    alignItems: 'center',
    flex: 0.5,
    marginLeft: 5,
  },
  img: {
    width: sw(128),
    height: sw(128),
    marginHorizontal: 5,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: sh(7),
  },
});

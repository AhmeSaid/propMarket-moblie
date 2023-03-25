import React, {FC} from 'react';
import {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {sh} from '../constants/theme';
import CustomText from './customText';
interface RowProps {
  firstText?: string;
  secText?: string;
  secComponent?: ReactNode;
  thirdText?: string;
  thirdComponent?: ReactNode;
}

const Row: FC<RowProps> = ({
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
        containerStyle={styles.first}
        text={firstText}
        color={'primary'}
      />

      <View style={styles.secView}>
        {secComponent ? (
          secComponent
        ) : (
          <CustomText size={14} text={secText} color={'semiBlock'} />
        )}
      </View>
      <View style={styles.secView}>
        {thirdComponent ? (
          thirdComponent
        ) : (
          <CustomText size={14} text={thirdText} color={'semiBlock'} />
        )}
      </View>
    </View>
  );
};

export default Row;
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
    flex: 0.5,
    marginLeft: 5,
  },
});

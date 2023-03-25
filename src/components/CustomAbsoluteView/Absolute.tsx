import React, {useMemo} from 'react';
import {View} from 'react-native';
import createStyles from './styles';

const Absolute = ({children, style}: {children: any; style: any}) => {
  const styles = useMemo(() => createStyles(), []);
  return <View style={[styles.sortView, style]}>{children}</View>;
};
export default Absolute;

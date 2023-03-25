import React, {FC} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../constants/theme';

interface LoaderProps {}

const Loader: FC<LoaderProps> = ({}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.orange} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

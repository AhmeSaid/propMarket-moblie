import React, {FC, ReactNode} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {COLORS, SIZES} from '../constants/theme';

interface ContainerProps {
  children?: ReactNode;
  style?: object;
  contentContainerStyle?: object;
  containerStyle?: object;
}

const Container: FC<ContainerProps> = ({
  children,
  style,
  contentContainerStyle,
  containerStyle,
}) => {
  return (
    <ScrollView
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
      style={[styles.container, style]}
      keyboardShouldPersistTaps={'handled'}
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}>
      {/* <SafeAreaView> */}
        <View style={[{paddingTop: SIZES.paddingTop}, containerStyle]}>
          {children}
        </View>
      {/* </SafeAreaView> */}
    </ScrollView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    paddingBottom: SIZES.paddingBottom,
  },
});

import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Text,
  I18nManager,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {Back} from '../assets/svg';
import {COLORS, sh, sw} from '../constants/theme';

const Header = ({...props}) => {
  const customProps = {
    statusBarProps: props.statusBarProps,
    headerStyle: props.headerStyle,
    renderLeft: props.renderLeft,
    center: props.center,
    renderRight: props.renderRight,
    title: props.title,
    titleStyles: props.titleStyles,
    onBackPressed: props.onBackPressed,
    hasSafeAreaView: props.hasSafeAreaView ?? true,
  };

  const voidFunction = () => {};

  return (
    <>
      {customProps.hasSafeAreaView && (
        <SafeAreaView
          style={{
            backgroundColor:
              customProps?.headerStyle?.backgroundColor ||
              styles.defaultStyle.backgroundColor,
          }}
        />
      )}

      <View style={{...styles.defaultStyle, ...customProps.headerStyle}}>
        {customProps.renderLeft ? (
          customProps.renderLeft()
        ) : (
          <Pressable
            onPress={
              customProps.onBackPressed
                ? customProps.onBackPressed
                : voidFunction
            }
            style={{...styles.backPressable, ...styles.backPressableRTL}}>
            <Back color={COLORS.black} />
          </Pressable>
        )}
        <Text
          allowFontScaling={false}
          numberOfLines={1}
          style={{...styles.title, ...customProps.titleStyles}}>
          {customProps.title}
        </Text>
        {customProps.renderRight ? (
          customProps.renderRight()
        ) : (
          <View style={styles.backPressable} />
        )}
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  defaultStyle: {
    flexDirection: 'row',
    width: '100%',
    height: sh(50),
    backgroundColor: COLORS.white,
    paddingHorizontal: sw(5),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.13)',
  },
  backPressable: {
    height: sw(18),
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backPressableRTL: I18nManager.isRTL && {
    transform: [{rotate: '180deg'}],
  },
  title: {
    flex: 1,
    color: '#262338',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: RFValue(16),
    paddingHorizontal: sw(5),
  },
});

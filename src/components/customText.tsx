import React, {FC, ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/theme';

interface TextProps {
  text?: string | number | any;
  color?:
    | (
        | 'white'
        | 'black'
        | 'gray'
        | 'orange'
        | 'red'
        | 'semiBlock'
        | 'orange'
        | 'primary'
        | 'inactive'
        | 'lightGray'
        | 'border'
        | 'blue'
      )
    | string;
  size?: number;
  fontFamily?:
    | 'extraBold'
    | 'bold'
    | 'semiBold'
    | 'medium'
    | 'regular'
    | 'light';
  style?: object;
  containerStyle?: object;
  num?: number;
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const chooseTextColor = (color: string) => {
  switch (color) {
    case 'white':
      return COLORS.white;
    case 'black':
      return COLORS.black;
    case 'primary':
      return COLORS.primary;
    case 'semiBlock':
      return COLORS.semiBlock;
    case 'inactive':
      return COLORS.inactive;
    case 'border':
      return COLORS.border;
    case 'red':
      return COLORS.red;
    case 'orange':
      return COLORS.orange;
    case 'lightGray':
      return COLORS.lightGray;
    case 'blue':
      return COLORS.blue;
    default:
      return color;
      break;
  }
};

const chooseFontFamily = (font: string) => {
  switch (font) {
    case 'extraBold':
      return 'Almarai-ExtraBold';
    case 'bold':
      return 'Almarai-Bold';
    case 'semiBold':
      return 'Almarai-Bold';
    case 'medium':
      return 'Almarai-Regular';
    case 'regular':
      return 'Almarai-Regular';
    case 'light':
      return 'Almarai-Light';

    default:
      break;
  }
};

const CustomText: FC<TextProps> = ({
  text = '',
  color = 'black',
  size = 16,
  fontFamily = 'regular',
  style,
  containerStyle,
  num,
  children,
  leftIcon,
  rightIcon,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {leftIcon && <View style={styles.iconCntainer}>{leftIcon}</View>}

      <Text
        numberOfLines={num}
        allowFontScaling={false}
        style={[
          {
            color: chooseTextColor(color),
            fontFamily: chooseFontFamily(fontFamily),
            fontSize: size,
            textAlign: 'left',
          },
          style,
        ]}>
        {text}
        {children}
      </Text>
      {rightIcon && <View style={styles.iconCntainer}>{rightIcon}</View>}
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCntainer: {
    marginRight: 6,
  },
});

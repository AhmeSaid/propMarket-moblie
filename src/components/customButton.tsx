import React, {FC} from 'react';
import {ActivityIndicator, Pressable, View} from 'react-native';
import {COLORS, SIZES} from '../constants/theme';
import CustomText from './customText';

interface ButtonProps {
  onPress?: () => void;
  disabled?: boolean;
  text?: string;
  textSize?: number;
  textColor?: 'white' | 'black' | 'gray' | 'primary' | 'red' | 'inactive';
  textFontFamily?: 'extraBold' | 'bold' | 'semiBold' | 'medium' | 'regular';
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  width?: string | number;
  height?: string | number;
  containerStyle?: object;
  textStyle?: object;
  leftIconContainerStyle?: object;
  rightIconContainerStyle?: object;
  loading?: boolean;
  inActivColor?: string;
  activeColor?: string
}

const CustomButton: FC<ButtonProps> = ({
  onPress,
  disabled = false,
  text,
  textSize = 14,
  textColor = 'white',
  textFontFamily = 'regular',
  leftIcon,
  rightIcon,
  width = '100%',
  height = 40,
  containerStyle,
  textStyle,
  leftIconContainerStyle,
  rightIconContainerStyle,
  loading = false,
  inActivColor = COLORS.inactiveBtn,
  activeColor = COLORS.orange,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        {
          width: width,
          height: height,
          backgroundColor: disabled ? inActivColor : activeColor,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: SIZES.smallRadius,
          flexDirection: 'row',
        },
        containerStyle,
      ]}>
      {leftIcon && (
        <View
          style={[
            {
              marginRight: 5,
            },
            leftIconContainerStyle,
          ]}>
          {leftIcon}
        </View>
      )}
      {!loading ? (
        <CustomText
          text={text}
          size={textSize}
          color={disabled ? 'inactive' : textColor}
          fontFamily={textFontFamily}
          style={textStyle}
        />
      ) : (
        <ActivityIndicator color={COLORS.white} size={30} />
      )}
      {rightIcon && (
        <View
          style={[
            {
              marginLeft: 10,
            },
            rightIconContainerStyle,
          ]}>
          {rightIcon}
        </View>
      )}
    </Pressable>
  );
};

export default CustomButton;

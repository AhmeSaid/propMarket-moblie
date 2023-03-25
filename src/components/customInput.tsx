import React, {FC, useState} from 'react';
import {Controller} from 'react-hook-form';
import {
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Eye} from '../assets/svg';
import {COLORS, sh} from '../constants/theme';
import CustomText from './customText';

interface InputProps {
  placeholder?: string;
  placeholdercolor?: string;
  containerStyle?: object;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  autoFocus?: boolean;
  editable?: boolean;
  inputStyle?: object;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  fontFamily?: string;
  value?: string;
  password?: boolean;
  error?: boolean;
  caption?: string;
  label?: string;
  required?: boolean;
  inputRef?: any;
  maxLength?: number;
  onSubmitEditing?: () => void;
  returnKeyType?: ReturnKeyTypeOptions;
  name?: string;
  defaultValue?: string;
  control?: any;
  onFocus?: () => void
}

const CustomInput: FC<InputProps> = ({
  placeholder,
  placeholdercolor = COLORS.inactive,
  containerStyle,
  onChangeText = () => {},
  keyboardType = 'default',
  autoFocus = false,
  editable = true,
  inputStyle,
  leftIcon,
  rightIcon,
  fontFamily = 'regular',
  value,
  password,
  error,
  caption,
  label,
  required,
  inputRef,
  maxLength,
  onSubmitEditing = () => {},
  returnKeyType = 'default',
  control,
  name,
  defaultValue,
  onFocus
}) => {
  const chooseFontFamily = (font: string) => {
    switch (font) {
      case 'extraBold':
        return 'Nunito-ExtraBold';
      case 'bold':
        return 'Nunito-Bold';
      case 'semiBold':
        return 'Nunito-SemiBold';
      case 'medium':
        return 'Nunito-Medium';
      case 'regular':
        return 'Nunito-Regular';

      default:
        break;
    }
  };

  const [text, setText] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <CustomText color={error ? 'red' : 'white'} text={label} size={18} />
      )}

      <View style={styles.textInputView}>
        {leftIcon && <View style={styles.leftIconView}>{leftIcon}</View>}
        {name ? (
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({field, fieldState}) => (
              <>
                <View style={{height: sh(40)}}>
                  <TextInput
                    ref={inputRef}
                    onChangeText={field.onChange}
                    onSubmitEditing={onSubmitEditing}
                    onFocus={onFocus}
                    returnKeyType={returnKeyType}
                    maxLength={maxLength}
                    secureTextEntry={showPassword && password}
                    value={value}
                    style={[
                      styles.textInput,
                      {
                        // fontFamily: chooseFontFamily(fontFamily),
                        paddingLeft: leftIcon ? 40 : 10,
                        paddingRight: required || password ? 45 : 10,
                        borderColor: error
                          ? COLORS.red
                          : editable
                          ? COLORS.border
                          : COLORS.gray1,
                        color: COLORS.black,
                        fontSize: 14,
                      },
                      inputStyle,
                    ]}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.inactive}
                    keyboardType={keyboardType}
                    autoFocus={autoFocus}
                    onBlur={field.onBlur}
                    editable={editable}
                  />
                  {password && (
                    <TouchableOpacity
                      activeOpacity={0.75}
                      style={styles.showPassTouch}
                      onPress={() => {
                        setShowPassword(!showPassword);
                      }}>
                      {showPassword ? <Eye /> : <Eye />}
                    </TouchableOpacity>
                  )}
                </View>
                {fieldState?.error?.message?.length > 0 && (
                  <CustomText
                    text={fieldState?.error?.message}
                    style={{marginTop: 4}}
                    color={'red'}
                  />
                )}
              </>
            )}
          />
        ) : (
          <>
            <TextInput
              ref={inputRef}
              onChangeText={text => {
                setText(text);
                onChangeText(text);
              }}
              onSubmitEditing={onSubmitEditing}
              onFocus={onFocus}
              returnKeyType={returnKeyType}
              maxLength={maxLength}
              secureTextEntry={showPassword && password}
              value={value}
              style={[
                styles.textInput,
                {
                  // fontFamily: chooseFontFamily(fontFamily),
                  paddingLeft: leftIcon ? 40 : 10,
                  paddingRight: required || password ? 45 : 10,
                  color: COLORS.black,
                  fontSize: 12,
                },
                inputStyle,
              ]}
              placeholder={placeholder}
              placeholderTextColor={placeholdercolor}
              keyboardType={keyboardType}
              autoFocus={autoFocus}
              editable={editable}
            />
            {password && (
              <TouchableOpacity
                activeOpacity={0.75}
                style={styles.showPassTouch}
                onPress={() => {
                  setShowPassword(!showPassword);
                }}>
                {showPassword ? <Eye /> : <Eye />}
              </TouchableOpacity>
            )}
          </>
        )}

        {rightIcon && <View style={styles.rightIconView}>{rightIcon}</View>}

        {required && (
          <View style={styles.star}>
            <CustomText text="*" color={error ? 'red' : 'gray'} size={11} />
          </View>
        )}
      </View>
      <View style={[styles.textView, {marginBottom: caption ? 0 : 0}]}>
        {caption?.length != 0 && caption && (
          <CustomText
            text={caption}
            fontFamily="regular"
            color={error ? 'red' : 'white'}
            size={11}
            style={styles.text}
          />
        )}
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    paddingVertical: 0,
  },
  textInput: {
    height: 40,
    borderColor: COLORS.border,
    color: COLORS.black,
    paddingVertical: 0,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    // textAlignVertical: 'bottom',
    borderRadius: 3,
    textAlign: 'right',
    fontFamily: 'Almarai-Regular',
  },
  text: {},
  textInputView: {
    width: '100%',
    justifyContent: 'center',
  },
  showPassTouch: {
    position: 'absolute',
    right: 0,
    height: '100%',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    width: '100%',
  },
  leftIconView: {
    position: 'absolute',
    zIndex: 1,
    left: 15,
  },
  rightIconView: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
  },
  star: {
    position: 'absolute',
    right: 17,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

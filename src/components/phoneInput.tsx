import React, {FC} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import CustomInput from './customInput';
import {COLORS, sh, SIZES} from '../constants/theme';
import {useTranslation} from 'react-i18next';
import {CountryCode, Country} from 'react-native-country-picker-modal';
import CustomText from './customText';
import {Flag} from '../assets/images';

interface PhoneInputProps {
  onSelect: (country: Country) => void;
  countryCode: CountryCode;
  value?: string;
  continerStyle?: object;
  onChangeText?: (text: string) => void;
}

const PhoneInput: FC<PhoneInputProps> = ({
  onSelect,
  countryCode,
  value,
  onChangeText,
  continerStyle,
}) => {
  const {t} = useTranslation();

  return (
    <View style={[styles.container, continerStyle]}>
      <View style={styles.row}>
        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            marginHorizontal: 14,
          }}>
          <Image
            source={Flag}
            style={{height: 31, width: 31, marginRight: 6}}
          />
          {/* <CountryPicker
            theme={{
              onBackgroundTextColor: COLORS.black,
              backgroundColor: COLORS.background,
              fontSize: 14,
              // fontFamily: 'Nunito-Regular',
            }}
            {...{
              countryCode,
              withFilter: true,
              withFlag: true,
              withCountryNameButton: false,
              withCallingCodeButton: true,
              onSelect,
              containerButtonStyle: {
                borderColor: COLORS.border,
                minWidth: sh(50),
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 8,
                borderTopLeftRadius: SIZES.smallRadius,
                borderBottomLeftRadius: SIZES.smallRadius,
              },
            }}
          /> */}
          <CustomText fontFamily="regular" size={14} text={'+966'} />
        </View>

        <View style={styles.seperator} />

        <CustomInput
          // maxLength={8}
          containerStyle={styles.inputContainer}
          inputStyle={styles.input}
          value={value}
          onChangeText={onChangeText}
          keyboardType={'number-pad'}
          placeholder={t('phone')}
        />
      </View>
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-end',
    marginLeft: 0,
  },
  codeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: COLORS.white,
    borderBottomWidth: 1,
    backgroundColor: 'orange',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: COLORS.border,
    borderWidth: 0.5,
    borderRadius: SIZES.smallRadius,
  },
  inputContainer: {
    flex: 1,
  },
  title: {
    marginBottom: 10,
  },
  input: {
    textAlignVertical: 'center',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderWidth: 0,
    color: '#000',
  },
  seperator: {
    width: 0.5,
    height: '70%',
    backgroundColor: COLORS.black,
  },
});

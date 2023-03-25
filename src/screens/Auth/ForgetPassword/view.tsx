import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {FC, useMemo, useState} from 'react';
import createStyles from './styles';

import {useTranslation} from 'react-i18next';
import {Alert, View} from 'react-native';
import Container from '../../../components/container';
import CustomButton from '../../../components/customButton';
import PhoneInput from '../../../components/phoneInput';
import {useGenerateOtpMutation} from '../../../services/authService';
import {RemoveZero} from '../../../utils/validations';

interface ForgetPasswordProps {
  navigation: NavigationProp<ParamListBase>;
}

const ForgetPasswordView: FC<ForgetPasswordProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);

  const {t} = useTranslation();
  const [countryCode, setCountryCode] = useState<CountryCode>('SA');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
  };

  const [generateOtp, {isLoading}] = useGenerateOtpMutation();
  const reset = () => {
    var body = {phone: phoneNumber};
    body.phone = RemoveZero(body.phone);
    generateOtp(body)
      .then(res => {
        if (res.data) {
          navigation.navigate('SendOtp', {phone: phoneNumber});
        }
      })
      .catch(err => {
        Alert.alert('', 'NetWork Connection');

      });
  };
  return (
    <View style={styles.keyboardAvoiding}>
      <Container>
        <View style={styles.bodyContainer}>
          <PhoneInput
            onSelect={onSelect}
            countryCode={countryCode}
            continerStyle={styles.inputContainer}
            value={phoneNumber}
            onChangeText={text => {
              // field.onChange(text);
              setPhoneNumber(text);
            }}
          />

          <CustomButton
            loading={isLoading}
            onPress={reset}
            disabled={phoneNumber.length > 8 ? false : true}
            containerStyle={styles.forgetPasswordBtn}
            text={t('ResetPassword')}
          />
        </View>
      </Container>
    </View>
  );
};

export default ForgetPasswordView;

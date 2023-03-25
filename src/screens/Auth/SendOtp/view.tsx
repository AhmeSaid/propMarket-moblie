import React, {FC, useEffect, useMemo, useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './styles';
import {useTranslation} from 'react-i18next';
import Container from '../../../components/container';
import {View, Pressable, Text, Alert} from 'react-native';
import CustomText from '../../../components/customText';
import CustomButton from '../../../components/customButton';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Arrow} from '../../../assets/svg';
import {COLORS} from '../../../constants/theme';
import {
  useGenerateOtpMutation,
  useVerifyOtpMutation,
} from '../../../services/authService';
import {useInterval} from '../../../utils/useInterval';

interface SendOtpView {
  navigation: NavigationProp<ParamListBase>;
  route?: any;
}

const SendOtpView: FC<SendOtpView> = ({navigation, route, params}) => {
  const styles = useMemo(() => createStyles(), []);
  const [value, setValue] = useState('');
  const [VerifyOtp, {isLoading}] = useVerifyOtpMutation();
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 6;
  const COUNTER_TIMER = 60;
  const [counting, setCounting] = useState(false);
  const [counter, setCounter] = useState(COUNTER_TIMER);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const {t} = useTranslation();
  const [generateOtp, {isLoading: loader}] = useGenerateOtpMutation();

  useEffect(() => {
    var body = {phone: route.params.phone, code: value};

    value.length == CELL_COUNT &&
      VerifyOtp({...body})
        .then(res => {
          navigation.navigate('NewPassword', {phone: route.params.phone});
        })
        .catch(err => {
          Alert.alert('', 'NetWork Connection');

        });
  }, [value]);
  const reset = () => {
    var body = {phone: route.params.phone};

    generateOtp(body).then(res => {
      if (res.data) {
      }
    });
  };
  useInterval(() => {
    if (counting && counter > 0) {
      setCounter(oldCounter => oldCounter - 1);
    } else {
      stopCounting();
    }
  }, 1000);

  const startCounting = () => {
    setCounter(COUNTER_TIMER);
    setCounting(true);
  };

  const stopCounting = () => {
    setCounting(false);
    setCounter(COUNTER_TIMER);
  };
  const sendCode = () => {
    startCounting();
    reset();
  };

  return (
    <View style={styles.keyboardAvoiding}>
      <Container containerStyle={styles.container}>
        <View style={styles.bodyContainer}>
          <CustomText
            style={styles.OtpText}
            text={t('otbCode')}
            fontFamily="medium"
            size={14}
          />
          <CodeField
            {...props}
            ref={ref}
            value={value}
            onChangeText={setValue}
            autoFocus={true}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[
                  styles.cell,
                  {
                    borderWidth: isFocused ? 2 : 0.5,
                    borderColor: isFocused ? COLORS.primary : COLORS.border,
                  },
                ]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : '-')}
              </Text>
            )}
          />
          <CustomButton
            loading={isLoading}
            onPress={() => {
              // navigation.navigate('NewPassword');
            }}
            disabled={!(value.length == 6)}
            text={t('continue')}
          />
          <Pressable
            onPress={() => {
              reset();
            }}
            style={styles.resendContainer}>
            {counting ? (
              <Text
                allowFontScaling={false}
                numberOfLines={2}
                adjustsFontSizeToFit={true}
                style={[styles.describtion, {color: COLORS.primary}]}>
                {t('Resend OTP in')}{' '}
                <Text allowFontScaling={false} style={styles.phone}>
                  {counter}
                </Text>{' '}
                {t('Seconds')}
              </Text>
            ) : (
              <Pressable onPress={sendCode}>
                <Text allowFontScaling={false} style={{color: COLORS.primary}}>
                  {t('Resend Code')}
                </Text>
              </Pressable>
            )}
          </Pressable>
        </View>
      </Container>
    </View>
  );
};

export default SendOtpView;

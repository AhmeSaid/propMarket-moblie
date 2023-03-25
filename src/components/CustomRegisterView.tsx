import React, {useMemo, useState} from 'react';
import {Controller, FormProvider, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomButton from './customButton';
import CustomInput from './customInput';
import CustomText from './customText';
import PhoneInput from './phoneInput';
import {COLORS, sh, SIZES, sw} from '../constants/theme';
import {
  useGenerateOtpMutation,
  useSignupMutation,
} from '../services/authService';
import {setCredentials, setUser} from '../store';
import {signupValidationSchema} from '../utils/formSchemas/auth';
import {navigate} from '../navigation/NavigationService';
import {USER_DATA_NAME} from '../utils/constants';
import {_storeData} from '../utils/storageController';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {setFavourites} from '../store/slices/favSlice';
import {RemoveZero} from '../utils/validations';

// import { Container } from './styles';
interface SignupFormType {
  phone: number;
  email?: string;
  password: string;
  username: string;
}
const CustomRegisterView = () => {
  const styles = useMemo(() => createStyles(), []);

  const {t} = useTranslation();
  const form = useForm<SignupFormType>({
    resolver: signupValidationSchema(),
    mode: 'all',
  });

  const dispatch = useDispatch();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState<CountryCode>('SA');
  const [tabState, setTabState] = useState(0);
  const [dial, setDial] = useState('1');
  const [signUp, {isLoading}] = useSignupMutation();
  const navigation = useNavigation();
  // const User = useSelector(selectCurrentUser);
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setDial(country.callingCode[0]);
  };

  const onSubmit = (d: SignupFormType) => {
    let cpdData = {...d};
    cpdData.email = 'karem@gmail.com';
    cpdData.username = cpdData.firstName + cpdData.lastName;

    cpdData.phone = RemoveZero(cpdData.phone);

    signUp(cpdData)
      .then(async (res: any) => {
        if (res.data) {
          dispatch(
            setUser({
              ...res.data,
            }),
          );
          dispatch(
            setCredentials({
              user: res.data.user,
              token: res.data.token,
            }),
          );
          _storeData(USER_DATA_NAME, res.data);
          dispatch(setFavourites([]));

          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'Landing'}],
            }),
          );
        } else {
          Alert.alert(
            'Error',
            res?.error?.data?.message ? res?.error?.data?.message : ' ',
          );
        }
      })
      .catch(err => {
        Alert.alert('', 'NetWork Connection');

      });
  };
  return (
    <>
      <FormProvider {...form}>
        <CustomInput
          name="firstName"
          containerStyle={styles.inputContainer}
          placeholder={t('firstName')}
        />
        <CustomInput
          name="lastName"
          containerStyle={styles.inputContainer}
          placeholder={t('lastName')}
        />
        <Controller
          name={'phone'}
          render={({field}) => (
            <>
              <PhoneInput
                onSelect={onSelect}
                countryCode={countryCode}
                continerStyle={styles.inputContainer}
                value={phoneNumber}
                onChangeText={text => {
                  field.onChange(text);
                  setPhoneNumber(text);
                }}
              />
            </>
          )}
        />
        <CustomInput
          name="password"
          containerStyle={styles.inputContainer}
          placeholder={t('password')}
          password={true}
        />

        <CustomButton
          // onPress={() => {
          //   navigation.navigate('Landing');
          // }}
          loading={isLoading}
          disabled={!form.formState.isValid}
          containerStyle={[styles.Btn]}
          text={t('register')}
          onPress={form.handleSubmit(onSubmit)}
        />
      </FormProvider>

      <CustomText
        containerStyle={styles.termsTextContainer}
        size={12}
        color="border"
        text={t('termsConfirm')}>
        <Text style={styles.termsText} onPress={() => {}}>
          {t('terms')}
        </Text>
      </CustomText>
    </>
  );
};
export default CustomRegisterView;
const createStyles = () =>
  StyleSheet.create({
    container: {
      paddingTop: sh(100),
    },
    bodyContainer: {
      paddingHorizontal: SIZES.smallPadding,
      alignItems: 'center',
    },
    loginBtn: {
      padding: sh(3),
    },
    logo: {
      height: sh(68),
      width: sh(171),
    },
    register: {
      marginBottom: sh(67),
    },
    inputContainer: {
      marginTop: sh(14),
    },
    Btn: {
      marginTop: sh(14),
    },
    keyboardAvoiding: {
      backgroundColor: COLORS.background,
      flex: 1,
    },
    hello: {
      marginTop: sh(40),
      marginBottom: sh(10),
    },
    trustedText: {
      width: sw(252),
      textAlign: 'center',
    },
    tabsContainer: {
      width: 214,
      height: 40,
      backgroundColor: COLORS.inactiveBtn,
      borderRadius: 22,
      marginTop: sh(30),
      padding: 5,
      flexDirection: 'row',
      marginBottom: sh(16),
    },
    tab: {
      width: '50%',
      height: '100%',
      backgroundColor: COLORS.primary,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    termsTextContainer: {
      width: sw(306),
      alignSelf: 'flex-start',
      marginTop: sh(14),
    },
    termsText: {
      color: COLORS.primary,
    },
    forgetPass: {
      alignSelf: 'flex-end',
      marginTop: 10,
    },
  });

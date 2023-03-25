import {
  CommonActions,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import React, {FC, useMemo, useState} from 'react';
import {Controller, FormProvider, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Alert, Pressable} from 'react-native';
import {CountryCode} from 'react-native-country-picker-modal';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../../components/customButton';
import CustomInput from '../../../components/customInput';
import CustomText from '../../../components/customText';
import PhoneInput from '../../../components/phoneInput';
import {navigate, reset} from '../../../navigation/NavigationService';
import {useLoginMutation} from '../../../services/authService';
import {useGetMySavedPropertiesmutationMutation} from '../../../services/propService';
import {setCredentials, setUser} from '../../../store';
import {setFavourites} from '../../../store/slices/favSlice';
import {USER_DATA_NAME} from '../../../utils/constants';
import {loginValidationSchema} from '../../../utils/formSchemas/auth';
import {_storeData} from '../../../utils/storageController';
import {RemoveZero} from '../../../utils/validations';
import createStyles from './styles';

interface LoginViewProps {
  navigation: NavigationProp<ParamListBase>;
}
interface LoginFormType {
  phone: string;
  password: string;
}
const LoginView: FC<LoginViewProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);

  const {t} = useTranslation();

  const dispatchRedux = useDispatch();
  const form = useForm<LoginFormType>({
    resolver: loginValidationSchema(),
    mode: 'all',
  });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState<CountryCode>('SA');
  const [dial, setDial] = useState('1');
  const [Login, {isLoading}] = useLoginMutation();
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setDial(country.callingCode[0]);
  };
  const [getFav] = useGetMySavedPropertiesmutationMutation();

  const onSubmitLogin = (d: LoginFormType) => {
    let cpdData = {...d};

    cpdData.phone = RemoveZero(cpdData.phone);

    Login(cpdData)
      .then(async (res: any) => {
        if (res.data) {
          dispatchRedux(
            setUser({
              ...res.data,
            }),
          );
          dispatchRedux(
            setCredentials({user: res.data.user, token: res.data.token}),
          );
          // _storeData(USER_DATA_NAME, res.data);
          getFav().then(res => {
            if (res?.data) {
              var arr = [];
              res.data.results.map(val => {
                arr.push(val.id);
              });
              dispatchRedux(setFavourites(arr));
            }
          });
          reset('Landing');
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
    <FormProvider {...form}>
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

      <Pressable
        onPress={() => {
          navigate('ForgetPassword');
        }}
        style={styles.forgetPassContainer}>
        <CustomText
          containerStyle={styles.forgetPass}
          size={12}
          color="primary"
          text={t('forgetPassword')}
        />
      </Pressable>

      <CustomButton
        onPress={form.handleSubmit(onSubmitLogin)}
        text={t('login')}
        loading={isLoading}
        disabled={!form.formState.isValid}
        containerStyle={[styles.Btn]}
      />
    </FormProvider>
  );
};

export default LoginView;

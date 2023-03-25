import {
  CommonActions,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import React, {FC, useMemo} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Alert, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Container from '../../../components/container';
import CustomButton from '../../../components/customButton';
import CustomInput from '../../../components/customInput';
import CustomText from '../../../components/customText';
import {COLORS} from '../../../constants/theme';
import {reset} from '../../../navigation/NavigationService';
import {useResetPasswordMutation} from '../../../services/authService';
import {useGetMySavedPropertiesmutationMutation} from '../../../services/propService';
import {setCredentials, setUser} from '../../../store';
import {setFavourites} from '../../../store/slices/favSlice';
import {USER_DATA_NAME} from '../../../utils/constants';
import {newPassword} from '../../../utils/formSchemas/auth';
import {_retrieveData, _storeData} from '../../../utils/storageController';
import createStyles from './styles';

interface NewPasswordProps {
  navigation: NavigationProp<ParamListBase>;
  route: string;
}
interface NewPassword {
  password: string;
  confirmPassword: string;
}
const NewPasswordView: FC<NewPasswordProps> = ({navigation, route}) => {
  const styles = useMemo(() => createStyles(), []);
  const [resetPassword, {isLoading}] = useResetPasswordMutation();
  const {t} = useTranslation();
  const state = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const [getFav] = useGetMySavedPropertiesmutationMutation();

  const form = useForm<NewPassword>({
    resolver: newPassword(),
    mode: 'all',
  });
  const SendResetPassword = async d => {
    var data = {...d};
    data.phone = route?.params?.phone;
    resetPassword(data).then(async res => {
      if (res.data) {
        dispatch(
          setUser({
            ...res.data,
          }),
        );

        dispatch(setCredentials({user: res.data.user, token: res.data.token}));
        await _storeData(USER_DATA_NAME, res.data);
        getFav().then(res => {
          if (res?.data) {
            var arr = [];
            res.data.results.map(val => {
              arr.push(val.id);
            });
            dispatch(setFavourites(arr));
          }
        });
        reset('Success');
      } else {
        Alert.alert('error');
      }
    });
  };
  return (
    <View style={styles.keyboardAvoiding}>
      <Container containerStyle={styles.container}>
        <View style={styles.bodyContainer}>
          <View style={styles.circle} />
          <CustomText
            style={styles.enterPassword}
            text={t('password')}
            fontFamily="bold"
          />
          <View style={styles.row}>
            <CustomText text={t('creatingPassword')} size={14} color="gray" />
            <CustomText
              text={route?.params?.phone + '.'}
              size={14}
              color="gray"
              fontFamily="semiBold"
            />
          </View>
          <CustomText text={t('willHelp')} size={14} color="gray" />
          <FormProvider {...form}>
            <CustomInput
              containerStyle={styles.confirmPassword}
              name="confirmPassword"
              placeholder={t('Enteryourpassword')}
              password
            />

            <CustomInput
              name="newPassword"
              containerStyle={styles.confirmPassword}
              placeholder={t('confirmPassword')}
              password
            />

            <CustomButton
              onPress={form.handleSubmit(SendResetPassword)}
              loading={isLoading}
              disabled={!form.formState.isValid}
              containerStyle={[styles.NewPasswordBtn]}
              text={t('Confirm Password')}
            />
          </FormProvider>
        </View>
      </Container>
    </View>
  );
};

export default NewPasswordView;

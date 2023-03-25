import {t} from 'i18next';
import React, {useMemo} from 'react';
import {View} from 'react-native';
import {navigate} from '../../navigation/NavigationService';
import CustomButton from '../customButton';
import createStyles from './styles';

const RegisterButtons = ({containerStyle}: {containerStyle?: object}) => {
  const styles = useMemo(() => createStyles(), []);

  const {signInBtn, bottomBtns, signUpBtn, signUpText} = styles;

  return (
    <View style={[bottomBtns, containerStyle]}>
      <CustomButton
        onPress={() => {
          navigate('Register');
        }}
        text={t('login')}
        containerStyle={signInBtn}
      />
      <CustomButton
        onPress={() => {
          navigate('Register');
        }}
        text={t('register')}
        textStyle={signUpText}
        containerStyle={signUpBtn}
      />
    </View>
  );
};

export default RegisterButtons;

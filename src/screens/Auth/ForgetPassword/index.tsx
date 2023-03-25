import React, {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import ForgetPasswordView from './view';

interface ForgetPasswordProps {
  navigation: NavigationProp<ParamListBase>;
  login: (data: object) => void;
}

const ForgetPassword: FC<ForgetPasswordProps> = ({navigation}) => {
  useEffect(() => {}, []);

  return <ForgetPasswordView navigation={navigation} />;
};

export default ForgetPassword;

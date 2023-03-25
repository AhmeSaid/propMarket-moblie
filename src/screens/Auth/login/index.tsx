import React, {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import LoginView from './view';

interface LoginProps {
  navigation: NavigationProp<ParamListBase>;
  login: (data: object) => void;
}

const Login: FC<LoginProps> = ({navigation}) => {
  useEffect(() => {}, []);

  return <LoginView navigation={navigation} />;
};

export default Login;

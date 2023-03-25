import React, {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import RegisterView from './view';

interface RegisterProps {
  navigation: NavigationProp<ParamListBase>;
  login: (data: object) => void;
}

const Register: FC<RegisterProps> = ({navigation}) => {
  useEffect(() => {}, []);

  return <RegisterView navigation={navigation} />;
};

export default Register;

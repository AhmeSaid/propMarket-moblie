import React, {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import NewPasswordView from './view';

interface NewPasswordProps {
  navigation: NavigationProp<ParamListBase>;
  login: (data: object) => void;
  route?: any;
}

const NewPassword: FC<NewPasswordProps> = ({navigation, route}) => {
  useEffect(() => {}, []);

  return <NewPasswordView navigation={navigation} route={route} />;
};

export default NewPassword;

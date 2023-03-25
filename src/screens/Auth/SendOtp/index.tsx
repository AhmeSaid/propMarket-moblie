import React, {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import SendOtpView from './view';

interface SendOtpProps {
  navigation: NavigationProp<ParamListBase>;
  login: (data: object) => void;
  route?: any;
}

const SendOtp: FC<SendOtpProps> = ({navigation, route}) => {
  useEffect(() => {}, []);

  return <SendOtpView navigation={navigation} route={route} />;
};

export default SendOtp;

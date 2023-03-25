import React, {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import HelpView from './view';

interface HelpProps {
  navigation: NavigationProp<ParamListBase>;
  Help: (data: object) => void;
}

const Help: FC<HelpProps> = ({navigation}) => {
  useEffect(() => {}, []);

  return <HelpView navigation={navigation} />;
};

export default Help;

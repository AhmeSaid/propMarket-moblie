import React, {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import LandingView from './view';

interface LandingProps {
  navigation: NavigationProp<ParamListBase>;
  Saved: (data: object) => void;
}

const Saved: FC<LandingProps> = ({navigation}) => {
  useEffect(() => {}, []);

  return <LandingView navigation={navigation} />;
};

export default Saved;

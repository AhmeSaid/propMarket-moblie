import React, {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import LandingView from './view';

interface LandingProps {
  navigation: NavigationProp<ParamListBase>;
  Landing: (data: object) => void;
  route?: any;
}

const Landing: FC<LandingProps> = ({navigation, route}) => {
  useEffect(() => {}, []);

  return <LandingView navigation={navigation} route={route} />;
};

export default Landing;

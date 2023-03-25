import React, {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import CompareView from './view';

interface CompareProps {
  navigation: NavigationProp<ParamListBase>;
  Compare: (data: object) => void;
  route: any;
}

const Compare: FC<CompareProps> = ({navigation, route}) => {
  useEffect(() => {}, []);

  return <CompareView navigation={navigation} route={route} />;
};

export default Compare;

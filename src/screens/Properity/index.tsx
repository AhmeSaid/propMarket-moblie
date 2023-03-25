import React, {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import ProperityView from './view';

interface ProperityProps {
  navigation: NavigationProp<ParamListBase>;
  Properity: (data: object) => void;
  route: any;
}

const Properity: FC<ProperityProps> = ({navigation, route}) => {
  useEffect(() => {}, []);

  return <ProperityView navigation={navigation} route={route} />;
};

export default Properity;

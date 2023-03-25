import React, {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import MoreView from './view';

interface MoreProps {
  navigation: NavigationProp<ParamListBase>;
  More: (data: object) => void;
}

const More: FC<MoreProps> = ({navigation}) => {
  useEffect(() => {}, []);

  return <MoreView navigation={navigation} />;
};

export default More;

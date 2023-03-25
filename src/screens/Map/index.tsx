import React, {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import MAPView from './view';

interface MAPViewProps {
  navigation: NavigationProp<ParamListBase>;
  MAPView: (data: object) => void;
}

const MAP: FC<MAPViewProps> = ({navigation}) => {
  useEffect(() => {}, []);

  return <MAPView navigation={navigation} />;
};

export default MAP;

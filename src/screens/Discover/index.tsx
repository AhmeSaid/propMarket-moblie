import React, {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import DiscoverView from './view';

interface DiscoverProps {
  navigation: NavigationProp<ParamListBase>;
  Discover: (data: object) => void;
}

const Discover: FC<DiscoverProps> = ({navigation}) => {
  useEffect(() => {}, []);

  return <DiscoverView navigation={navigation} />;
};

export default Discover;

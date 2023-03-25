import React, {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import LandingDetailsView from './view';

interface LandingDetailsProps {
  navigation: NavigationProp<ParamListBase>;
  LandingDetails: (data: object) => void;
}

const LandingDetails: FC<LandingDetailsProps> = ({navigation}) => {
  useEffect(() => {}, []);

  return <LandingDetailsView navigation={navigation} />;
};

export default LandingDetails;

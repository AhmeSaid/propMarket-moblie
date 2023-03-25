import React, {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import CompareDetailsView from './view';

interface CompareDetailsProps {
  navigation: NavigationProp<ParamListBase>;
  CompareDetails: (data: object) => void;
}

const CompareDetails: FC<CompareDetailsProps> = ({navigation}) => {
  useEffect(() => {}, []);

  return <CompareDetailsView navigation={navigation} />;
};

export default CompareDetails;

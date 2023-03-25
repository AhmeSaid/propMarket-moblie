import React, {FC} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import SuccessView from './view';

interface SuccessProps {
  navigation: NavigationProp<ParamListBase>;
  
}

const Success: FC<SuccessProps> = ({navigation}) => {


  return <SuccessView navigation={navigation} />;
};

export default Success;

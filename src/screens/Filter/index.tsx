import React, {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import FilterView from './view';

interface FilterProps {
  navigation: NavigationProp<ParamListBase>;
  Filter: (data: object) => void;
}

const Filter: FC<FilterProps> = ({navigation, route}) => {
  useEffect(() => {}, []);

  return <FilterView navigation={navigation} route={route} />;
};

export default Filter;

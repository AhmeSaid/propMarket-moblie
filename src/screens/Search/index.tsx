import React, {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import SearchView from './view';

interface SearchProps {
  navigation: NavigationProp<ParamListBase>;
  Search: (data: object) => void;
}

const Search: FC<SearchProps> = ({navigation}) => {
  useEffect(() => {}, []);

  return <SearchView navigation={navigation} />;
};

export default Search;

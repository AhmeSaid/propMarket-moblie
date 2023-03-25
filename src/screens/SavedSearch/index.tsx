import React, {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import SavedSearchView from './view';

interface SavedSearchProps {
  navigation: NavigationProp<ParamListBase>;
  Landing: (data: object) => void;
}

const SavedSearch: FC<SavedSearchProps> = ({navigation}) => {
  useEffect(() => {}, []);

  return <SavedSearchView navigation={navigation} />;
};

export default SavedSearch;

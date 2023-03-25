import React, {FC, useEffect} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import FavouritesView from './view';

interface FavouritesProps {
  navigation: NavigationProp<ParamListBase>;
  Landing: (data: object) => void;
}

const Favourites: FC<FavouritesProps> = ({navigation}) => {
  useEffect(() => {}, []);

  return <FavouritesView navigation={navigation} />;
};

export default Favourites;

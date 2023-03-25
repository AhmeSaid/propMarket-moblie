import React, {FC} from 'react';
import {View} from 'react-native';

interface CustomHeaderProps {
  color?: any;
  style?: any;
}

const Border: FC<CustomHeaderProps> = ({color, style}) => {
  return (
    <View
      style={[
        {
          width: '90%',
          height: 0.5,
          backgroundColor: color ? color : 'rgba(136, 144, 160, 0.25)',
          alignSelf: 'center',
          borderRadius: 9,
        },
        style,
      ]}
    />
  );
};

export default Border;

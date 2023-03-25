import React from 'react';
import {View} from 'react-native';
import {COLORS, width} from '../constants/theme';

// import { Container } from './styles';

const ViewShadow: React.FC = ({
  children,
  style,
}: {
  children: object;
  style: object;
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: COLORS.white,
          width: width,
          shadowColor: COLORS.semiBlock,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,

          elevation: 8,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default ViewShadow;

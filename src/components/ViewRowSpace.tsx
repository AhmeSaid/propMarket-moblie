import React from 'react';
import {View} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import {COLORS, sh, sw} from '../constants/theme';
import CustomText from './customText';
import ViewShadow from './ViewShadow';

// import { Container } from './styles';

const ViewRowSpace: React.FC = ({
  left,
  right,
  style,
}: {
  left: object;
  right: object;
  style: object;
}) => {
  return (
    <ViewShadow style={style}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {left}
        {right}
      </View>
    </ViewShadow>
  );
};

export default ViewRowSpace;

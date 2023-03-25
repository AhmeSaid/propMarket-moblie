import React, {ReactElement, useMemo} from 'react';
import {Pressable, View} from 'react-native';
import {boxShadow, COLORS} from '../../constants/theme';
import CustomText from '../customText';
import createStyles from './styles';

const ReviewCard = ({
  title,
  icon,
  overrideContainerStyle,
  value,
  isLine
}: {
  title: string;
  overrideContainerStyle?: object;
  icon: ReactElement
  value: string,
  isLine?: boolean
}) => {
  const styles = useMemo(() => createStyles(), []);

  const {container, titleStyle} = styles;
  return (
    <View style={[container, overrideContainerStyle,{borderBottomWidth: isLine?.5:0}]}>
      <CustomText
        num={1}
        color={'black'}
        text={title}
        size={14}
        leftIcon={icon}
        containerStyle={titleStyle}
      />
      <CustomText
        num={1}
        color={'black'}
        text={value}
        size={13}
        fontFamily='bold'
      />
    </View>
  );
};

export default ReviewCard;

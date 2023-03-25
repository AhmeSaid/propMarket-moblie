import React, {ReactElement, useMemo} from 'react';
import {Pressable} from 'react-native';
import {boxShadow, COLORS} from '../../constants/theme';
import CustomText from '../customText';
import createStyles from './styles';

const CardButton = ({
  text,
  onPress,
  icon,
  overrideContainerStyle,
  textSize = 14,
}: {
  text: string;
  onPress: () => void;
  icon: ReactElement;
  overrideContainerStyle?: object;
  textSize?: number;
}) => {
  const styles = useMemo(() => createStyles(), []);

  const {container, textStyle} = styles;
  return (
    <Pressable
      onPress={onPress}
      style={[container, boxShadow(13, '#0000000D'), overrideContainerStyle]}>
      {icon}
      <CustomText
        num={1}
        color={'black'}
        text={text}
        size={textSize}
        containerStyle={textStyle}
      />
    </Pressable>
  );
};

export default CardButton;

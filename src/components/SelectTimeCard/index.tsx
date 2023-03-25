import React, {ReactElement, useMemo} from 'react';
import {Pressable} from 'react-native';
import {boxShadow, COLORS} from '../../constants/theme';
import CustomText from '../customText';
import createStyles from './styles';

const SelectTimeCard = ({
  text,
  onPress,
  overrideContainerStyle,
}: {
  text: string;
  onPress?: () => void;
  overrideContainerStyle?: object;
}) => {
  const styles = useMemo(() => createStyles(), []);

  const {container} = styles;
  return (
    <Pressable onPress={onPress} style={[container, overrideContainerStyle]}>
      <CustomText
        num={1}
        color={'black'}
        text={text}
        size={14}
      />
    </Pressable>
  );
};

export default SelectTimeCard;

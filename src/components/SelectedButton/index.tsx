import {t} from 'i18next';
import React, {useMemo} from 'react';
import {Pressable, View} from 'react-native';
import {ArrowDown2} from '../../assets/svg';
import {COLORS} from '../../constants/theme';
import CustomText from '../customText';
import createStyles from './styles';

const SelectedButton = ({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}) => {
  const styles = useMemo(() => createStyles(), []);

  const {container} = styles;

  return (
    <Pressable onPress={onPress} style={container}>
      <CustomText text={text} color="black" size={14} fontFamily="regular" />
      <ArrowDown2 color={COLORS.black} />
    </Pressable>
  );
};

export default SelectedButton;

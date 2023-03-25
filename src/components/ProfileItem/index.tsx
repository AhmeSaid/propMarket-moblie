import React, {ReactElement, useMemo} from 'react';
import {Pressable, View} from 'react-native';
import reactotron from 'reactotron-react-native';
import {SideArrow} from '../../assets/svg';
import CustomText from '../customText';
import createStyles from './styles';

const ProfileItem = ({
  icon,
  title,
  onPress,
  rightIcon,
}: {
  icon: ReactElement;
  title: string;
  onPress: () => void;
  rightIcon?: ReactElement;
}) => {
  const styles = useMemo(() => createStyles(), []);

  const {container, titleStyle, leftPart} = styles;

  return (
    <Pressable onPress={onPress} style={container}>
      <View style={leftPart}>
        {icon}
        <CustomText text={title} size={14} containerStyle={titleStyle} />
      </View>
      {rightIcon ? rightIcon : <SideArrow />}
    </Pressable>
  );
};

export default ProfileItem;

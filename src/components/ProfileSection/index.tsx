import React, {ReactElement, useMemo} from 'react';
import {View} from 'react-native';
import reactotron from 'reactotron-react-native';
import {SideArrow} from '../../assets/svg';
import CustomText from '../customText';
import ProfileItem from '../ProfileItem';
import createStyles from './styles';

const ProfileSection = ({title, items}: {title: string}) => {
  const styles = useMemo(() => createStyles(), []);

  const {container, titleStyle, line} = styles;
reactotron.log('`((((', items)
  return (
    <View style={container}>
      <CustomText
        fontFamily="bold"
        text={title}
        size={14}
        containerStyle={titleStyle}
      />

      {/* {items.map((item: any) => { */}
        <ProfileItem title={items[0].title} onPress={items[0].onPress}/>
        <View style={line}/>
      {/* })} */}
    </View>
  );
};

export default ProfileSection;

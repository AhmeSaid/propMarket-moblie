import React, {FC, useMemo} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './styles';

import Container from '../../components/container';
import {View, Pressable} from 'react-native';
import CustomText from '../../components/customText';
import {sh} from '../../constants/theme';
import {
  Back,
  Profile,
} from '../../assets/svg';
import CustomButton from '../../components/customButton';

interface HelpViewProps {
  navigation: NavigationProp<ParamListBase>;
}

const HelpView: FC<HelpViewProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.keyboardAvoiding}>
      <Container style={styles.container}>
        <View style={styles.header}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Back />
          </Pressable>
          <Profile />
        </View>
        <CustomText
          containerStyle={{alignSelf: 'center'}}
          style={styles.text}
          color="primary">
          {'Help & Support'}
        </CustomText>
        <CustomButton text="Send" containerStyle={{marginTop: sh(70)}} />
      </Container>
    </View>
  );
};

export default HelpView;

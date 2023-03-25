import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React, {FC, useMemo, useState} from 'react';
import createStyles from './styles';

import {useTranslation} from 'react-i18next';
import {
  Pressable,
  View,
} from 'react-native';
import {Logo} from '../../../assets/images';
import Container from '../../../components/container';
import CustomRegisterView from '../../../components/CustomRegisterView';
import CustomText from '../../../components/customText';
import {COLORS} from '../../../constants/theme';
import LoginView from '../login/view';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface RegisterViewProps {
  navigation: NavigationProp<ParamListBase>;
}

const RegisterView: FC<RegisterViewProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);

  const {t} = useTranslation();
  const [tabState, setTabState] = useState(0);

  return (
    <KeyboardAwareScrollView style={styles.keyboardAvoiding}>
      <Container containerStyle={styles.container}>
        <View style={styles.bodyContainer}>
          <CustomText
            containerStyle={styles.hello}
            text={t('helloThere')}
            color={COLORS.primary}
            size={24}
            fontFamily={'bold'}
          />
          <CustomText style={styles.trustedText} text={t('trusted')} />

          <View style={styles.tabsContainer}>
            <Pressable
              disabled={tabState == 0}
              onPress={() => {
                setTabState(0);
              }}
              style={[
                styles.tab,
                {backgroundColor: !tabState ? COLORS.primary : 'transparent'},
              ]}>
              <CustomText
                text={t('login')}
                color={!tabState ? 'white' : 'black'}
                fontFamily={!tabState ? 'medium' : 'regular'}
              />
            </Pressable>

            <Pressable
              disabled={tabState == 1}
              onPress={() => {
                setTabState(1);
              }}
              style={[
                styles.tab,
                {backgroundColor: tabState ? COLORS.primary : 'transparent'},
              ]}>
              <CustomText
                text={t('register')}
                color={tabState ? 'white' : 'black'}
                fontFamily={tabState ? 'medium' : 'regular'}
              />
            </Pressable>
          </View>

          {tabState ? <CustomRegisterView /> : <LoginView />}
        </View>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default RegisterView;

import React, {FC, useEffect, useMemo, useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './styles';
import {useTranslation} from 'react-i18next';
import Container from '../../../components/container';
import {View, Pressable, Text} from 'react-native';
import CustomText from '../../../components/customText';
import CustomButton from '../../../components/customButton';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Arrow, Success} from '../../../assets/svg';
import {COLORS} from '../../../constants/theme';
import {reset} from '../../../navigation/NavigationService';

interface SuccessView {
  navigation: NavigationProp<ParamListBase>;
}

const SuccessView: FC<SuccessView> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);

  const {t} = useTranslation();

  return (
    <View style={styles.keyboardAvoiding}>
      <Container containerStyle={styles.container}>
        <View style={styles.bodyContainer}>
          <Success />
          <CustomText
            style={styles.successText}
            text={t('actionSuccessful')}
            fontFamily="bold"
          />
          <CustomText text={t('fine')} fontFamily="medium" />

          <CustomButton
            onPress={() => {
              reset('Landing');
            }}
            containerStyle={styles.btn}
            text={t('continue')}
          />
        </View>
      </Container>
    </View>
  );
};

export default SuccessView;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Logo } from '../assets/images';
import { HomeIcon } from '../assets/svg';
import { sh, sw } from '../constants/theme';
import { navigate } from '../navigation/NavigationService';
import CustomText from './customText';

// import { Container } from './styles';

const HomeHeader: React.FC = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.row}>
      <CustomText
        text={t('propMarket')}
        color={'white'}
        fontFamily={'bold'}
      />
      <Pressable
        style={{
          paddingHorizontal: 15,
          paddingVertical: 5,
          paddingRight: sw(30),
        }}
        onPress={() => {
          // stop
          navigate('Map');
        }}>
        <HomeIcon />
      </Pressable>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: sw(30),
    marginBottom: sh(15),
    alignItems: 'center',
  },
  logo: { height: sh(40), width: sw(101) },
});

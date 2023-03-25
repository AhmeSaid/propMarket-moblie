import React, {FC, useMemo, useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './styles';

import Container from '../../components/container';
import {
  FlatList,
  View,
  Pressable,
  Text,
  ScrollView,
  Switch,
} from 'react-native';
import CustomText from '../../components/customText';
import {COLORS, sh, sw, width} from '../../constants/theme';
import {
  Back,
  Calendar,
  CallIcon,
  Eye,
  FacebookIcon,
  HelpIcon,
  InstaIcon,
  LangIcon,
  LinkedIcon,
  NotificationIcon,
  Profile,
  ProfileIcon,
  TwitterIcon,
  Vector,
  VisitsIcon,
} from '../../assets/svg';
import {useDispatch, useSelector} from 'react-redux';
import {logout, selectCurrentUser} from '../../store';
import {t} from 'i18next';
import reactotron from 'reactotron-react-native';
import RegisterButtons from '../../components/RegisterButtons';
import ProfileItem from '../../components/ProfileItem';
import ProfileSection from '../../components/ProfileSection';
import CustomButton from '../../components/customButton';

interface MoreViewProps {
  navigation: NavigationProp<ParamListBase>;
}

const MoreView: FC<MoreViewProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const styles = useMemo(() => createStyles(), []);
  const user = useSelector(selectCurrentUser);
  const [isEnabled, setIsEnabled] = useState(false);

  const {
    container,
    headerContainer,
    propMarketText,
    registerBtns,
    titleStyle,
    line,
    signOutBtn,
    logoutContainer,
    socialContainer,
    contentContainer,
    centerText,
    copy,
  } = styles;

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Register');
  };

  return (
    <View style={container}>
      <View style={headerContainer}>
        <Text style={propMarketText}>
          <CustomText
            size={18}
            text={t('prop')}
            color={'primary'}
            fontFamily={'bold'}
          />
          <CustomText
            size={18}
            text={t('market')}
            color={'orange'}
            fontFamily={'bold'}
          />
        </Text>
        <CustomText
          fontFamily="bold"
          text={
            t('welcome') + ' ' + (user?.username ? user.username : t('withYou'))
          }
        />
        <CustomText
          text={user?.phone ? user?.phone : t('pleaseLogin')}
          size={14}
        />

        {!user?.username && <RegisterButtons containerStyle={registerBtns} />}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={contentContainer}>
        {user?.username && (
          <>
            <CustomText
              fontFamily="bold"
              text={t('myAccount')}
              size={14}
              containerStyle={titleStyle}
            />

            <ProfileItem
              title={t('profile')}
              onPress={() => {}}
              icon={<ProfileIcon />}
            />
            <View style={line} />
            <ProfileItem
              title={t('myVisits')}
              onPress={() => {}}
              icon={<VisitsIcon />}
            />
          </>
        )}

        <CustomText
          fontFamily="bold"
          text={t('settings')}
          size={14}
          containerStyle={titleStyle}
        />

        <ProfileItem
          title={t('language')}
          onPress={() => {}}
          icon={<LangIcon />}
        />
        <View style={line} />
        <ProfileItem
          title={t('notifications')}
          onPress={() => {}}
          icon={<NotificationIcon />}
          rightIcon={
            <Switch
              trackColor={{false: COLORS.inactive, true: COLORS.primary}}
              ios_backgroundColor={COLORS.inactive}
              onValueChange={() => {
                setIsEnabled(!isEnabled);
              }}
              value={isEnabled}
            />
          }
        />

        <CustomText
          fontFamily="bold"
          text={t('contuctUs')}
          size={14}
          containerStyle={titleStyle}
        />

        <ProfileItem title={t('help')} onPress={() => {}} icon={<HelpIcon />} />
        <View style={line} />
        <ProfileItem
          title={t('callUs')}
          onPress={() => {}}
          icon={<CallIcon />}
        />

        {user?.username && (
          <View style={logoutContainer}>
            <CustomButton
              onPress={handleLogout}
              text={t('logout')}
              containerStyle={signOutBtn}
            />
          </View>
        )}

        <View style={socialContainer}>
          <FacebookIcon />
          <TwitterIcon />
          <InstaIcon />
          <LinkedIcon />
        </View>

        <CustomText
          text={t('privacy') + ' . ' + t('terms')}
          size={12}
          color="border"
          containerStyle={centerText}
        />

        <CustomText
          text={t('copyRights')}
          size={12}
          color="border"
          containerStyle={[centerText, copy]}
        />
      </ScrollView>
    </View>
  );
};

export default MoreView;

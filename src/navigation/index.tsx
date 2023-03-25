import React, {createRef} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Register, Splash} from '../screens';
import {COLORS} from '../constants/theme';
import {useTranslation} from 'react-i18next';
import {I18nManager, Pressable} from 'react-native';
import * as NavigationService from '../navigation/NavigationService';
import Login from '../screens/Auth/login';
import ForgetPassword from '../screens/Auth/ForgetPassword';
import NewPassword from '../screens/Auth//NewPassword';
import SendOtp from '../screens/Auth/SendOtp';
import Landing from '../screens/Landing';
import MyTabs from './bottomTab';
import LandingDetails from '../screens/LandingDetails';
import MAP from '../screens/Map';
import Properity from '../screens/Properity';
import ProperityView from '../screens/Properity/view';
import SearchView from '../screens/Search/view';
import CompareView from '../screens/Compare/view';
import CompareDetailsView from '../screens/CompareDetails/view';
import Filter from '../screens/Filter';
import FilterView from '../screens/Filter/view';
import HelpView from '../screens/Help/view';
import {Arrow} from '../assets/svg';
import CustomText from '../components/customText';
import Success from '../screens/Auth/Success';
import Favourites from '../screens/Favourites';
import SavedSearch from '../screens/SavedSearch';
import Onboarding from '../screens/onboarding/index.';
import LocationSelect from '../screens/LocationSelect/index.';
import PropTypeSelect from '../screens/PropTypeSelect/index.';
import MovingWaySelect from '../screens/MovingWaySelect/index.';
import MovingTimeSelect from '../screens/MovingTimeSelect/index.';
import MovingReview from '../screens/MovingReview/index.';

export type MainStackParamList = {
  Splash: undefined;
  Register: undefined;
  MovingReview: undefined
  MyTabs: undefined
  Onboarding: undefined
  Properity: undefined
  Login: undefined
  HelpView: undefined
  Landing: undefined
  Compare: undefined
  CompareDetails: undefined
  ForgetPassword: undefined
  Search: undefined
  SendOtp: undefined
  MovingTimeSelect: undefined
  MovingWaySelect: undefined
  NewPassword: undefined
  Success: undefined
  LandingDetails: undefined
  Map: undefined
  Filter: undefined
  SavedSearch: undefined
  LocationSelect: undefined
  PropTypeSelect: undefined
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export const navigationRef =
  createRef<NavigationContainerRef<MainStackParamList>>();

export default function Screens() {
  const {t} = useTranslation();
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTitleStyle: {
            color: COLORS.white,
            fontFamily: 'ZenMaruGothic-Black',
            fontSize: 20,
          },
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Pressable
              style={{
                height: 40,
                // width: 40,
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                transform:[{rotateZ: I18nManager.isRTL ? '180deg': '0deg'}]
              }}
              onPress={() => {
                NavigationService.goBack();
              }}>
              <Arrow />
            </Pressable>
          ),
          animation: 'fade_from_bottom',
        }}>
          <MainStack.Screen
          options={{headerShown: false}}
          name="MyTabs"
          component={MyTabs}
        />
        <MainStack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <MainStack.Screen
          options={{headerShown: false}}
          name="Onboarding"
          component={Onboarding}
        />
        
        <MainStack.Screen
          options={{headerShown: false}}
          name="Properity"
          component={Properity}
        />
        {/* <MainStack.Screen
          options={{headerShown: false}}
          name="Properity"
          component={ProperityView}
        /> */}
        <MainStack.Screen
          options={{headerShown: false}}
          name="Register"
          component={Register}
        />
        <MainStack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />

        <MainStack.Screen
          options={{headerShown: false}}
          name="HelpView"
          component={HelpView}
        />

        <MainStack.Screen
          options={{headerShown: false}}
          name="Landing"
          component={MyTabs}
        />

        <MainStack.Screen
          options={{headerShown: true}}
          name="Compare"
          component={CompareView}
        />
        <MainStack.Screen
          options={{headerShown: true}}
          name="CompareDetails"
          component={CompareDetailsView}
        />
        <MainStack.Screen
          options={{
            headerShadowVisible: false,
            title: t('Forget Password'),
            headerShown: true,
          }}
          name="ForgetPassword"
          component={ForgetPassword}
        />
        <MainStack.Screen
          options={{headerShown: false}}
          name="Search"
          component={SearchView}
        />
        <MainStack.Screen
          options={{
            headerShadowVisible: false,
            title: t('confirmYourAccount'),
            headerShown: true,
          }}
          name="SendOtp"
          component={SendOtp}
        />
        <MainStack.Screen
          options={{
            headerShadowVisible: false,
            title: t('New Password'),
            headerShown: true,
          }}
          name="NewPassword"
          component={NewPassword}
        />
        <MainStack.Screen
          options={{headerShown: false}}
          name="Success"
          component={Success}
        />
        <MainStack.Screen
          options={{headerShown: false}}
          name="LandingDetails"
          component={LandingDetails}
        />
        <MainStack.Screen
          options={{headerShown: true}}
          name="Map"
          component={MAP}
        />
        <MainStack.Screen
          options={{headerShown: true, animation: 'fade'}}
          name="Filter"
          component={Filter}
        />
        <MainStack.Screen
          options={{headerShown: true}}
          name="SavedSearch"
          component={SavedSearch}
        />
        <MainStack.Screen
          options={{headerShown: true, headerTitle:''}}
          name="LocationSelect"
          component={LocationSelect}
        />
        <MainStack.Screen
          options={{headerShown: true, headerTitle:''}}
          name="PropTypeSelect"
          component={PropTypeSelect}
        />
        <MainStack.Screen
          options={{headerShown: true, headerTitle:''}}
          name="MovingWaySelect"
          component={MovingWaySelect}
        />
        <MainStack.Screen
          options={{headerShown: true, headerTitle:''}}
          name="MovingTimeSelect"
          component={MovingTimeSelect}
        />
        <MainStack.Screen
          options={{headerShown: true, headerTitle:''}}
          name="MovingReview"
          component={MovingReview}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

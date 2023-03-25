import React from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useTranslation} from 'react-i18next';
import {COLORS, sh} from '../constants/theme';
import Landing from '../screens/Landing';
import {
  Discover,
  DiscoverTab,
  HeartTap,
  HomeTab,
  Menu,
  More,
  Plus,
  Saved,
  Search,
} from '../assets/svg';
import SavedView from '../screens/Saved/view';
import MoreView from '../screens/More/view';
import DiscoverView from '../screens/Discover/view';
import Favourites from '../screens/Favourites';
import Properity from '../screens/Properity';
import Home from '../screens/Home/index.';

const Tab = createBottomTabNavigator();

function MyTabs({navigation}) {
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarInactiveTintColor: COLORS.border,
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTitleStyle: {
          color: COLORS.white,
          fontFamily: 'ZenMaruGothic-Black',
          fontSize: 18,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <View style={styles.tab}>
              {focused ? <HomeTab color={COLORS.white} /> : <HomeTab color={color} />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverView}
        options={{
          unmountOnBlur: true,
          headerShown: true,
          headerTitleAlign: 'center',
          tabBarIcon: ({color, focused}) => (
            <View style={styles.tab}>
              {focused ? (
                <DiscoverTab color={COLORS.white} />
              ) : (
                <DiscoverTab color={color} />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={MoreView}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <View style={[styles.tab, styles.plusBtn]}>
              <Plus color={COLORS.white} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          unmountOnBlur: true,
          headerShown: true,
          headerTitleAlign: 'center',
          tabBarIcon: ({color, focused}) => (
            <View style={styles.tab}>
              {focused ? (
                <HeartTap color={COLORS.white} />
              ) : (
                <HeartTap color={color} />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreView}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          headerTitleAlign: 'center',
          tabBarIcon: ({color, focused}) => (
            <View style={styles.tab}>
              <View
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: COLORS.border,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {focused ? <More color={COLORS.white} /> : <More color={color} />}
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: sh(92),
    paddingTop: 5,
    paddingBottom: sh(33),
    backgroundColor: COLORS.primary,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20
  },
  tab: {
    alignItems: 'center',
    marginTop: sh(12),
    height: '100%',
    justifyContent: 'space-between',
    borderTopColor: COLORS.primary,
    // borderTopWidth: 2,
    paddingTop: sh(10),
  },
  tabTitle: {
    fontSize: 11,
  },
  plusBtn: {
    backgroundColor: COLORS.orange,
    width: 47,
    height: 47,
    borderRadius: 24,
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop: 0
  }
});
export default MyTabs;

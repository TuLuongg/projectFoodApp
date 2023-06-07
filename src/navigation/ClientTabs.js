import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {colors} from '../global/styles';
import {Icon} from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
import MyOrderScreen from '../screens/MyOrderScreen';
import MyAccountScreen from '../screens/profileScreen/MyAccountScreen';
import ClientStack from './clientStack';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import AccountStack from './accountStack';

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
  const getRouteName = route => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName?.includes('RestaurantHomeScreen') ||
      routeName?.includes('MenuProductScreen') ||
      routeName?.includes('PreferenceScreen')
    ) {
      return 'none';
    }
    return 'flex';
  };

  return (
    <ClientTabs.Navigator
      screenOptions={{
        activeTintColor: colors.buttons,
      }}>
      <ClientTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
          tabBarActiveTintColor: '#2DB124',
        }}
      />

      <ClientTabs.Screen
        name="ClientStack"
        component={ClientStack}
        options={({route}) => ({
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
          tabBarStyle: {display: getRouteName(route)},
        })}
      />

      <ClientTabs.Screen
        name="MyOrderScreen"
        component={MyOrderScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'My Order',
          tabBarIcon: ({color, size}) => (
            <Icon name="view-list" type="material" color={color} size={size} />
          ),
        }}
      />

      <ClientTabs.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          headerShown: false,
          tabBarLabel: 'My Account',
          tabBarIcon: ({color, size}) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
    </ClientTabs.Navigator>
  );
}

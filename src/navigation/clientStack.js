import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import SearchResultsScreen from '../screens/SearchResultsScreen';
import RestaurantHomeScreen from '../screens/RestaurantHomeScreen';
import MenuProductScreen from '../screens/MenuProductScreen';
import PreferenceScreen from '../screens/PreferenceScreen';

const ClientSearch = createNativeStackNavigator();
const ClientStack = () => {
  return (
    <ClientSearch.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ClientSearch.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarActiveTintColor: '#2DB124',
        }}
      />

      <ClientSearch.Screen
        name="SearchResultsScreen"
        component={SearchResultsScreen}
        options={{
          tabBarActiveTintColor: '#2DB124',
        }}
      />

      <ClientSearch.Screen
        name="RestaurantHomeScreen"
        component={RestaurantHomeScreen}
        options={{
          tabBarActiveTintColor: '#2DB124',
        }}
      />

      <ClientSearch.Screen
        name="MenuProductScreen"
        component={MenuProductScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientSearch.Screen
        name="PreferenceScreen"
        component={PreferenceScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </ClientSearch.Navigator>
  );
};

export default ClientStack;

const styles = StyleSheet.create({});

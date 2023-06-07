import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyAccountScreen from '../screens/profileScreen/MyAccountScreen';
import EditAccountScreen from '../screens/profileScreen/EditAccountScreen';

const Client = createNativeStackNavigator();
const AccountStack = () => {
  return (
    <Client.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Client.Screen
        name="AccountScreen"
        component={MyAccountScreen}
        options={{
          tabBarActiveTintColor: '#2DB124',
        }}
      />
      <Client.Screen
        name="EditAccountScreen"
        component={EditAccountScreen}
        options={{
          tabBarActiveTintColor: '#2DB124',
        }}
      />
    </Client.Navigator>
  );
};

export default AccountStack;

const styles = StyleSheet.create({});

import React, {useContext, useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './authNavigators';
import {AppStack} from './appStack';
import {SignInContext} from '../contexts/authContext';
import auth from '@react-native-firebase/auth';

export default function RootNavigator() {
  const {user, setUser} = useContext(SignInContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

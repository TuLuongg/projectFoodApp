import React from 'react';

import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {SignInContextProvider} from './src/contexts/authContext';
import {colors} from './src/global/styles';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    <SignInContextProvider>
      <View style={styles.container}>
        <View style={styles.statusBar}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={colors.statusbar}
          />
        </View>

        <RootNavigator />
      </View>
    </SignInContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  statusBar: {
    height: 60,
    backgroundColor: colors.statusbar,
  },
});

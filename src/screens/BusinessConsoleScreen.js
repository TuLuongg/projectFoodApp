import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Dimensions,
} from 'react-native';

import {Icon} from 'react-native-elements';

const BusinessConsoleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BusinessConsoleScreen</Text>
    </View>
  );
};

export default BusinessConsoleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

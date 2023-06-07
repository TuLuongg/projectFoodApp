import React from 'react';

import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {colors, parameters} from '../global/styles';

import {Icon} from 'react-native-elements';

const Header = ({title, type, navigation}) => {
  return (
    <View style={styles.header}>
      <View style={{marginLeft: 20}}>
        <Icon
          type="material-community"
          name={type}
          size={28}
          color={colors.headerText}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },

  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});

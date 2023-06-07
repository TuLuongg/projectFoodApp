import React from 'react';

import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import MenuCard from '../components/MenuCard';
import {menuData, menuDetailedData} from '../global/Data';

export function Route1({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.view2}>
        <FlatList
          style={{backgroundColor: 'white'}}
          data={menuDetailedData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PreferenceScreen', {index});
              }}>
              <MenuCard
                productName={item.meal}
                image={item.image}
                price={item.price}
                productDetails={item.details}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export const Route2 = () => {
  return <View style={styles.scene} />;
};

export const Route3 = () => {
  return <View style={styles.scene} />;
};

export const Route4 = () => {
  return <View style={styles.scene} />;
};

export const Route5 = () => {
  return <View style={styles.scene} />;
};

export const Route6 = () => {
  return <View style={styles.scene} />;
};

export const Route7 = () => {
  return <View style={styles.scene} />;
};

export const Route8 = () => {
  return <View style={styles.scene} />;
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },

  view2: {
    marginTop: 5,
    paddingBottom: 20,
  },

  scene2: {
    backgroundColor: '#673AB7',
  },
});

import React from 'react';

import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import SearchResultCard from '../components/SearchResultCard';
import {restaurantData} from '../global/Data';
import {colors} from '../global/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultsScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          style={{backgroundColor: colors.cardbackground}}
          data={restaurantData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <SearchResultCard
              screenWidth={SCREEN_WIDTH}
              images={item.images}
              averageReview={item.averageReview}
              numberOfReview={item.numberOfReview}
              restaurantName={item.restaurantName}
              farAway={item.farAway}
              businessAddress={item.bussinessAddress}
              productData={item.productData}
              OnPressRestaurantCard={() =>
                navigation.navigate('RestaurantHomeScreen', {
                  id: index,
                  restaurant: item.restaurantName,
                })
              }
            />
          )}
          ListHeaderComponent={
            <View>
              <Text style={styles.textHeader}>
                Có {restaurantData.length} kết quả cho: {route.params.item}
              </Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SearchResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textHeader: {
    color: colors.grey1,
    fontSize: 20,
    marginVertical: 15,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
});

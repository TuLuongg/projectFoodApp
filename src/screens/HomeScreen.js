import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import {Icon} from 'react-native-elements';
// import CountDown from 'react-native-countdown-component';

import {colors, parameters} from '../global/styles';
import HomeHeader from '../components/HomeHeader';

import {filterData, restaurantData} from '../global/Data';
import FoodCard from '../components/FoodCard';

const SCREEN_WIDTH = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState('0');

  const ItemView = ({item, index}) => {
    return (
      <Pressable
        onPress={() => {
          setIndexCheck(item.id);
        }}>
        <View
          style={
            indexCheck === item.id
              ? {...styles.smallCardSelected}
              : {...styles.smallCard}
          }>
          <Image
            style={{height: 60, width: 60, borderRadius: 30, marginBottom: 3}}
            source={item.image}
          />
          <Text
            style={
              indexCheck === item.id
                ? {...styles.smallCardTextSelected}
                : {...styles.smallCardText}
            }>
            {item.name}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="rgba(255,140,82,1)"
      />
      <HomeHeader navigation={navigation} />

      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View
          style={{backgroundColor: colors.cardbackground, paddingBottom: 5}}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}
              style={{marginRight: 10}}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.buttons : colors.grey5,
                }}>
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
                navigation.navigate('RestaurantMapScreen');
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.grey5 : colors.buttons,
                }}>
                <Text style={styles.deliveryText}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.filterView}>
          <View style={styles.addressView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
                marginRight: 40,
              }}>
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.grey1}
                size={26}
              />

              <Text style={{marginLeft: 5}}>địa chỉ</Text>
            </View>

            <View style={styles.clockView}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color={colors.grey1}
                size={26}
              />

              <Text style={{marginLeft: 5}}>Now</Text>
            </View>
          </View>

          <View>
            <Icon
              type="material-community"
              name="tune"
              color={colors.grey1}
              size={26}
            />
          </View>
        </View>

        {/* Danh mục */}
        <View style={{backgroundColor: colors.grey6, paddingVertical: 3}}>
          <Text style={styles.headerText}>DANH MỤC</Text>
        </View>

        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={ItemView}
          />
        </View>

        {/* FreeShip Now  */}
        <View style={{backgroundColor: colors.grey6, paddingVertical: 3}}>
          <Text style={styles.headerText}>FREESHIP NOW</Text>
        </View>

        <View>
          <FlatList
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            data={restaurantData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={{marginRight: 5}}>
                  <FoodCard
                    screenWidth={SCREEN_WIDTH * 0.8}
                    images={item.images}
                    restaurantName={item.restaurantName}
                    farAway={item.farAway}
                    businessAddress={item.bussinessAddress}
                    averageReview={item.averageReview}
                    numberOfReview={item.numberOfReview}
                  />
                </View>
              );
            }}
          />
        </View>

        {/* Đang giảm giá  */}
        <View style={{backgroundColor: colors.grey6, paddingVertical: 3}}>
          <Text style={styles.headerText}>FLASH SALE</Text>
        </View>

        <View style={{marginTop: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.timeFlashSale}>Thời gian còn lại: </Text>
            {/* <Countdown
              until={3600}
              size={13}
              digitStyle={{backgroundColor: 'black'}}
              digitTxtStyle={{color: colors.cardbackground}}
              timeToShow={['H', 'M', 'S']}
              timeLabels={{h: '', m: '', s: ''}}
            /> */}
          </View>

          <FlatList
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            data={restaurantData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={{marginRight: 5}}>
                  <FoodCard
                    screenWidth={SCREEN_WIDTH * 0.8}
                    images={item.images}
                    restaurantName={item.restaurantName}
                    farAway={item.farAway}
                    businessAddress={item.bussinessAddress}
                    averageReview={item.averageReview}
                    numberOfReview={item.numberOfReview}
                  />
                </View>
              );
            }}
          />
        </View>

        {/* Quanh khu vực của bạn  */}
        <View style={{backgroundColor: colors.grey6, paddingVertical: 3}}>
          <Text style={styles.headerText}>QUANH KHU VỰC CỦA BẠN</Text>
        </View>

        <View style={{width: SCREEN_WIDTH, paddingTop: 10}}>
          {restaurantData.map(item => (
            <View key={item.id} style={{paddingBottom: 20}}>
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.95}
                images={item.images}
                restaurantName={item.restaurantName}
                farAway={item.farAway}
                businessAddress={item.bussinessAddress}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      {delivery && (
        <View style={styles.floatButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RestaurantMapScreen');
            }}>
            <Icon
              name="place"
              type="material"
              size={32}
              color={colors.buttons}
            />
            <Text style={{color: colors.grey2}}>Map</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  addressView: {
    flexDirection: 'row',
    backgroundColor: colors.grey5,
    borderRadius: 15,
    paddingVertical: 3,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  clockView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: colors.cardbackground,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginRight: 20,
  },
  headerText: {
    color: colors.grey1,
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.grey6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardText: {
    fontWeight: 'bold',
    color: colors.grey2,
  },
  smallCardTextSelected: {
    fontWeight: 'bold',
    color: colors.cardbackground,
  },
  timeFlashSale: {
    marginLeft: 15,
    fontSize: 16,
    marginTop: -10,
    marginRight: 5,
  },
  floatButton: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    backgroundColor: 'white',
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
  },
});

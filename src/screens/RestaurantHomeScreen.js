import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import RestaurantHeader from '../components/RestaurantHeader';
import {Icon} from 'react-native-elements';
import {TabView, TabBar} from 'react-native-tab-view';
import {colors, fonts} from '../global/styles';

import {restaurantData} from '../global/Data';
import MenuScreen from './RestaurantTabs/MenuScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;
const initialLayout = SCREEN_WIDTH;

const RestaurantHomeScreen = ({navigation, route}) => {
  const {id, restaurant} = route.params;
  const [routes] = useState([
    {key: 'first', title: 'MENU'},
    {key: 'second', title: 'INFO'},
    {key: 'third', title: 'REVIEWS'},
    {key: 'fourth', title: 'GALLERY'},
  ]);

  const [index, setIndex] = useState(0);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: colors.cardbackground}}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      style={styles.tab}
      labelStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />
  );

  const UpdateRoute1 = () => {
    return <View></View>;
  };

  const menuPressed = () => {
    navigation.navigate('MenuProductScreen');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <RestaurantHeader id={id} navigation={navigation} />

          {restaurantData[id].discount && (
            <View style={styles.view1}>
              <Text style={styles.text1}>
                Giảm {restaurantData[id].discount}% cho đơn hàng
              </Text>
            </View>
          )}

          <View style={styles.view2}>
            <View style={styles.view3}>
              <Text style={styles.text2}>
                {restaurantData[id].restaurantName}
              </Text>
              <Text style={styles.text3}>{restaurantData[id].foodType}</Text>

              <View style={styles.view4}>
                <Icon
                  name="star"
                  type="material-community"
                  color={colors.grey3}
                  size={15}
                />

                <Text style={styles.text4}>
                  {restaurantData[id].averageReview}
                </Text>
                <Text style={styles.text5}>
                  ({restaurantData[id].numberOfReview}+)
                </Text>

                <Icon
                  name="map-marker"
                  type="material-community"
                  color={colors.grey3}
                  size={15}
                />
                <Text style={styles.text6}>
                  {restaurantData[id].farAway} min away
                </Text>
              </View>
            </View>

            <View style={styles.view5}>
              <Text style={styles.text6}>Nhận đơn</Text>
              <View style={styles.view7}>
                <Text style={styles.text7}>
                  {restaurantData[id].collectTime}
                </Text>
                <Text style={styles.text8}>min</Text>
              </View>
            </View>

            <View style={styles.view8}>
              <Text style={styles.text9}>Giao hàng</Text>
              <View style={styles.view9}>
                <Text style={styles.text10}>
                  {restaurantData[id].deliveryTime}
                </Text>
                <Text style={styles.text11}>min</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.view10}>
          <TabView
            navigationState={{index, routes}}
            renderScene={UpdateRoute1}
            OnIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            tabBarPosition="top"
          />
        </View>

        {index === 0 && <MenuScreen onPress={menuPressed} />}
      </ScrollView>

      <TouchableOpacity>
        <View style={styles.view11}>
          <View style={styles.view12}>
            <Text style={styles.text13}>View Cart</Text>
            <View style={styles.view13}>
              <Text style={styles.text13}>0</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  view1: {
    width: '100%',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text1: {
    color: 'blue',
    fontSize: 14,
    fontWeight: 'bold',
  },

  view2: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 5,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },

  view3: {
    flex: 8,
  },

  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.grey1,
  },

  text3: {
    fontSize: 15,
    color: colors.grey3,
  },

  view4: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  text4: {
    fontFamily: fonts.ios.bold,
    fontSize: 13,
    color: colors.grey3,
    marginLeft: 2,
  },

  text5: {
    fontFamily: fonts.ios.bold,
    fontSize: 13,
    color: colors.grey3,
    marginLeft: 2,
    marginRight: 5,
  },

  text6: {
    fontWeight: 'bold',
    fontSize: 15,
    color: colors.grey1,
  },

  view5: {
    flex: 3,
    alignItems: 'center',
  },

  view6: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.grey1,
  },

  view7: {
    width: 40,
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'space-around',
  },

  text7: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
  },

  text8: {
    fontSize: 13,
    color: 'black',
    marginBottom: 5,
  },

  view8: {
    flex: 3,
    alignItems: 'center',
  },

  text9: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.grey1,
  },

  view9: {
    width: 40,
    height: 40,
    backgroundColor: colors.buttons,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'space-around',
  },

  text10: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.cardbackground,
    marginTop: 5,
  },

  text11: {
    fontSize: 13,
    color: colors.cardbackground,
    marginBottom: 5,
  },

  view10: {
    elevation: 10,
    backgroundColor: colors.pagebackground,
  },

  view11: {
    backgroundColor: colors.buttons,
    height: 50,
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: -50,
  },

  view12: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text12: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.cardbackground,
  },

  view13: {
    borderWidth: 1,
    marginRight: 10,
    borderColor: colors.cardbackground,
    borderRadius: 6,
    paddingBottom: 2,
  },

  text13: {
    paddingHorizontal: 3,
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.cardbackground,
  },

  tab: {
    paddingTop: 0,
    backgroundColor: colors.buttons,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  tabContainer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabLabel: {
    fontWeight: 'bold',
    color: colors.cardbackground,
  },

  tabStyle: {
    width: SCREEN_WIDTH / 4,
    maxHeight: 45,
  },

  view14: {
    backgroundColor: colors.buttons,
    height: 70,
    paddingTop: 40,
    paddingLeft: 5,
    flexDirection: 'row',
  },

  text14: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

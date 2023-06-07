import React, {useState, useEffect} from 'react';

import {StyleSheet, Text, View, ImageBackground, Animated} from 'react-native';
import {colors} from '../global/styles';
import {restaurantData} from '../global/Data';
import {Icon} from 'react-native-elements';

const RestaurantHeader = ({navigation, id}) => {
  const index2 = 10;
  const currentValue = new Animated.Value(1);

  const [liked, setLiked] = useState(false);
  const [counter, setCounter] = useState(-2);
  const [visible, setVisible] = useState(false);

  const likeHander = () => {
    if (liked == false) setVisible(true);

    setLiked(!liked);
    setCounter(index2);
  };

  useEffect(() => {
    if (liked == true) {
      Animated.spring(currentValue, {
        toValue: 3,
        friction: 2,
        useNativeDriver: true,
      }).start(() => {
        Animated.spring(currentValue, {
          toValue: 1,
          friction: 2,
          useNativeDriver: true,
        }).start(() => {
          setVisible(false);
        });
      });
    }
  }, [liked]);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={{uri: restaurantData[id].images}}>
        <View style={styles.view1}>
          <View style={styles.view2}>
            <Icon
              name="arrow-left"
              type="material-community"
              color={colors.pagebackground}
              size={25}
              onPress={() => navigation.goBack()}
            />
          </View>

          <View style={styles.view3}>
            <Icon
              name={liked && index2 == counter ? 'favorite' : 'favorite-border'}
              type="material"
              color="red"
              size={28}
              onPress={likeHander}
            />
          </View>
        </View>

        <View style={styles.view4}>
          {visible && index2 == counter && (
            <Animated.View style={{transform: [{scale: currentValue}]}}>
              <Icon name="favorite" type="material" size={40} color="red" />
            </Animated.View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default RestaurantHeader;

const styles = StyleSheet.create({
  container: {
    height: 150,
  },

  view1: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },

  view2: {
    margin: 10,
    backgroundColor: colors.cardbackground,
    borderRadius: 20,
    padding: 7,
  },

  view3: {
    marginTop: 0,
    margin: 10,
    backgroundColor: colors.cardbackground,
    borderRadius: 20,
    padding: 7,
  },

  view4: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

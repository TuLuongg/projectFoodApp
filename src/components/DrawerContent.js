import React, {useState, useContext, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

import {
  StyleSheet,
  Text,
  View,
  Linking,
  Pressable,
  Alert,
  Switch,
  ViewComponent,
  TouchableOpacity,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {Avatar, Button, Icon} from 'react-native-elements';
import {colors} from '../global/styles';
import {SignInContext} from '../contexts/authContext';

const DrawerContent = props => {
  const {user, logout} = useContext(SignInContext);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={{backgroundColor: colors.buttons}}>
          <View style={styles.header}>
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              size={75}
              source={{
                uri: 'https://antimatter.vn/wp-content/uploads/2023/01/hinh-anh-avatar-dep-cute-ngau.jpg',
              }}
            />

            <View style={{marginLeft: 7}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: colors.cardbackground,
                  fontSize: 18,
                }}>
                Lương Xuân Tú
              </Text>
              <Text style={{color: colors.cardbackground, fontSize: 14}}>
                tu.lx200549@gmail.com
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            {/* My favouries */}
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: colors.cardbackground,
                    fontSize: 18,
                  }}>
                  1
                </Text>
                <Text style={{color: colors.cardbackground, fontSize: 14}}>
                  My Favouries
                </Text>
              </View>
            </View>

            {/* Giỏ hàng */}
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <View
                style={{
                  marginLeft: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: colors.cardbackground,
                    fontSize: 18,
                  }}>
                  0
                </Text>
                <Text style={{color: colors.cardbackground, fontSize: 14}}>
                  Giỏ hàng
                </Text>
              </View>
            </View>
          </View>
        </View>

        <DrawerItemList {...props} />

        <DrawerItem
          label="Payment"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="credit-card-outline"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Promotions"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="tag-heart"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Settings"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="cog-outline"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Help"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="lifebuoy"
              color={color}
              size={size}
            />
          )}
        />

        {/* Chế độ tối */}
        <View style={{borderTopWidth: 1, borderTopColor: colors.grey6}}>
          <Text style={styles.preferences}>Preferences</Text>

          <View style={styles.switchText}>
            <Text style={styles.darkthemeText}>Dark Theme</Text>

            <View style={{paddingRight: 10}}>
              <Switch
                trackColor={{false: '#767577', true: '#2DB124'}}
                thumbColor="#F4F3F4"
              />
            </View>
          </View>
        </View>
      </DrawerContentScrollView>

      <View style={{marginBottom: 15}}>
        <DrawerItem
          label="Đăng xuất"
          icon={({color, size}) => (
            <Icon
              type="material-community"
              name="logout-variant"
              color={color}
              size={size}
              onPress={() => logout()}
            />
          )}
        />
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 5,
  },
  avatar: {
    borderWidth: 4,
    borderColor: colors.cardbackground,
  },
  preferences: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 20,
  },
  switchText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingVertical: 5,
    paddingRight: 10,
  },
  darkthemeText: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    paddingLeft: 0,
    fontWeight: 'bold',
  },
});

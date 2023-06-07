import React, {useState, useRef} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  FlatList,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import filter from 'lodash/filter';
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';

import {filterData} from '../global/Data';

const SearchComponent = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([...filterData]);

  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFossued, setTextInputFossued] = useState(true);
  const textInput = useRef(0);

  const contains = ({name}, query) => {
    if (name.includes(query)) {
      return true;
    }

    return false;
  };

  const handleSearch = text => {
    const dataS = filter(filterData, userSearch => {
      return contains(userSearch, text);
    });

    setData([...dataS]);
  };

  return (
    <View style={{alignItems: 'center'}}>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}>
        <View style={styles.SearchArea}>
          <Icon
            name="search"
            style={styles.searchIcon}
            type="material"
            iconStyle={{marginLeft: 5}}
            size={32}
          />

          <Text style={{fontSize: 15}}>Bạn đang tìm kiếm món gì ?</Text>
        </View>
      </TouchableWithoutFeedback>

      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.view1}>
            <View style={styles.TextInput}>
              <Animatable.View
                animation={textInputFossued ? 'fadeInRight' : 'fadeInLeft'}
                duration={300}>
                <Icon
                  name={textInputFossued ? 'arrow-back' : 'search'}
                  onPress={() => {
                    if (textInputFossued) setModalVisible(false);
                    setTextInputFossued(true);
                  }}
                  style={styles.icon2}
                  type="matarial"
                  iconStyle={{marginRight: 5}}
                />
              </Animatable.View>

              <TextInput
                style={{width: '90%'}}
                placeholder=""
                autoFocus={false}
                ref={textInput}
                onFocus={() => {
                  setTextInputFossued(true);
                }}
                onBlur={() => {
                  setTextInputFossued(false);
                }}
                onChangeText={handleSearch}
              />

              <Animatable.View
                animation={textInputFossued ? 'fadeInLeft' : ''}
                duration={300}>
                <Icon
                  name={textInputFossued ? 'cancel' : null}
                  iconStyle={{color: colors.grey3}}
                  style={{marginRight: 10}}
                  onPress={() => {
                    textInput.current.clear();
                    //    handleSearch()
                  }}
                />
              </Animatable.View>
            </View>
          </View>

          <FlatList
            data={data}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss;
                  navigation.navigate('SearchResultsScreen', {
                    item: item.name,
                  });
                  setModalVisible(false);
                  setTextInputFossued(true);
                }}>
                <View>
                  <Text style={styles.searchIdea}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </Modal>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text1: {
    color: colors.grey3,
    fontSize: 16,
  },

  TextInput: {
    height: 50,
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    borderColor: '#86939E',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },

  SearchArea: {
    marginTop: 10,
    width: '94%',
    height: 50,
    backgroundColor: colors.grey6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.grey4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchIcon: {
    fontSize: 24,
    padding: 5,
    color: colors.grey2,
  },

  view1: {
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  view2: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },

  icon2: {
    fontSize: 24,
    padding: 5,
    color: colors.grey2,
  },

  modal: {
    flex: 1,
    marginTop: 50,
  },

  searchIdea: {
    color: colors.grey2,
    fontSize: 16,
    padding: 10,
    marginLeft: 10,
    fontWeight: '600',
  },
});

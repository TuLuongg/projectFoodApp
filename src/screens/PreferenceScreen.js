import React, {Component} from 'react';

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Icon, CheckBox} from 'react-native-elements';
import {colors} from '../global/styles';

import {menuDetailedData} from '../global/Data';

export class PreferenceScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preference:
        menuDetailedData[this.props.route.params.index].preferenceData,
      required: menuDetailedData[this.props.route.params.index].required,
      minimum_quantity:
        menuDetailedData[this.props.route.params.index].minimum_quatity,
      counter: menuDetailedData[this.props.route.params.index].counter,
    };
  }

  render() {
    const index = this.props.route.params.index;
    const {meal, details, price} =
      menuDetailedData[this.props.route.params.index];

    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={styles.backgroundImage}
            source={{
              uri: 'https://images.foody.vn/res/g1/4093/prof/s640x400/image-19f75773-220812162155.jpg',
            }}
          />

          <View style={styles.bar}>
            <Text style={styles.title}>Thêm món mới</Text>
          </View>

          <View style={styles.view12}>
            <Icon
              name="arrow-left"
              type="material-community"
              color="black"
              size={28}
              onPress={() => {
                this.props.navigation.goBack();
              }}
            />
          </View>

          <View style={styles.view1}>
            <Text style={styles.text1}>{meal}</Text>
            <Text style={styles.text2}>{details}</Text>
          </View>

          {/* Choose a meal type */}
          <View style={styles.view2}>
            <Text style={styles.text3}>Choose a meal type</Text>
            <View style={styles.view3}>
              <Text style={styles.text4}>REQUIRED</Text>
            </View>
          </View>

          <View style={styles.view4}>
            <View style={styles.view5}>
              <View style={styles.view6}>
                <CheckBox
                  center
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={true}
                  checkedColor={colors.buttons}
                />
                <Text style={styles.text5}>- - - - -</Text>
              </View>
              <Text style={styles.text6}>{price.toFixed(3)} VND</Text>
            </View>
          </View>

          {/* Choose your 2 dips */}
          <View>
            {this.state.preference.map(item => (
              <View key={item.id}>
                <View style={styles.view7}>
                  <Text style={styles.text8}>
                    {
                      menuDetailedData[index].preferenceTitle[
                        this.state.preference.indexOf(item)
                      ]
                    }
                  </Text>
                  {this.state.required[this.state.preference.indexOf(item)] && (
                    <View style={styles.view9}>
                      <Text style={styles.text7}>
                        {
                          this.state.minimum_quantity[
                            this.state.preference.indexOf(item)
                          ]
                        }{' '}
                        REQUIRED
                      </Text>
                    </View>
                  )}
                </View>

                <View style={styles.view10}>
                  {item.map(items => (
                    <TouchableOpacity
                      key={items.id}
                      onPress={() => {
                        const id = this.state.preference.indexOf(item);
                        if (this.state.minimum_quantity[id] !== null) {
                          const check = item.filter(items =>
                            items.checked ? items : null,
                          );
                          this.state.preference[id].forEach(i => {
                            if (i.id === items.id) {
                              if (
                                check.length < this.state.minimum_quantity[id]
                              ) {
                                i.checked = !i.checked;
                              } else {
                                i.checked = false;
                              }
                            }
                          });
                          this.state.counter[id] = this.state.counter[id] + 1;
                          this.setState({
                            preference: [...this.state.preference],
                            counter: [...this.state.counter],
                          });
                        } else {
                          this.state.preference[id].forEach(i => {
                            if (i.id === items.id) {
                              i.checked = !i.checked;
                            }
                          });
                          this.state({preference: [...this.state.preference]});
                        }
                      }}>
                      <View style={styles.view4}>
                        <View style={styles.view19}>
                          <View style={styles.view6}>
                            <CheckBox
                              center
                              checkedIcon="check-square-o"
                              uncheckedIcon="square-o"
                              checked={items.checked}
                              checkedColor={colors.buttons}
                            />
                            <Text
                              style={{color: colors.grey1, marginLeft: -10}}>
                              {items.name}
                            </Text>
                          </View>
                          <Text style={styles.text6}>
                            {items.price.toFixed(3)} VND
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Add to cart */}
        <View style={styles.view13}>
          <Text style={styles.text11}>Số lượng</Text>
        </View>
        <View style={styles.view14}>
          <View style={styles.view15}>
            <Icon name="remove" type="material" color="black" size={28} />
          </View>
          <Text style={styles.text9}>1</Text>
          <View style={styles.view16}>
            <Icon name="add" type="material" color="black" size={28} />
          </View>
        </View>

        <View style={styles.view17}>
          <View style={styles.view18}>
            <Text style={styles.text10}>Thêm vào giỏ hàng</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default PreferenceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    width: '100%',
    backgroundColor: colors.buttons,
    overflow: 'hidden',
    height: 180, //HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    width: '100%', //null,
    height: 150, //HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    alignItems: 'center',
    paddingVertical: 4,
    backgroundColor: colors.cardbackground,
    borderBottomColor: colors.grey4,
    borderBottomWidth: 2,
  },
  title: {
    color: colors.buttons,
    fontSize: 26,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    //paddingTop: Platform.OS !== 'ios' ?
    //HEADER_MAX_HEIGHT : 0,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  view1: {backgroundColor: 'white', padding: 10, marginBottom: 10},

  text1: {fontSize: 15, color: colors.grey1, fontWeight: 'bold'},

  text2: {
    fontSize: 14,
    color: colors.grey2,
    marginTop: 5,
  },

  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },

  text3: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.grey1,
    marginLeft: 10,
  },

  view3: {
    borderWidth: 3,
    borderColor: colors.grey5,
    borderRadius: 5,
    marginRight: 10,
  },

  text4: {fontWeight: 'bold', color: colors.grey3, padding: 5},

  view4: {
    backgroundColor: 'white',
    marginBottom: 10,
  },

  view5: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  view6: {flexDirection: 'row', alignItems: 'center'},
  text5: {fontWeight: 'bold', marginLeft: -10},
  text6: {fontSize: 16, fontWeight: 'bold'},

  view7: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 35,
    marginBottom: 5,
  },

  text8: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.grey1,
    marginLeft: 10,
  },

  view9: {
    borderWidth: 3,
    borderColor: colors.grey5,
    borderRadius: 5,
    marginRight: 10,
  },

  text7: {fontWeight: 'bold', color: colors.grey3, padding: 5},

  view10: {backgroundColor: 'white', marginBottom: 10},

  view11: {flexDirection: 'row', alignItems: 'center'},

  view12: {position: 'absolute', top: 12, left: 12},

  view13: {
    paddingVertical: 3,
    borderTopWidth: 1,
    borderColor: colors.cardbackground,
  },

  text11: {
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.grey3,
  },

  view14: {
    flexDirection: 'row',
    backgroundColor: colors.cardbackground,
    paddingVertical: 5,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  view15: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.buttons,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text9: {fontWeight: 'bold', fontSize: 18},
  view16: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.buttons,
    alignItems: 'center',
    justifyContent: 'center',
  },

  view17: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: colors.cardbackground,
    marginTop: -5,
  },

  view18: {
    backgroundColor: colors.buttons,
    alignItems: 'center',
    paddingVertical: 2,
    marginBottom: 3,
    width: 320,
    borderRadius: 12,
  },

  text10: {padding: 10, fontWeight: 'bold', fontSize: 18},

  view19: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
});

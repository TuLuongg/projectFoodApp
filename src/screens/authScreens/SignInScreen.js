import React, {useState, useRef, useContext} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Alert,
} from 'react-native';
import {colors, parameters, title} from '../../global/styles';

import {Icon, Button, SocialIcon} from 'react-native-elements';
import {Formik} from 'formik';

import Header from '../../components/Header';
import {SignInContext} from '../../contexts/authContext';
import FormInput from '../../components/FormInput';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login, googleLogin, fbLogin} = useContext(SignInContext);

  return (
    <View style={styles.container}>
      <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />

      <View style={{backgroundColor: '#fff', paddingBottom: 5}}>
        <View style={{marginLeft: 20, marginTop: 10}}>
          <Text style={title}>Đăng nhập</Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text>Vui lòng nhập tài khoản và mật khẩu !</Text>
        </View>
      </View>

      <View style={styles.view}>
        <FormInput
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={password}
          onChangeText={userPassword => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <View style={{marginTop: 30}}>
          <Button
            title="ĐĂNG NHẬP"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => login(email, password)}
          />
        </View>
      </View>

      {/* <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          signIn(values);
        }}>
        {props => (
          <View>
            <View style={{marginTop: 20}}>
              <View>
                <TextInput
                  style={styles.textInput1}
                  placeholder="Email"
                  ref={textInput1}
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                />
              </View>

              <View style={styles.textInput2}>
                <Animatable.View
                  animation={textInput2Fossued ? '' : 'fadeInLeft'}
                  duration={400}>
                  <Icon
                    name="lock"
                    iconStyle={{color: colors.grey3}}
                    type="material"
                  />
                </Animatable.View>

                <TextInput
                  style={{width: '80%'}}
                  placeholder="Password"
                  ref={textInput2}
                  onFocus={() => {
                    setTextInput2Fossued(false);
                  }}
                  onBlur={() => {
                    setTextInput2Fossued(true);
                  }}
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                />

                <Animatable.View
                  animation={textInput2Fossued ? '' : 'fadeInLeft'}
                  duration={400}>
                  <Icon
                    name="visibility-off"
                    iconStyle={{color: colors.grey3}}
                    type="material"
                  />
                </Animatable.View>
              </View>
            </View>

            <View style={{marginHorizontal: 20, marginTop: 30}}>
              <Button
                title="ĐĂNG NHẬP"
                buttonStyle={parameters.styledButton}
                titleStyle={parameters.buttonTitle}
                onPress={props.handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik> */}

      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          Quên mật khẩu ?
        </Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 30, marginBottom: 20}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>HOẶC</Text>
      </View>

      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          title="Đăng nhập bằng Facebook"
          button
          type="facebook"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <SocialIcon
          title="Đăng nhập bằng Google"
          button
          type="google"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{marginLeft: 20, marginTop: 25}}>
        <Text style={{...styles.text1}}>Bạn chưa có tài khoản ?</Text>
      </View>

      <View style={{alignItems: 'flex-end', marginHorizontal: 20}}>
        <Button
          title="Tạo tài khoản mới"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}
        />
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  view: {
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },

  text1: {
    color: colors.grey3,
    fontSize: 16,
  },

  textInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    height: 46,
    paddingLeft: 15,
    fontSize: 16,
  },

  textInput2: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 10,
    height: 46,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },

  socialIcon: {
    borderRadius: 12,
    height: 50,
  },

  createButton: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2DB124',
    height: 40,
    paddingHorizontal: 20,
  },

  createButtonTitle: {
    color: '#2DB124',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});

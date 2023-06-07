import React, {createContext, useReducer, useState} from 'react';
import {SignInReducer} from '../reducers/authReducers';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const SignInContext = createContext();

export const SignInContextProvider = props => {
  // const [signedIn, dispatchSignedIn] = useReducer(SignInReducer, {
  //   userToken: null,
  // });

  const [user, setUser] = useState(null);

  return (
    <SignInContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                //Khi quá trình tạo người dùng diễn ra thành công
                //có thể thêm người dùng hiện tại vào firestore với các thông tin thích hợp.
                firestore()
                  .collection('users')
                  .doc(auth().currentUser.uid)
                  .set({
                    fname: '',
                    lname: '',
                    email: email,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                    userImg: null,
                  })
                  .catch(error => {
                    console.log(
                      'Something went wrong with added user to firestore: ',
                      error,
                    );
                  });
              })
              .catch(error => {
                console.log('Something went wrong with sign up: ', error);
              });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async (email, password) => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {props.children}
    </SignInContext.Provider>
  );
};

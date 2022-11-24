import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import LoginButton from '../../components/login/LoginButton';
import ForgotButton from '../../components/login/ForgotButton';
import InputboxID from '../../components/login/InputboxID';
import InputboxPW from '../../components/login/InputboxPW';

function LoginScreen() {

  const styles = StyleSheet.create({
    container: {
      height: 1000,
      backgroundColor: 'white'
    },

    image: {
      width: 500,
      height: 200,
      marginTop: 20,
      marginBottom: 30,
      backgroundColor: 'powderblue'
    },

    logintext: {
      marginBottom: 20,
      fontFamily: 'GmarketSansTTFBold',
      fontSize: 30,
      textAlign: "center",
      color: "black"
    },

    inputbox: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      fontFamily: 'GmarketSansTTFLight',
      fontSize: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1
    },

    loginbox: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      fontFamily: 'GmarketSansTTFLight',
      fontSize: 30,
    },

    missing:{
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      alignItems : "center",
      fontSize: 30,
      border: "none"
    }

  });

  return (
    <View style={styles.container}>
      <View style={styles.image}></View>
      <Text style = {styles.logintext}>
        로그인
      </Text>
      <View style={styles.inputbox}>
        <InputboxID/>
      </View>
      <View style={styles.inputbox}>
        <InputboxPW/>
      </View>
      <LoginButton/>
      <ForgotButton/>
    </View>
  );
}

export default LoginScreen;
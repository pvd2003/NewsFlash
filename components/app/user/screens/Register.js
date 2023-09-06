import {
  StyleSheet, Text, View, TextInput,
  Button, Pressable, TouchableOpacity,
  Image, ToastAndroid
} from 'react-native'
import React, { useState, useContext } from 'react'
import UserContext from '../utilities/UserContext'

const Register = (props) => {
  const { navigation } = props;
  const { register } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onRegister = async () => {
    const result = await register(email, password);
    if(result){
      ToastAndroid.show('Đăng ký thành công',ToastAndroid.LONG);
      navigation.navigate('Login')
    }else{
      ToastAndroid.show('Đăng ký ko thành công',ToastAndroid.LONG);
    }
    // console.log('>>>>>>Register result', result)
  }
  return (
    <View style={loginStyle.container}>
      <Text style={loginStyle.hello}>Hello</Text>
      <Text style={loginStyle.again}>Again!</Text>
      <Text style={loginStyle.welcome}>Welcome back you've been missed</Text>
      <Text style={loginStyle.username}>Username*</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={loginStyle.input} />
      <Text style={loginStyle.password}>Password*</Text>
      <View style={loginStyle.inputContainer}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={loginStyle.input}
          secureTextEntry={true} />
        <Image
          style={loginStyle.icon}
          source={require('../../../../media/image/eye.png')}
          resizeMode='cover' />
      </View>

      <Pressable
        onPress={onRegister}
        style={loginStyle.btnContainer}>
        <Text style={loginStyle.btnLoginLabel}>Register</Text>
      </Pressable>

      <View style={loginStyle.account}>
        <Text style={loginStyle.accountLabel}>Already having an account ? </Text>
        <Text 
        style={loginStyle.signUpLabel}
        onPress={() => navigation.navigate('Login')}>Login</Text>
      </View>
    </View>
  )
}

export default Register

const loginStyle = StyleSheet.create({

  account: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },

  accountLabel: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#667080',
  },

  signUpLabel: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#1877F2',
  },

  icon: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  inputContainer: {
    position: 'relative',
  },
  btnLoginLabel: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#fff',
  },

  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    paddingVertical: 13,
    paddingHorizontal: 24,
    width: '100%',
    height: 50,
    backgroundColor: '#1877f2',
    borderRadius: 6,
  },
  input: {
    width: '100%',
    marginTop: 4,
    padding: 10,
    height: 48,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#4e4b66',
  },
  password: {
    marginTop: 16,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4e4b66',
  },
  username: {
    marginTop: 48,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: '#4e4b66',
  },
  welcome: {
    width: 222,
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0.12,
    color: '#4e4b66',
  },

  continueLabel: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#4E4B66',
  },

  continue: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },

  again: {
    fontWeight: '700',
    fontSize: 48,
    lineHeight: 72,
    letterSpacing: 0.12,
    color: '#1877f2',
  },
  hello: {
    fontWeight: '700',
    fontSize: 48,
    lineHeight: 72,
    letterSpacing: 0.12,
    color: '#050505',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  }
})
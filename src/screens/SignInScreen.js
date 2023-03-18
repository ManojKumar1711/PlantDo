import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../assets/images/Logo_1.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {ScrollView} from 'react-native';
const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSignInPresses = () => {
    console.warn('Sign In');
  };

  const onFpPressed = () => {
    console.warn('Forgot Password');
  };

  const onGoogle = () => {
    console.warn('Signed in with Google');
  };

  const onCreateAccount = () => {
    console.warn('Click here to create an account');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="UserName"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Enter Your Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton onPress={onSignInPresses} text="Sign-In" />
        <CustomButton
          onPress={onFpPressed}
          text="Forgot Password?"
          type="TERTIARY"
        />
        <CustomButton
          onPress={onGoogle}
          text="Continue with Google"
          bgColor="#E7EAF4"
          fgColor="#DD4D44"
        />
        <CustomButton
          onPress={onCreateAccount}
          text="New user? Click here to create an account"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 500,
    maxHeight: 200,
  },
});
export default SignInScreen;

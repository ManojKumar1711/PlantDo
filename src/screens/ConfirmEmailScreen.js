import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';
const ConfirmEmailScreen = () => {
  const [code,setCode] = useState('');
  const onConfirmPressed = () =>{
    console.warn('onConfirmPressed');
  };
  const onSignInPressed = () =>{
    console.warn('onSignInPressed');
  };

  const onResendPressed = () =>{
    console.warn('onResendPressed');
  }
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Verify your Account</Text>

        <CustomInput
          placeholder="Enter the 6-digit confirmation code"
          value={code}
          setValue={setCode}
        />

        <CustomButton onPress={onConfirmPressed} text="Confirm" />

        <CustomButton
          onPress={onResendPressed}
          text="Resend code"
          type="SECONDARY"
        />

        <CustomButton
          onPress={onSignInPressed}
          text="Back To Sign In"
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
  title: {
    fontSize: 24,
    color: '#051C60',
    margin: 10,
    fontWeight: 'bold',
  },
  text: {
    color: 'gray',
    marginVertical: 10,
    textAlign: 'center',
  },
  link: {
    color: '#FDB075',
  },
});
export default ConfirmEmailScreen;

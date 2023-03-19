import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
//import SocialSignInButtons from '../components/SocialSignInButtons';
const NewPaswordScreen = () => {
  const [confirmCode, setConfirmCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const onSubmitPressed = () => {
    console.warn('onSubmitPressed');
  };
  const onSignInPressed = () => {
    console.warn('onSignInPressed');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Change Password</Text>

        <CustomInput
          placeholder="Enter your code"
          value={confirmCode}
          setValue={setConfirmCode}
        />

        <CustomInput
          placeholder="New Password"
          value={newPassword}
          setValue={setNewPassword}
          secureTextEntry
        />

        <CustomButton onPress={onSubmitPressed} text="SUBMIT" />

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
export default NewPaswordScreen;

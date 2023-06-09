import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from "@react-navigation/native";
const ConfirmPasswordScreen = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();
  const onSendPressed = () => {
    navigation.navigate('New Password');
  };
  const onSignInPressed = () => {
    navigation.navigate('Sign In');

  };

  const onResendPressed = () => {
    console.warn('onResendPressed');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>RESET YOUR PASSWORD</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomButton onPress={onSendPressed} text="Send" />

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
export default ConfirmPasswordScreen;

import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  const onSignUpPressed = () => {
    navigation.navigate('Confirm Email');
  };
  const onTermsOfUsePressed = () => {
    console.warn('OnTermsofUsePressed');
  };
  const onPrivacyPressed = () => {
    console.warn('OnPrivacyPolicyPressed');
  };
  const onSignInPressed = () => {
    navigation.navigate('Sign In');  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create Your Account</Text>
        <CustomInput
          placeholder="UserName"
          value={username}
          setValue={setUsername}
        />

        <CustomInput placeholder="Email" value={email} setValue={setEmail} />

        <CustomInput
          placeholder="Enter Your Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomInput
          placeholder="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          secureTextEntry
        />
        <CustomButton onPress={onSignUpPressed} text="Sign Up" />

        <Text style={styles.text}>
          By signing up, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use{' '}
          </Text>
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>
        <SocialSignInButtons />
        <CustomButton
          onPress={onSignInPressed}
          text="Have an account Sign-in"
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
export default SignUpScreen;

import React from 'react';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ConfirmPasswordScreen from '../screens/ConfirmPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import Camera from '../screens/Camera';
import UploadImage from "../screens/UploadImage";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Sign In'} component={SignInScreen} />
        <Stack.Screen name={'Sign Up'} component={SignUpScreen} />
        <Stack.Screen name={'Confirm Email'} component={ConfirmEmailScreen} />
        <Stack.Screen
          name={'Forgot Password'}
          component={ConfirmPasswordScreen}
        />
        <Stack.Screen name={'New Password'} component={NewPasswordScreen} />
        <Stack.Screen name={'Home'} component={HomeScreen} />
        <Stack.Screen name={'Camera'} component={Camera} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

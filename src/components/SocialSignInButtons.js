import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from './CustomButton';

const SocialSignInButtons = () => {
  const onGoogle = () => {
    console.warn('Signed in with Google');
  };

  return (
    <>
      <CustomButton
        onPress={onGoogle}
        text="Continue with Google"
        bgColor="#E7EAF4"
        fgColor="#DD4D44"
      />
    </>
  );
};

export default SocialSignInButtons;

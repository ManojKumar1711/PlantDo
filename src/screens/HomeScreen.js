import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
const HomeScreen = () => {
  const navigation = useNavigation();
  const openCamera = () => {
    navigation.navigate('Camera');
  };
  const selectDoc = async () => {
    try {
      // const doc = await DocumentPicker.pick({
      //   type: [DocumentPicker.types.pdf],
      //   allowMultiSelection: true
      // });
      // const doc = await DocumentPicker.pickSingle()
      const doc = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
      });
      console.log(doc);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the upload', err);
      } else {
        console.log(err);
      }
    }
  };

  return (
    <View style={styles.body}>
      <View>
        <CustomButton
          onPress={openCamera}
          text="OPEN CAMERA"
          fgColor="black"
          bgColor="blue"
        />
      </View>
      <View>
        <CustomButton
          onPress={selectDoc}
          text="UPLOAD IMAGE"
          fgColor="black"
          bgColor="blue"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 100,
  },
});
export default HomeScreen;

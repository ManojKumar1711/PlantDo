import {View, Text, Button} from 'react-native';
import React from 'react';
import DocumentPicker from 'react-native-document-picker';

export default function UploadImage() {
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
    <View>
      <View style={{marginHorizontal: 40}}>
        <Text>HI</Text>
      </View>
    </View>
  );
}

import {Linking, Platform } from 'react-native';

export default dialCall = ({phoneNumber}) => {

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${+1234567890}';
    }
    else {
      phoneNumber = 'telprompt:${+1234567890}';
    }

    Linking.openURL(phoneNumber);
  };
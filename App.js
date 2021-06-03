import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RestaurantScreen from './app/screens/RestaurantScreen';
import SearchResultScreen from './app/screens/SearchResultScreen';
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from './app/navigation/AppNavigator';
import * as firebase from 'firebase';
import { getDatabase, ref, onValue, app, child, on } from "firebase/database";
import config from './app/firebaseconfig';

export default function App() {
  
  return (
  <NavigationContainer>
    <AppNavigator/>
  </NavigationContainer>
  );
}


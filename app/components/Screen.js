import React from 'react';
import Contants from 'expo-constants';
import { SafeAreaView, StyleSheet } from 'react-native';
import colors from '../config/colors';
function Screen({children, style}) {
    return (
<SafeAreaView style={[styles.screen, style]}>
        {children}
</SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen:{
        paddingTop: Contants.statusBarHeight,
        flex: 1,
        backgroundColor:colors.background,
    },
    
})
export default Screen;
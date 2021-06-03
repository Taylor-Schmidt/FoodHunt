import React from 'react';
import { StyleSheet, View, Image, Linking, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';

import Icon from '../components/Icon';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';


function RestaurantScreen({route}) {

    const restaurant = route.params;

    const dialCall = (phoneNumber) => {

        if (Platform.OS === 'android') {
          phoneNumber = 'tel:${+'+ phoneNumber +'}';
        }
        else {
          phoneNumber = 'telprompt:${+' + phoneNumber + '}';
        }
    
        Linking.openURL(phoneNumber);
      };

    return (
       <Screen style={styles.screen}>
           <View style={styles.cardContainer}>
                <View style={styles.card}>
                        <View style={styles.topcontainer}>
                                <Image style={styles.image} source={{uri: restaurant.image}}/>
                                <ListItem 
                                title={restaurant.title} 
                                subTitle={restaurant.address}
                                IconComponet={
                                    <Icon name={"map-marker"} backgroundColor={colors.primary}/>
                                }
                            />
                        </View>
                        <MapView style={styles.map} region={restaurant.mapRegion}>
                            <MapView.Marker id="1" coordinate={restaurant.location.LatLng} title={restaurant.title} description={restaurant.address}/>
                        </MapView>
                        <ListItemSeparator/>
                        <TouchableOpacity  style={styles.container}> 
                            <View>
                                <ListItem 
                                title="Phone Number" 
                                subTitle={restaurant.phone}
                                IconComponet={
                                    <Icon name={"phone"} backgroundColor={colors.secondary}/>
                                }
                                onPress={() => dialCall(restaurant.phone)}
                                selectable
                                />
                            </View>
                        </TouchableOpacity>
                        <ListItemSeparator/>
                        <View style={styles.container}>
                        <ListItem 
                            title="Website" 
                            IconComponet={
                                <Icon name={"food-fork-drink"} backgroundColor={colors.secondary}/>
                            }
                            onPress={() => Linking.openURL(restaurant.website)}
                            selectable
                            />
                        </View>
                        <ListItemSeparator/>
                </View>
           </View>
       </Screen>
    );
}
const styles = StyleSheet.create({
    card:{
        borderRadius: 25,
        backgroundColor: colors.white,
        width: "95%",
        height: "100%",
        overflow: "hidden",
    },
    cardContainer:{
        alignItems: 'center',
        justifyContent:'center'
    },
    container:{
        
    },
    image:{
        width:"100%",
        height: 225
    },
    screen:{
        backgroundColor:colors.background,
    },
    topcontainer:{
        marginBottom: 5
    },
    map:{
        height: 150,
        width:"100%",

    }
})
export default RestaurantScreen;
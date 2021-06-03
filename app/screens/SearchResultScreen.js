import React from 'react';
import { StyleSheet, View, Image, FlatList} from 'react-native';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import * as firebase from 'firebase';
import { getDatabase, ref, onValue, app, child, on } from "firebase/database";
import config from '../firebaseconfig';
//console.log(firebase.database().get.ref());


function SearchResultScreen({navigation}) {
let listings = [];

firebase.database().ref("/restaurants").on("value", (snap) => {
    console.log(snap.val());
    listings = snap.val();
  });
    return (
        <Screen>
            <View style={styles.container}>                
                <FlatList
                    data={listings}
                    ItemSeparatorComponent={ListItemSeparator}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({item}) =>
                <ListItem
                    image={item.image}
                    title={item.title}
                    subTitle={item.subTitle}
                    onPress={() => navigation.navigate("Restaurant", item)}
                    selectable
                />
                }
                />
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        paddingTop:0
    },
    icon:{
        position:"absolute",
        top: 40,
        left: 30
    }
})
export default SearchResultScreen;
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchResultScreen from '../screens/SearchResultScreen';
import SearchScreen from '../screens/SeachScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import AppText from '../components/Text';
import colors from '../config/colors';
import Icon from '../components/Icon';
import AppButton from '../components/Button';

const Stack = createStackNavigator();

const AppNavigator = () =>(
    <Stack.Navigator>   
        <Stack.Screen 
            name="Search" 
            component={SearchScreen}           
            options={({navigation}) => ({
                headerTitle: <AppText style={{color: colors.white}}>Search</AppText>,
                headerTitleStyle:{
                    alignSelf: 'center',
                    fontWeight: 'bold'
                },
                headerStyle:{
                    backgroundColor: colors.secondary
                },
                headerRight: () =>
                (
                    <AppButton 
                        title="Continue"
                        onPress={() => navigation.navigate("SearchResult")}
                    />
                ),
                
                })} />
        <Stack.Screen 
            name="SearchResult" 
            component={SearchResultScreen}           
            options={{
                headerTitle: <AppText style={{color: colors.white}}>Result</AppText>,
                headerTitleStyle:{
                    alignSelf: 'center',
                    fontWeight: 'bold'
                },
                headerStyle:{
                    backgroundColor: colors.secondary
                }
                }} />
        <Stack.Screen 
            name="Restaurant" 
            component={RestaurantScreen}
            options={{
                headerTitle: <AppText style={{color: colors.white}}></AppText>,
                headerTitleStyle:{
                    alignSelf: 'center',
                    fontWeight: 'bold'
                },
                headerStyle:{
                    backgroundColor: colors.secondary
                }
                }}
             />
    </Stack.Navigator>
)
export default AppNavigator;
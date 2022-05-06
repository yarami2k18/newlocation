import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS } from '../constants';

import PlaceList from '../screens/place-list';
import PlaceDetail from '../screens/place-detail';
import NewPlace from '../screens/new-place';
import Map from '../screens/map';

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator
        initialRouteName='place'
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? COLORS.primaryColor : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'White' : COLORS.primaryColor,
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}>
            <MainStack.Screen name='Place' component={PlaceList} options={{ title: 'Place'}} />
            <MainStack.Screen name='PlaceDetail' component={PlaceDetail} options={{ title: 'Place Detail'}}  />
            <MainStack.Screen name='NewPlace' component={NewPlace} options={{ title: 'New Place'}}  />
            <MainStack.Screen name='Map' component={Map} options={{ title: 'Map'}}  />
         </MainStack.Navigator>
    )
}

export default MainStackNavigator;
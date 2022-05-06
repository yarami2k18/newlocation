import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStackNavigator from './main-navigator';

export default () => (
    <NavigationContainer>
        <MainStackNavigator />
    </NavigationContainer>
)
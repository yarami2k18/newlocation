import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import MainNavigator from './navigation/index';
import store from './store/action';
const App = () => {
 
  return (
 <Provider store={store}>
    <MainNavigator />
   </Provider>
            
  );
};


export default App;

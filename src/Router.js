import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';


import Tabbar from './components/Tabbar';



function Router(){
  return(
    <NavigationContainer>
      <Tabbar/>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  
});

export default Router;

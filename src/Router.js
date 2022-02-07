import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';



import Products from './pages/Products'; 
import Detail from './pages/Detail';


const Stack = createNativeStackNavigator();

function Router(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsPage" component={Products}/>
        <Stack.Screen name="DetailPage" component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  
});

export default Router;

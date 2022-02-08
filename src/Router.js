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
        <Stack.Screen 
          name="ProductsPage" 
          component={Products} 
          options={{
            title:'MAĞAZA',
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#660099',borderRadius:10,},
            headerTitleStyle: {color: '#99ff66',fontWeight:'800'},
          }} 
        />
        <Stack.Screen 
          name="DetailPage" 
          component={Detail}
          options={{
            title:'DETAY',
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#660099'},
            headerTitleStyle: {color: '#99ff66',fontWeight:'800'},
            headerTintColor: 'white',
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  
});

export default Router;

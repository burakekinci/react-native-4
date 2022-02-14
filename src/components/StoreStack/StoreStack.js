import React from 'react';


import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Products from '../../pages/Products'; 
import Detail from '../../pages/Detail';

const Stack = createNativeStackNavigator()

function Store(){
    return(
        <Stack.Navigator screenOptions={{
            headerTitleAlign:'center',
            headerStyle: {backgroundColor: '#660099',},
            headerTitleStyle: {color: '#99ff66', fontFamily:'CinzelDecorative-Bold', fontSize:31},
            headerTintColor:'white',
            }}>
            <Stack.Screen 
                name="ProductsPage" 
                component={Products} 
                options={{
                    title:'STORE',
                }} 
            />
            <Stack.Screen 
                name="DetailPage" 
                component={Detail}
                options={{
                    title:'DETAIL',
                }} 
            />
        </Stack.Navigator>
    )
}

export default Store;
import React from 'react';


import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Products from '../../pages/Products'; 
import Detail from '../../pages/Detail';

const Stack = createNativeStackNavigator()

function Store(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="ProductsPage" 
                component={Products} 
                options={{
                    title:'STORE',
                    headerTitleAlign:'center',
                    headerStyle: {backgroundColor: '#660099',borderRadius:10,},
                    headerTitleStyle: {color: '#99ff66',fontWeight:'800'},
                }} 
            />
            <Stack.Screen 
                name="DetailPage" 
                component={Detail}
                options={{
                    title:'DETAIL',
                    headerTitleAlign:'center',
                    headerStyle: {backgroundColor: '#660099'},
                    headerTitleStyle: {color: '#99ff66',fontWeight:'800'},
                    headerTintColor: 'white',
                }} 
            />
        </Stack.Navigator>
    )
}

export default Store;
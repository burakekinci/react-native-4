import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Profile from '../../pages/Profile';
import WalletPage from '../../pages/WalletPage';
import CouponsPage from '../../pages/CouponsPage';

const Stack = createNativeStackNavigator();


function ProfileStack(){
    return(
        <Stack.Navigator 
            screenOptions={{
                headerTitleAlign:'center',
                headerStyle: {backgroundColor: '#660099',},
                headerTitleStyle: {color: '#99ff66', fontFamily:'CinzelDecorative-Bold', fontSize:31},
                headerTintColor:'white',
            }}>

            <Stack.Screen
                name='ProfilePage'
                component={Profile}
                options={{headerShown : false}}
            />

            <Stack.Screen 
                name='WalletPage'
                component={WalletPage}
                options={{title: "My Wallet"}}
            />

            <Stack.Screen 
                name='CouponsPage'
                component={CouponsPage}
                options={{title: "My Coupons"}}
            />
        </Stack.Navigator>
    );
}


export default ProfileStack;






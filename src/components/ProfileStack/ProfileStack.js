import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Profile from '../../pages/Profile';
import WalletPage from '../../pages/WalletPage';
import CouponsPage from '../../pages/CouponsPage';
import Settings from '../../pages/Settings';
import Help from '../../pages/Help';
import Orders from '../../pages/Orders';


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

            <Stack.Screen 
                name='SettingsPage'
                component={Settings}
                options={{title: "Settings"}}
            />
            
            <Stack.Screen 
                name='HelpPage'
                component={Help}
                options={{title: "Help"}}
            />

            
            <Stack.Screen 
                name='OrdersPage'
                component={Orders}
                options={{title: "My Orders"}}
            />
        </Stack.Navigator>
    );
}


export default ProfileStack;






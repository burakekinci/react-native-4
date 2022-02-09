import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import StoreStack from '../StoreStack';
import Profile from '../../pages/Profile';



const Tab = createBottomTabNavigator();

function Tabbar(){
    return(
        <Tab.Navigator 
        screenOptions={({route}) => (
            {
                headerShown: false,
                tabBarStyle:{backgroundColor:'#fffff0',paddingVertical:5,height:60,borderTopLeftRadius:20,borderTopRightRadius:20,position:'absolute'},
                tabBarLabelStyle:{fontSize:16, },
                tabBarIcon:({color,size})=> {
                    let iconName;
                    if(route.name == 'Store'){iconName='pricetags';}
                    else if(route.name == 'Profile'){iconName='person';}

                    return <Ionicon name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor:'#ffff00',
                tabBarInactiveTintColor:'#8000bf',
                tabBarActiveBackgroundColor:'#8000bf',
                tabBarItemStyle:{
                    marginBottom:5, marginHorizontal:10, paddingTop:3, 
                    borderTopLeftRadius:50, borderTopRightRadius:50,borderBottomLeftRadius:50,borderBottomRightRadius:50,
                }
            })}  
        >
            <Tab.Screen name='Store' component={StoreStack} />
            <Tab.Screen name='Profile' component={Profile}/>
        </Tab.Navigator>
    )
}

export default Tabbar;
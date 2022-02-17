import React from 'react'
import styles from './IconCard.style';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { View,Text } from 'react-native';


const IconCard = ({icon})=>{

    function iconListElement(name) {
        let iconName;
        if(name==='wallet'){iconName='wallet-outline';}
        else if(name==='coupons'){iconName='pricetags-outline';}
        else if(name==='assistant'){iconName='happy-outline';}
        else if(name==='gift'){iconName='gift-outline';}
        return iconName;
    }

    return(
        <View style={styles.container}>
            <Ionicon name={iconListElement(icon.key)} size={22} color={'#260f63'}/>
            <Text style={styles.title}>{icon.key}</Text>    
         </View>
    );



}


export default IconCard;
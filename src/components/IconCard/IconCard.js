import React from 'react'
import styles from './IconCard.style';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { View,Text } from 'react-native';


const IconCard = ({icon ,  nav})=>{

    
    return(
        <View style={styles.container}>
            <Ionicon name={icon.iconName} size={22} color={'#260f63'} onPress={()=> nav.navigate(icon.route)} />
            <Text style={styles.title}>{icon.key}</Text>    
        </View>
    );



}


export default IconCard;
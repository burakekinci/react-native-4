import React from 'react'
import { View,Text,  TouchableNativeFeedback } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import styles from './OptionCard.style';

const OptionCard = ({options, nav}) => {

    return(
        <TouchableNativeFeedback onPress={()=> nav.navigate(options.route)}>
            <View style={styles.container}>
                <Text></Text>
                <Text style={styles.title}> {options.key} </Text>
                <Ionicon style={styles.icon} name={options.iconName} size={25} color={'#260f63'} />
            </View>
        </TouchableNativeFeedback>
    );

}

export default OptionCard;
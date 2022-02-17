import React from 'react'
import { View,Text } from 'react-native';
import styles from './OptionCard.style';

const OptionCard = ({options}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {options.key}
            </Text>
        </View>
    );

}

export default OptionCard;
import React from 'react'
import { View,Text,  TouchableNativeFeedback } from 'react-native';
import styles from './OptionCard.style';

const OptionCard = ({options, nav, navigationScreenName}) => {

    return(
        <TouchableNativeFeedback onPress={()=> nav.navigate(navigationScreenName)}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    {options.key}
                </Text>
            </View>
        </TouchableNativeFeedback>
    );

}

export default OptionCard;
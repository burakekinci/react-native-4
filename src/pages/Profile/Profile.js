import React from 'react';
import { Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicon from 'react-native-vector-icons/Ionicons';
import styles from './Profile.style';
import LinearGradient from 'react-native-linear-gradient';


function Profile(){
    return(
        <SafeAreaView style={{padding:8,flex:1,backgroundColor:'#fff5ee'}}>
            <View style={styles.container}>
                <View style={styles.upper_container}>
                    <LinearGradient 
                        start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                        colors={['#c44fff','#8000bf']} 
                        style={styles.upper_inner_container}
                    >
                        <View style={styles.person}>
                            <Image style={styles.image} source={{uri:'https://avatars.githubusercontent.com/u/53627195?v=4'}} />
                            <View style={styles.person_texts}>
                                <Text style={styles.name}>Burak Ekinci</Text>
                                <Text style={styles.appelation}>Customer</Text> 
                            </View>
                            <View style={styles.icon_container}>
                                <Ionicon  name={'create-outline'}  size={30} color={'black'}/>
                                <Text></Text>    
                            </View>   
                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.lower_container}>
                    <View style={styles.lower_inner_container}>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Profile;
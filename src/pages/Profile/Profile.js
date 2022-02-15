import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Profile.style';
import Ionicon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import IconCard from '../../components/IconCard/IconCard';
import OptionCard from '../../components/OptionCard/OptionCard';


function Profile(){

    function iconListElement(name) {
        let iconName;
        if(name==='wallet'){iconName='wallet-outline';}
        if(name==='cupons'){iconName='pricetags-outline';}
        if(name==='assistant'){iconName='happy-outline';}
        if(name==='gift'){iconName='gift-outline';}
        return iconName;
    }

    const renderIcon = ({item}) => <IconCard icon={item}  />
    const renderOption = ({item}) => <OptionCard options={item} />

    return(
        <SafeAreaView style={{padding:8,flex:1,backgroundColor:'#fff5ee'}}>
            <View style={styles.container}>
                <View style={styles.upper_container}>
                    <LinearGradient 
                        start={{x: 0.8, y: 0.25}} end={{x: 0.15, y: 0.9}}
                        colors={['#c651ff','#9c25d5','#7200ab']} 
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

                        <View style={styles.icon_list_container}>
                            <FlatList 
                                horizontal
                                data={[
                                    {key:'wallet'},
                                    {key:'coupons'},
                                    {key:'assistant'},
                                    {key:'gift'}
                                ]}
                                renderItem={renderIcon}
                                contentContainerStyle={styles.icon_list}
                            />
                        </View>
                        

                        

                    </LinearGradient>
                </View>
                <View style={styles.lower_container}>
                    <LinearGradient 
                        start={{x: 0, y: 0.9}} end={{x: 0.85, y: 0.1}}
                        colors={['#fcfcfc','#e8ebff']} 
                        style={styles.lower_inner_container}
                    >
                    
                    <View style={styles.options_list_container}>
                        <FlatList
                            data={[
                                {key:'settings'},
                                {key:'help'},
                                {key:'orders'}
                            ]}
                            renderItem={renderOption}
                            
                        />
                    </View>

                    </LinearGradient>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Profile;
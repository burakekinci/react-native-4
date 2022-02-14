import React from 'react';
import { SafeAreaView,Text, Image, View, ScrollView } from 'react-native';
import useFetch from '../../hooks/useFetch';
import styles from './Detail.style';

import Loading from '../../components/Loading';
import ErrorAnim from '../../components/ErrorAnim';

function Detail({route}){
    const {id} = route.params;
    const {loading,error,data} = useFetch(`https://fakestoreapi.com/products/${id}`);



    if(loading){
        return(<Loading/>);
    }

    if(error){
        return(<ErrorAnim/>);
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.image_container}>
                    <Image source={{uri:data.image}}style={styles.image}/>
                </View>
                <View style={styles.body_container}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.desc}>{data.description}</Text>
                    <View style={styles.price_container}>
                        <View style={styles.price_mask}>
                            <Text style={styles.price}>{data.price} TL</Text>
                        </View>
                        <View style={styles.add_mask}>
                            <Text style={styles.add}>ADD</Text>
                        </View>                                        
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default Detail;
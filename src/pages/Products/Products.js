import React, {useState, useEffect} from 'react';
import { FlatList, SafeAreaView,Text, ActivityIndicator } from 'react-native';
import Config from 'react-native-config';
import axios  from 'axios';
import styles from './Products.style';


import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import ErrorAnim from '../../components/ErrorAnim';

function Products(){

    const {loading,error,data} = useFetch("https://fakestoreapi.com/products");


    const renderProduct = ({item}) => <ProductCard product={item} />;
    

    if(loading){
        return(<Loading/>);
    }

    if(error){
        return(<ErrorAnim/>);
    }

    return(
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={data} 
                renderItem={renderProduct}
                numColumns={2}
                contentContainerStyle={{flexGrow:1,}}
            />
        </SafeAreaView>
    )
}


export default Products;
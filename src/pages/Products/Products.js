import React, {useState, useEffect} from 'react';
import { FlatList, SafeAreaView,Text } from 'react-native';
import Config from 'react-native-config';
import axios  from 'axios';

import ProductCard from '../../components/ProductCard';


function Products(){

    const [data,setData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const {data: productData} = await axios.get(Config.API_URL);
        setData(productData);
    };


    const renderProduct = ({item}) => <ProductCard product={item} />;
    
    return(
        <SafeAreaView>
            <FlatList data={null} renderItem={renderProduct}/>
        </SafeAreaView>
    )
}


export default Products;
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
    return(
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={null}
            />
            <View style={styles.body_container}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price} TL</Text>
            </View>
        </View>
    );
}

export default ProductCard;
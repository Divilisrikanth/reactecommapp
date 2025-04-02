import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../screens/ProductDetails';

type CartPageRouteProp = RouteProp<RootStackParamList, 'CartPage'>;

interface CartPageProps {
    route: CartPageRouteProp;
}
const  product ={
    sku: "B08X72GY5Q",
    title: "LG 240 L 3 Star Smart Inverter Frost-Free Double Door Refrigerator (GL-I292RPZX, Shiny Steel, Door Cooling",
    price: "25,990",
}

const CartPageComponent: React.FC<CartPageProps> = ({route }) => {
   const { sku, title, price,image, product } = route.params || {};
   console.log("inside cart page",product)
    // const product = {
    //     sku: "B08X72GY5Q",
    //     title: "LG 240 L 3 Star Smart Inverter Frost-Free Double Door Refrigerator (GL-I292RPZX, Shiny Steel, Door Cooling",
    //     price: "25,990",
    // }
    
    if (!product) {
        return (
            <View style={styles.container}>
                <Text>Product data is not available.</Text>
            </View>
        );
    }else{
        return (
            <View style={styles.container}>
                {product.productImages && product.productImages.length > 0 ? (
                         <Image
                           source={{ uri: product.productImages[0].replace(/\n/g, '') }} // Get the first image URL and clean up any newlines
                           style={styles.productimg}
                           alt="product image"
                           />
                            ) : (
                           <Text>No image available</Text> // Fallback if no images are available
                          )}
                {/*<Image source={require('../../assets/images/product1.jpg')} style={styles.productimg} />*/}
                <Text style={styles.titletext}>SKU: {product.sku}</Text>
                <Text style={styles.titletext}>Title: {product.title}</Text>
                <Text style={styles.titletext}>Price: {product.Sale_price}</Text>
  
                {/* Add more details as needed */}
            </View>
        );
    }

    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    productimg: {
        width: 158,
        height: 510,
        marginLeft:80,
        marginRight:30
    },
    titletext: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10,
    },
});

export default CartPageComponent;

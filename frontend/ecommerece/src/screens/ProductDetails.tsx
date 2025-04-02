 import { View, Text,Image,Button,StyleSheet } from 'react-native';
 import { ScrollView } from 'react-native-gesture-handler';
 import {Rating} from 'react-native-elements'
 import React, { useContext, useEffect } from 'react'
 import { useNavigation,NavigationProp } from '@react-navigation/native';
 import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import { router } from 'expo-router';
import  { CartContext } from '../screens/CartContext';
//import useCart from '../../hooks/useCart';
import useCartHook from '../../hooks/useCart';
import { red } from 'react-native-reanimated/lib/typescript/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
 export type RootStackParamList={
    ProductDetails:{product:any};
    CartPage:{sku:string; title:string; price:string; image:string ;product:any};
  
  };

 type ProductDetailsNavigationProp = StackNavigationProp<RootStackParamList, 'CartPage'>;
 const ProductDetails:React.FC<{product:any}>=({product})=> {
   const navigation = useNavigation<ProductDetailsNavigationProp>();
   const { addItemtoCart } = useCartHook();
   
    const handleAddtoCart=() =>{
     const newCartItem = {
       sku: product.sku,
       title: product.title,
       price: product.Sale_price,
       image :product.productImages,
       product,
     };
     navigation.navigate('CartPage', {...newCartItem}); // Ensure correct parameters are passed
      console.log("inside product details usestate", newCartItem)
      console.log("productimage",product.productImages)
   }
     
  
  // console.log("inside product details usestate", newCartItem)
   return (
   <SafeAreaView>
    <ScrollView>
     <View>
        {product.productImages && product.productImages.length > 0 ? (
         <Image
           source={{ uri: product.productImages[0].replace(/\n/g, '') }} // Get the first image URL and clean up any newlines
           style={styles.productimg}
           alt="product image"
           />
            ) : (
           <Text>No image available</Text> // Fallback if no images are available
          )}
       {/*<Image source ={require('../../assets/images/product1.jpg')} style={styles.productimg}/>*/}
       <Text style={styles.brandtext}>Brand:{product.Brand ?? 'N/A'}</Text>
        {product.Reviews !== undefined && (
         <>
           <Text style={styles.ratingText}>{` ${product.Reviews}/5`}</Text> 
          <Rating imageSize={9} readonly startingValue={product.Reviews} style={styles.rating} />
           <Text style={styles.totalreviewstext}>{product.TotalReviews}</Text> 
           </> 
        )}
       <Text style={styles.titletext}>{product.title}</Text> 
       <Text style={styles.colortext}>{product.color}</Text>
       <Text style={styles.variantinfotext}>{product.variants[0]}</Text>
       <Text style={styles.variantinfotext}>{product.variants}</Text>   
       <Text style={styles.currencytext}>{product.currency}</Text>      
       <Text style={styles.saleprice}>{product.Sale_price}</Text>
       <Text style={styles.discounttext}>{product.discount}</Text>
       <Text style={styles.originaltext}>{product.Original_price}</Text>
        <Button title='Add to Cart' onPress={handleAddtoCart}/>
         <View style={styles.offers}>
            <Text style ={styles.offersanddiscounttext}>All offers & Discount</Text>
         </View>
       <Text>Exchange your old phone</Text>
      <Text>Save upto 22000</Text>
       <Text style={styles.titletext}>{product.productiD}</Text>
       <Text style={styles.titletext}>{product.Size}</Text>
       <Text style={styles.titletext}>{product.Netweight}</Text>
       <Text style={styles.titletext}>{product.sku}</Text>
     
      <Text>Specifications</Text>
     </View>
   </ScrollView>
   </SafeAreaView>
    
   )
 }
 const styles = StyleSheet.create({
   productimg:{
     marginTop:15,
     marginBottom:10,
     marginLeft:50,
     width:150,
     height:310
   },
   titletext:{
    fontWeight:'condensedBold',
    fontSize:11
   },
   brandtext:{
     fontWeight:'bold',
     fontSize:11,
     marginTop:10,
     marginBottom:-15
    
   },
   ratingText: 
   { fontSize: 9, 
     fontWeight: 'bold', 
     marginTop:5,
     marginBottom: -20,
     marginLeft:280
    
   },
    rating: 
    { 
     paddingVertical: 10,
     marginLeft:250
    },
    totalreviewstext:{
     marginLeft:360,
     marginTop:-25
    },
    discounttext:{
     fontSize:35,
     marginTop:-48
    },
    saleprice:{
     marginTop:1,
     marginLeft:90,
     fontSize:35
    },
    originaltext:{
     fontWeight:'condensedBold',
     fontSize:15

    },
    currencytext:{
     fontSize:18,
     marginLeft:80,
     marginBottom:-35
    },
    variantinfotext:{
    marginTop:5,
    marginBottom:5,
     fontSize:15

    },
    colortext:{
     marginTop:5,
     marginBottom:5
    },
    offersanddiscounttext:{
     
      marginTop:1,
      paddingTop:-18,
      paddingBottom:45,
      marginBottom:10,
      fontSize:18,
      fontWeight:'bold'

    },
    offers:{
      flex: 0.3,
      backgroundColor:'#ffff66',
      borderWidth: 0.2,
      
    }
  
 })
 export default ProductDetails ;


function useCart(): { addItemtoCart: any; } {
  throw new Error('Function not implemented.');
}


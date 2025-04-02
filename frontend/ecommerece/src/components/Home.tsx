 import { View, Text,TextInput,StyleSheet, SafeAreaView,Image,Button } from 'react-native'
 import React from 'react'
 import { TouchableOpacity } from 'react-native';
 import { useState } from 'react'
 import { ScrollView} from 'react-native-gesture-handler'
 import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
 import { faSearch } from '@fortawesome/free-solid-svg-icons';
 import { IconProp } from '@fortawesome/fontawesome-svg-core';
 import  ImageScroll from '../screens/ImageScroll';
 import Cardssection from '../screens/cardssection';
 import axios from "axios";

 import ProductDetails from '../screens/ProductDetails';

 const Home : React.FC = () => {
     const [searQuery, setSearchQuery]= useState<string>('');
     const [products,setProducts]=useState<any[]>([]);
     const [isSearchViewVisible,setSearchViewVisible]=useState(false);
     const [isProductViewVisible,setProductViewVisible]=useState(false);
     const [selectedProduct, setSelectedProduct] = useState<any>(null);
     const [errorMessage, setErrorMessage] = useState<string>('');
   const toggleSearchview =() =>{
     setSearchViewVisible(!isSearchViewVisible)
   }
   const toggleProductView =() =>{
     setProductViewVisible(!isProductViewVisible)
   }
    const handleOnSubmit = async() =>{
      if(!searQuery){
        setErrorMessage('Search products or brand names')
        return;
      }
      setErrorMessage('')
   
     try{
      //const res = await axios.get("http://localhost:5000/products/searchTerm",{
        //// data:searQuery,
        //const res = await axios.get("http://192.168.1.6:5000/products/searchTerm", {
        const res = await axios.get("http://localhost:5000/products/searchTerm", {
          params: { data: searQuery }
         
      });
      setProducts(res.data)
    
       console.log("userinput keyword is:",searQuery)
       console.log("after fetching data :",res)
        toggleSearchview();
        console.log("inside home.tsx",setProducts)
        const statusCode = res.status;
        console.log(statusCode);
      if (statusCode == 404){
        //const message=([`No products are available for${searQuery}`])
        setErrorMessage(`No products are available for${searQuery}`)
        setSearchViewVisible(true);
        return;
       
      }
     }catch(error){
        console.log(error)
     }
    }
    
    const handleSearch = async ()=>{
      await handleOnSubmit();
      toggleSearchview();
    }
   const productPage = async(sku:any) =>{
     console.log('SKU:',sku)
     if(!sku){
       console.log("sku is undefined")
         return;  
     }
     try{
       //const res = await axios.get(`http://192.168.1.6:5000/product/${sku}`)
      const res = await axios.get(`http://localhost:5000/product/${sku}`)
       // params:[sku]
     
      console.log(res.data)
      setSelectedProduct(res.data)
        setProductViewVisible(true);
        setSearchViewVisible(false);
        
     
     }
     catch(error){
        console.log(error)
     }

   }
  
   return (
     <SafeAreaView style={styles.container} >
      <ScrollView contentContainerStyle={styles.scrollview}>
       <View style={styles.SearchContainer}>
          <TextInput style={styles.inputtext} value={searQuery}onChangeText={setSearchQuery} placeholder="Search for products brands and more" />
         
          <TouchableOpacity
               style={styles.searchbar}
               onPress={handleSearch}
             >
           <FontAwesomeIcon icon={faSearch as IconProp}
              size={24}
               style={styles.searchbutton}

           />
             </TouchableOpacity>
            
          </View>
           {errorMessage ? (
                    <Text style={styles.errorText}>{errorMessage}</Text>
                ) : null}

            {isSearchViewVisible &&  (
          
             <View style={styles.searchview}>
              
               {products.length?products.map((product,index)=>(
              <TouchableOpacity key={index} onPress={()=>productPage(product.sku)}>
               <View>
                <Text style={styles.toogleTitletext}key={index}>{product.title}</Text>
               {/* {product.productImages ? ( <Image source={{uri: product.productImages}} style={styles.cardImages}alt="product image"/>):(<Text>No image available</Text>)}*/}
                {/* {product.productImages.map((url:any, index:any) => {
                    if (url.includes('http')) {
                    return <Image key={index} source={{ uri: url }} style={styles.cardImages} />;
                       } else {
                          return <Text key={index}>Invalid Image URL</Text>;
                       }
                       })} */}
                     {product.productImages && product.productImages.length > 0 ? (
                        <Image
                          source={{ uri: product.productImages[0].replace(/\n/g, '') }} // Get the first image URL and clean up any newlines
                            style={styles.listimages}
                             alt="product image"
                            />
                          ) : (
                             <Text>No image available</Text> // Fallback if no images are available
                              )}



                <Text style={styles.toogleTitletext}>{product.Reviews}</Text>
                <Text style={styles.toogletext}>{product.TotalReviews}</Text>
                <Text style={styles.toogletext}>{product.Original_price}</Text>
                <Text style={styles.toogletext}>{product.Sale_price}</Text>
                <Text style={styles.toogletext}>{product.discount}</Text>
                <Text style={styles.toogletext}>{product.sku}</Text>
               </View>
               </TouchableOpacity>
               )) : (
                   <Text>"No products found for "{searQuery}"</Text>
               )}
             </View>
          )}
         
           {!isSearchViewVisible && !isProductViewVisible &&(
          <>
          <View>
            <ImageScroll/>  
          </View>
          <View>
             <View style={styles.Cards}>
               <Image source={require('../../assets/images/scroll5.jpg')}style={styles.cardImages}/>
               <Image source={require('../../assets/images/scroll6.jpg')}style={styles.cardImages}/>
               <Image source={require('../../assets/images/scroll7.jpg')}style={styles.cardImages}/>
            </View>
          </View>
          <View>
             <Text style={styles.heading}>
                Up to 60% off | Unique products from stores nea…
             </Text>
           <Image source={require('../../assets/images/scroll8.jpg')} style={styles.imageContainer}/>
            <Text style={styles.titleText}>Divine Trends Diamond Cut Glass LED, Incandescant, CFL, Smart Bulbs Table Lamp…</Text>
            <Text style={styles.priceText}>₹3,850.00 </Text><Text style={styles.currencyText}> M.R.P:</Text><Text style={styles.pricediscount}>₹5,500.00</Text>
         </View>
         <View style={styles.multiplecardContainers}>
           <View>
           <Cardssection/>
         
           </View>
         </View>
         </>
          )}
         
          {isProductViewVisible && selectedProduct && <ProductDetails product={selectedProduct} />}
        
     </ScrollView>
     </SafeAreaView>
   );
  
 };
 const styles= StyleSheet.create({
    container: {
  
     flexGrow:1
   },
   SearchContainer:{
     flex:1,
     justifyContent:"center",
     alignItems:"center",
     marginTop:50,
     marginLeft:-50,
  
   },
   multiplecardContainers:{
     padding:15
   },
  
   imageContainer:{
     marginLeft:'auto',
     marginRight:'auto',
     marginTop:5,
     marginBottom:5
   },
   scrollview:{
     flexGrow:1,
     paddingBottom:20
   },
   heading:{
      marginLeft:18,
     fontWeight:'bold',
     fontSize:25
   },
   titleText:{
     marginLeft:15,
     fontWeight:'condensed',
     fontSize:18,
     marginTop:5,
     marginBottom:5,
     fontFamily:'sanserfif'
   },
   priceText:{
     fontFamily:'sanserif',
     fontWeight:'bold',
     marginTop:5,
     fontSize:18,
     marginLeft:15
   },
   currencyText:{
    marginLeft:105,
     marginTop:-20,
     fontSize:15,
     fontWeight:'bold'
   },
   pricediscount:{
     textDecorationLine:'line-through',
     marginLeft:165,
     marginTop:-20
   },
     inputtext:{
      width:300,
      height:50,
      backgroundColor:"azure",
     },
     searchbar:{
       marginTop:-73,
       marginLeft:375,
       padding:18,
     },
     Downcontainer:{
       marginTop:455,
       width:"auto",
       height:50,
       backgroundColor:"yellow"
     },
     Cards:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around'

     },
     cardImages:{
       width:900,
       height:100
     },
     searchbutton:{
  
       padding:15
     },  
     searchview:{
       width:900,
       height:500,
       marginLeft:15,
       marginTop:25,

       marginRight:15
     },
     toogletext:{
       fontWeight:'bold',
       fontSize:15,
       fontFamily:'sanserfif',
       marginLeft:150,
       marginTop:-20,
       marginBottom:30

     
     },
     toogleTitletext:{
       fontWeight:'bold',
       fontSize:15,
       marginLeft:150,
       marginTop:-10,
       marginBottom:-38
      
     },
     errorText:{
      color:'red',
      fontSize:16,
      margin:10
     },
     listimages:{
      width:100,
      height:180
     }
 })

 export default Home


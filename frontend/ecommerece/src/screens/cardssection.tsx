import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

const Cardssection = () => {
  return (
    <View style={styles.multipleCards}>
      <Text>Appliances for your home | Up to 55% off</Text>
      <View style={styles.cardContainer}>
         <Image source={require('../../assets/images/scroll9.jpg')} style={styles.multipleImages}/>
  
         <Text style={styles.textContainerOne}>Air conditioners</Text>
         
      <Image source={require('../../assets/images/scroll10.jpg')} style={styles.multipleImages}/>
      <Text style={styles.textContainerOne}>Refrigerators</Text>
      </View>
       <View style={styles.cardContainertwo}>
      <Image source={require('../../assets/images/scroll11.jpg')} style={styles.multipleImages}/>
      <Text style={styles.textContainerTwo}>Microwaves</Text>
      <Image source={require('../../assets/images/scroll12.jpg')} style={styles.multipleImages}/>
      <Text style={styles.textContainerTwo}>washing Machine</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({

  multipleCards:{
   
    backgroundColor:'azure',
    paddingLeft:25,
    paddingBottom:15
  },
    cardContainer:{
    display:'flex',
    flexDirection:'row',
    marginTop:18,
  },
  cardContainertwo:{
   display:"flex",
   flexDirection:'row',
   marginTop:5,
   
  },
  multipleImages:{
   marginRight:25,
    width:150,
    height:110,
    paddingLeft:2,
    paddingRight:10

  },
  textContainerOne:{
    display:'flex',
    flexDirection:'row',
    marginRight:60,
    marginTop:110,
    marginLeft:-170,
    fontWeight:'condensedBold',
    fontSize:16
    

  },
    textContainerTwo:{
    display:'flex',
    flexDirection:'row',
    marginRight:60,
    marginTop:110,
    marginLeft:-150,
    fontWeight:'condensedBold',
    fontSize:16

  }
})

export default Cardssection
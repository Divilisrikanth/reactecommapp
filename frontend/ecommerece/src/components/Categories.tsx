import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Categories = () => {
  return (
    <View style={style.Container}>
      <ScrollView style={{ flex: 1 }}>
      <View style={style.ItemContainer}>
      <Image source={ require('../../assets/images/scroll13.jpg')} style={style.images}/>
      <Text >Grocery</Text>
      </View>
      <View style={style.ItemContainer}>
      <Image source={ require('../../assets/images/scroll14.jpg')} style={style.images}/>
      <Text>Vegetables</Text>
      </View>
      <View style={style.ItemContainer}>
      <Image source={ require('../../assets/images/scroll15.jpg')} style={style.images}/>
      <Text>Toys Baby Products Kids Fashion</Text>
      </View>
      <View style={style.ItemContainer}>
      <Image source={ require('../../assets/images/scroll16.jpg')} style={style.images}/>
      <Text>Mobiles, Computers</Text>
      </View>
      <View style={style.ItemContainer}>
      <Image source={ require('../../assets/images/scroll17.jpg')}style={style.images}/>
      <Text>Tv, Appliances,Electronics</Text>
      </View>
      <View style={style.ItemContainer}>
      <Image source={ require('../../assets/images/scroll18.jpg')}style={style.images}/>
      <Text>Mens Fashions</Text>
      </View>
      <View style={style.ItemContainer}>
      <Image source={ require('../../assets/images/scroll19.jpg')}style={style.images}/>
      <Text>Womens Fashion</Text>
      </View>
       </ScrollView>
      </View>
     
  )
}

const style = StyleSheet.create({
  Container:{
   flex:1

  },
  images:{
    width:100,
    height:100
  },
  ItemContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginRight:15
  }
})
export default Categories
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useRouter} from "expo-router"
import Home from '../components/Home';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Cardssection from '../screens/cardssection';
import Categories from '../components/Categories';
import CartPageComponent from '../components/CartPageComponent';
import { RootStackParamList } from '../screens/ProductDetails';


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

//components for drawer navigator , tab navigator inside functions component call was made by importing 
//the component using export and import syntax that was shown in line no .7 call declaring the component name inside the self closing 
//brackets </>(its is similar to fragments in react js) is a component that would return some JSX to represent a part of the user interface for your app.
type CartPageRouteProp = RouteProp<RootStackParamList, 'CartPage'>;

interface CartProps {
  route: any;
}
function HomeScreen() {
  return (
    <View>
    
      <Home/>
      
    </View>
  );

}
function AllcategoriesScreen(){
    return(
        <View style={styles.componentstyling}>
        <Categories/>
        </View>
    )
    
}
function Myorders() {
  return(
    <View style={styles.componentstyling}>
        <Cardssection/>
    </View>
  )
}


function CartPage({route}:CartProps){
    return(
        <View style={styles.componentstyling}>
              
              <CartPageComponent route={route}/>
          
        </View>
    )
}
function MyWishList(){
    return(
        <View style={styles.componentstyling}>
            MyWishList
        </View>
    )
}
function Notifications (){
  return(
    <View style={styles.componentstyling}>
        <Text>Notifications</Text>
    </View>
  )
}
// Tab Navigator component
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Shopping cart"  component={HomeScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={15} color={color} />
          ),
        }}/>
      <Tab.Screen name="CartPage" component={CartPage} options={{
        tabBarIcon:({color,size})=>(
          <AntDesign name="shoppingcart" size={24} color="#007AFF" />
        )
      }} />
      <Tab.Screen name="Myorders" component={Myorders} options={{
        tabBarIcon:({color,size})=>(
          <FontAwesome5 name="box" size={24} color="#007AFF" />
        )
      }} />
      <Tab.Screen name="Notifications" component={Notifications} options={{
          tabBarIcon:({color,size})=>(
          <FontAwesome5 name="bell" size={24} color="#007AFF" />
        )
      }} />
    </Tab.Navigator>
  );
}
function LogoutScreen() {
      const handleOnLogout = () => {
      const router = useRouter(); 
     router.push('/')
    }
   handleOnLogout()
  return (
    <View>
    
     
    </View>
  );
}
// Drawer Navigator component
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={TabNavigator} />
      {/* You can add more drawer screens here */} 
      <Drawer.Screen name="Profile" component={ProfileScreen}/>
      <Drawer.Screen name="Categories" component={AllcategoriesScreen} />
      <Drawer.Screen name="Mywishlist" component={MyWishList} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}

// Other Screens for Drawer (Profile, Logout)
function ProfileScreen() {
  return (
    <View style={styles.componentstyling}>
      <Text>Profile Screen</Text>
    </View>
  );
}



// Main App component
export default function App() {
  return (
    
      <DrawerNavigator />
    
  );
}

// Styling for the screens
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  mainTextcontainer:{
    marginBottom:150,
  
  },
  textStyling:{
    fontWeight:"bold",
    fontSize:15,
    marginBottom:1
  },
  storesContainer:{
    marginTop:10
  },
  componentstyling:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
}
});

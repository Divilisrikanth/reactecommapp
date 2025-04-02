// **** App component ****
import React from 'react';
import{Text,TouchableOpacity,View} from 'react-native'
import Navigation from './Navigation';
import { router } from 'expo-router';

function App() { 
  
  const handleSubmit =() =>{
    router.push('/Navigation')
  }
    return (
        <View>
         <TouchableOpacity onPress={handleSubmit}><Text>Shopping cart</Text></TouchableOpacity>
        </View>
    ); 
}

export default App;
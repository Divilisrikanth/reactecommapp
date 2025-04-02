import { View, Text, Button, Image,StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';


// react native vector icons directory 
//https://icons.expo.fyi/Index
//from the above link we can select icons whatever we want select icon copy the import statement and component call
//paste it code as stated line no 4 import statement and   line 44 and 47 are component call methods shows how use the icons in your project

const ImageScroll = () => {
  // Array of images
  const images = [
    require('../../assets/images/scroll1.jpg'),
    require('../../assets/images/scroll2.jpg'),
    require('../../assets/images/scroll3.jpg'),
    require('../../assets/images/scroll4.jpg'),
  ];

  // State to track the current image index
  const [currentState, setCurrentState] = useState(0);

  // Handle "Previous" button press
  const handleOnPreviousSubmit = () => {
    setCurrentState((previousIndex) => (previousIndex > 0 ? previousIndex - 1 : images.length - 1));
  };

  // Handle "Next" button press
  const handleOnNextSubmit = () => {
    setCurrentState((previousIndex) => (previousIndex < images.length - 1 ? previousIndex + 1 : 0));
  };

  return (
    <View style={styles.container}>
      {/* Display the current image */}
      <Image source={images[currentState]} style={{ width: 410,height: 200, marginBottom: 10,marginTop:10 }} />
      
      
      
      {/* Buttons to navigate through images */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleOnPreviousSubmit} style={styles.button}>
          <AntDesign name="doubleleft" size={24} color="black" />
        </TouchableOpacity>
          <TouchableOpacity onPress={handleOnNextSubmit} style={styles.button}>
            <AntDesign name="doubleright" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 410,
    height: 200,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white', // Make sure the text color is visible against the background
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 400, // Ensure buttons fit within the image width
    position: 'absolute', // Keep buttons in position even when scrolling
    top: '50%', // Vertically center the buttons
    marginTop: -40, // Adjust so it aligns in the center of the image
  },
  button: {
    backgroundColor: 'transparent', // Make button background transparent
    padding: 8,
    borderRadius: 30,
  },
})
export default ImageScroll;

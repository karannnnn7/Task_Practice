import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('intro');
    }, 2500);
  }, []);


  return (
    <View style={styles.mainContainer}>
      <Image source={require('../assets/SplashScreen.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  }
});

export default SplashScreen;
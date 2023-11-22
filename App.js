import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/helpers/routes';

const App = () => {



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App;
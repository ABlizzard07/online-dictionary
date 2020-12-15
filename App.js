import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import {createAppContainer, createSwitchNavigator}from 'react-navigation';
export default class App extends React.Component{

  render(){
    return(
      <View>
      <AppContainer/>
      </View>
    )
  }
  
}

var AppNavigator = createSwitchNavigator({
  
})

const AppContainer = createAppContainer(AppNavigator)

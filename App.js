/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './screens/User_HomeScreen.js';
import LockerCheckout from './screens/LockerCheckout.js';
import LockerConfiguration from './screens/LockerConfiguration.js';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Stack = createStackNavigator();

const App: () => Node = () => {

return(
    <NavigationContainer>
        <Stack.Navigator screenOptions = {{
            headerStyle :{
                backgroundColor : '#0E2742',
            },
            footerStyle :{
                backgroundColor : '#114F79',
            },
            headerTintColor : '#fff',
            cardStyle : {
                backgroundColor : '#114F79',
            },
            headerTitleStyle: {
                fontWeight : 'bold'
            }
        }}>

            <Stack.Screen name = "User Home Page" component ={HomeScreen}/>
            <Stack.Screen name = "Locker Checkout" component ={LockerCheckout}/>
            <Stack.Screen name = "Locker Configuration" component ={LockerConfiguration}/>
        </Stack.Navigator>
    </NavigationContainer>
)};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

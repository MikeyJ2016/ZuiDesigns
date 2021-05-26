import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen.js';
import Login from'./Login.js';
import CreateUser from './CreateUser.js';
import CreateAdmin from './CreateAdmin.js';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => {
return(
    <RootStack.Navigator headerMode ='none'>
        {/*<RootStack.Screen name = "SplashScreen" component = {SplashScreen}/>*/}
        <RootStack.Screen name = "Login" component = {Login}/>
        <RootStack.Screen name = "Create User" component = {CreateUser}/>
        <RootStack.Screen name = "Create Administrator" component = {CreateAdmin}/>
    </RootStack.Navigator>
);
};


export default RootStackScreen;
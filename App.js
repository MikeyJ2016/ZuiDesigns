/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext } from './Components/context.js';


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
  ActivityIndicator,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { DrawerContent } from './screens/DrawerContent';

import HomeScreen from './screens/User_HomeScreen.js';
import LockerCheckout from './screens/LockerCheckout.js';
import LockerConfiguration from './screens/LockerConfiguration.js';
import Login from './screens/Login.js';
import Settings from './screens/Settings.js';
import RootStackScreen from './screens/RootStackScreen.js'


const HomeStack = createStackNavigator();
const LSStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => {
return(
     <HomeStack.Navigator screenOptions = {{
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
                    fontWeight : 'bold',
                    alignItems : 'center'
                }
            }}>
                <HomeStack.Screen name = "User Home Page" component ={HomeScreen} options = {{
                    headerLeft : () => (

                    <Icon.Button name="ios-menu" size = {25} backgroundColor='#0E2742'
                    onPress = {() => {navigation.openDrawer()}}> </Icon.Button>
                    )
                }}
                />

     </HomeStack.Navigator>
     );
}


const LSStackScreen = ({navigation}) => {
return(
     <LSStack.Navigator screenOptions = {{
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
                    fontWeight : 'bold',
                    alignItems : 'center'
                }
            }}>
                <LSStack.Screen name = "Locker Checkout" component ={LockerCheckout} options = {{
                headerLeft : () => (

                  <Icon.Button name="ios-menu" size = {25} backgroundColor='#0E2742'
                   onPress = {() => {navigation.openDrawer()}}> </Icon.Button>
                 )}}
                 />
     </LSStack.Navigator>
     );
}
const App: () => Node = () => {

const [isLoading,setIsLoading] = React.useState(true);
const[userToken, setUserToken] = React.useState(null);

    const authContext = React.useMemo(() => ({
        signIn: () => {
            setUserToken('fgkj');
            setIsLoading(false);
        },
        signOut: () => {
            setUserToken(null);
            setIsLoading(false);
        },
        signUp: () => {
            setUserToken('fgkj');
            setIsLoading(false);
        },
        getUser: () => {
            return (
                userToken
            );
        }
    }));


    useEffect(() =>{
        setTimeout(() => {
            setIsLoading(false);
        },1000);
    },[]);

if(isLoading){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size ="large"/>
        </View>
    );
}

return(
<AuthContext.Provider value={authContext}>
    <NavigationContainer>
        {userToken !== null ? (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
              <Drawer.Screen name="User Home Page" component ={HomeStackScreen}/>
              <Drawer.Screen name="Locker Checkout" component ={LSStackScreen}/>
              <Drawer.Screen name="Locker Configuration" component ={LockerConfiguration}/>
             </Drawer.Navigator>
        )
        :
        (
            <RootStackScreen/>
        )
        }
       {/* <Stack.Navigator screenOptions = {{
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
                fontWeight : 'bold',
                alignItems : 'center'
            }
        }}>
            <Stack.Screen name = "Login" component ={Login}/>
            <Stack.Screen name = "User Home Page" component ={HomeScreen}/>
            <Stack.Screen name = "Locker Checkout" component ={LockerCheckout}/>
            <Stack.Screen name = "Locker Configuration" component ={LockerConfiguration}/>
            <Stack.Screen name = "Settings" component = {Settings}/>
        </Stack.Navigator>*/}
    </NavigationContainer>
</AuthContext.Provider>
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

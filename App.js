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
import ChangePasswordScreen from './screens/ChangePassword.js';
import ChangeUsernameScreen from './screens/ChangeUsername.js';
import RootStackScreen from './screens/RootStackScreen.js'



const LSStack = createStackNavigator();
const CPStack = createStackNavigator();
const CUStack = createStackNavigator();
const LCStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const SettingStack = createStackNavigator();

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

const SettingsStackScreen = ({navigation}) => {
return(
     <SettingStack.Navigator screenOptions = {{
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
                <SettingStack.Screen name = "Settings" component ={Settings} options = {{
                    headerLeft : () => (

                    <Icon.Button name="ios-menu" size = {25} backgroundColor='#0E2742'
                    onPress = {() => {navigation.openDrawer()}}> </Icon.Button>
                    )
                }}
                />

     </SettingStack.Navigator>
     );
}

const CPStackScreen = ({navigation}) => {
return(
     <CPStack.Navigator screenOptions = {{
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
                <CPStack.Screen name = "Change Password" component ={ChangePasswordScreen} options = {{
                    headerLeft : () => (

                    <Icon.Button name="ios-menu" size = {25} backgroundColor='#0E2742'
                    onPress = {() => {navigation.openDrawer()}}> </Icon.Button>
                    )
                }}
                />

     </CPStack.Navigator>
     );
}

const CUStackScreen = ({navigation}) => {
return(
     <CUStack.Navigator screenOptions = {{
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
                <CUStack.Screen name = "Change Username" component ={ChangeUsernameScreen} options = {{
                    headerLeft : () => (

                    <Icon.Button name="ios-menu" size = {25} backgroundColor='#0E2742'
                    onPress = {() => {navigation.openDrawer()}}> </Icon.Button>
                    )
                }}
                />

     </CUStack.Navigator>
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

const LCStackScreen = ({navigation}) => {
return(
     <LCStack.Navigator screenOptions = {{
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
                <LCStack.Screen name = "Locker Configuration" component ={LockerConfiguration} options = {{
                headerLeft : () => (

                  <Icon.Button name="ios-menu" size = {25} backgroundColor='#0E2742'
                   onPress = {() => {navigation.openDrawer()}}> </Icon.Button>
                 )}}
                 />
     </LCStack.Navigator>
     );
}
const App: () => Node = () => {
//
//const [isLoading,setIsLoading] = React.useState(true);
//const[userToken, setUserToken] = React.useState(null);

    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null,
    };

    const loginReducer = (prevState,action) => {
        switch(action.type){
            case 'RETRIEVE_TOKEN':
                return{
                    ...prevState,
                    userToken:action.token,
                    isLoading: false,
                };
            case 'LOGIN':
                return{
                    ...prevState,
                    userName : action.id,
                    userToken:action.token,
                    isLoading: false,
                };
            case 'UPDATE_USER':
                return{
                    ...prevState,
                    userName : action.id,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGOUT':
                return{
                    ...prevState,
                    userName : null,
                    userToken : null,
                    isLoading: false,
                };
            case 'REGISTER':
                return{
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
        }
    };

    const [loginState,dispatch] = React.useReducer(loginReducer,initialLoginState);

    const authContext = React.useMemo(() => ({
        signIn: (userName,password) => {
                    //setUserToken('fgkj');
                //setIsLoading(false);
            let userToken;
            userToken = null;
            if(userName == 'user' && password == 'pass'){
                userToken = userName;
            }
            dispatch({type: 'LOGIN', id: userName , token : userToken});
        },
        signOut: () => {
//            setUserToken(null);
//            setIsLoading(false);
            dispatch({type: 'LOGOUT'});
        },
        signUp: () => {
//            setUserToken('fgkj');
//            setIsLoading(false);
        },
        updateUsername: (userName) => {
            let user;
            user = null;
            user = userName;
            dispatch({type : 'UPDATE_USER', id : userName, token : user});
        },
        getUser: () => {
            return (
                loginState.userToken
            );
        }
    }));


    useEffect(() =>{
        setTimeout(() => {
//            setIsLoading(false);
        let userToken;;
        userToken = 'fgg';
        dispatch({type: 'RETRIEVE_TOKEN', token : loginState.userName});
        },1000);
    },[]);

if(loginState.isLoading){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size ="large"/>
        </View>
    );
}

return(
<AuthContext.Provider value={authContext}>
    <NavigationContainer>
        {loginState.userToken !== null ? (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
              <Drawer.Screen name="User Home Page" component ={HomeStackScreen}/>
              <Drawer.Screen name="Locker Checkout" component ={LSStackScreen}/>
              <Drawer.Screen name="Locker Configuration" component ={LCStackScreen}/>
              <Drawer.Screen name ="Settings" component={SettingsStackScreen}/>
              <Drawer.Screen name ="Change Password" component={CPStackScreen}/>
              <Drawer.Screen name ="Change Username" component={CUStackScreen}/>
             </Drawer.Navigator>
        )
        :
        (
            <RootStackScreen/>
        )
        }
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

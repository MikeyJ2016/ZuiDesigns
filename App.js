/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React,{useEffect, useState} from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext } from './Components/context.js';
import {firebase} from 'firebase';



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
  Image,
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
import { AdminDrawer } from './screens/AdminDrawer';

import HomeScreen from './screens/User_HomeScreen.js';
import AdminHome from './screens/AdminHomePage.js';
import LockerCheckout from './screens/LockerCheckout.js';
import LockerConfiguration from './screens/LockerConfiguration.js';
import Login from './screens/Login.js';
import Settings from './screens/Settings.js';
import AdminSettings from './screens/AdminSettings.js';
import ChangePasswordScreen from './screens/ChangePassword.js';
import ChangeUsernameScreen from './screens/ChangeUsername.js';
import AdminLockerSelectionScreen from './screens/AdminLockerSelectionScreen.js';
import AdminConfigureScreen from './screens/AdminConfigureScreen.js';
import RootStackScreen from './screens/RootStackScreen.js'


const LSStack = createStackNavigator();
const CPStack = createStackNavigator();
const CUStack = createStackNavigator();
const LCStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const AdminHomeStack = createStackNavigator();
const SettingStack = createStackNavigator();
const AdminSettingStack = createStackNavigator();
const AdminLS = createStackNavigator();
const AdminLC = createStackNavigator();

const AdminLSScreen = ({navigation}) => {
    return(
         <AdminLS.Navigator screenOptions = {{
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
                    <AdminLS.Screen name = "Admin Locker Selection" component ={AdminLockerSelectionScreen} options = {{
                        headerLeft : () => (

                        <Icon.Button name="ios-menu" size = {25} backgroundColor='#0E2742'
                        onPress = {() => {navigation.openDrawer()}}> </Icon.Button>
                        )
                    }}
                    />

         </AdminLS.Navigator>
         );
}

const AdminLCScreen = ({navigation}) => {
    return(
         <AdminLC.Navigator screenOptions = {{
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
                    <AdminLC.Screen name = "Admin Locker Configuration" component ={AdminConfigureScreen} options = {{
                        headerLeft : () => (

                        <Icon.Button name="ios-menu" size = {25} backgroundColor='#0E2742'
                        onPress = {() => {navigation.openDrawer()}}> </Icon.Button>
                        )
                    }}
                    />

         </AdminLC.Navigator>
         );
}

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
                    ),

                }}
                />

     </HomeStack.Navigator>
     );
}

const AdminStackScreen = ({navigation}) => {
return(
     <AdminHomeStack.Navigator screenOptions = {{
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
                <AdminHomeStack.Screen name = "Admin Home Page" component ={AdminHome} options = {{
                    headerLeft : () => (

                    <Icon.Button name="ios-menu" size = {25} backgroundColor='#0E2742'
                    onPress = {() => {navigation.openDrawer()}}> </Icon.Button>
                    )
                }}
                />

     </AdminHomeStack.Navigator>
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

const AdminSettingsStackScreen = ({navigation}) => {
return(
     <AdminSettingStack.Navigator screenOptions = {{
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
                <AdminSettingStack.Screen name = "Settings" component ={AdminSettings} options = {{
                    headerLeft : () => (

                    <Icon.Button name="ios-menu" size = {25} backgroundColor='#0E2742'
                    onPress = {() => {navigation.openDrawer()}}> </Icon.Button>
                    )
                }}
                />

     </AdminSettingStack.Navigator>
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

const AdminCUStackScreen = ({navigation}) => {
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
const App:   () => Node = () => {
//
//const [isLoading,setIsLoading] = React.useState(true);
//const[userToken, setUserToken] = React.useState(null);
const userURL = "https://www.zuidesigns.com/sp2021/userExample.cgi?"

    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null,
        ownedNode : null,
        isAdmin : false,
    }

    const [userInfo, SetInfo] = React.useState(
    {
    Username : "Michael",
    Password : "Scott",
    NodeNumber : "1"
    }
    )



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
                    ownedNode: action.owned,
                    isLoading: false,
                };
            case 'LOGIN_ADMIN':
                return{
                    ...prevState,
                    userName : action.id,
                    userToken:action.token,
                    isAdmin : true,
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
                    ownedNode : null,
                    isAdmin : false,
                    isLoading: false,
                };
            case 'REGISTER':
                return{
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'UPDATE_OWNERSHIP':
                return{
                    ...prevState,
                    ownedNode: action.id,
                    isLoading: false,
                };
            case 'RELEASE':
                return{
                    ...prevState,
                    ownedNode: null,
                    isLoading: false,
                };
            case 'GET_USER':
                return {
                    ...prevState,
                };
            case 'GET_OWNER':
                return {
                    ...prevState,
            };
        }
    };

    const [loginState,dispatch] = React.useReducer(loginReducer,initialLoginState);

    const authContext = React.useMemo(() => ({
        signIn: async (user) => {
                    //setUserToken('fgkj');
                //setIsLoading(false);
            let userToken;
            userToken = null;
            if(user.AdministratorStatus == 1 ){
                userToken = user.Username;
                if(user.OwnedNode !== "(null)"){
                  let response = await fetch('https://www.zuidesigns.com/sp2021/nodeExample.cgi?');
                  let res =  await response.json();
                  const newData = res.users.filter((item) => {
                    return item.NodeNumber === user.OwnedNode;
                  });
                  dispatch({type: 'LOGIN', id: user.Username , token : userToken, owned: newData[0]});
                }else{
                    dispatch({type: 'LOGIN', id: user.Username , token : userToken, owned: null});
                }

            }else if(user.AdministratorStatus == 2){
                userToken = user.Username;
                dispatch({type : 'LOGIN_ADMIN', id : user.Username, token : userToken});
            }

        },
        signOut: () => {
//            setUserToken(null);
//            setIsLoading(false);
            loginState.ownedNode = null;
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
            if(loginState.ownedNode !== null){
                            fetch('https://www.zuidesigns.com/sp2021/nodeExample.cgi?input_request=updateOwnedNode&node_number=' + `${loginState.ownedNode.NodeNumber}` +'&ownership=' + `${userName}`)
                            .catch((error) => console.error(error));
            }
            dispatch({type : 'UPDATE_USER', id : userName, token : user});
        },
        getUser:   () => {
        return (
                loginState.userToken
            );
        },
        checkUser : async() => {
            let response = await fetch('https://www.zuidesigns.com/sp2021/userExample.cgi?input_request=verifyUsername&username=' + `${loginState.userName}`);
            let res = await response.json();
            return (
                res.users[0].Username
            );
        },
        updateOwn: (ownedNode) => {
           let owner;
           owner = null;
           owner = ownedNode;
           loginState.ownedNode = ownedNode;
           dispatch({type: 'UPDATE_OWNERSHIP', id : owner});
        },
        getOwned: () => {
        if(loginState.ownedNode !== null){
            return (
                loginState.ownedNode
            );
        }else{
            return null;
        }
        },
        AdminRemoveOwner : async () => {
            loginState.ownedNode.Ownership == "0";
            await fetch('https://www.zuidesigns.com/sp2021/userExample.cgi?input_request=updateOwnedNode&username=' + `${loginState.ownedNode.Ownership}` + '&ownedNode=0')
            .catch((error) => console.error(error));
            await fetch('https://www.zuidesigns.com/sp2021/nodeExample.cgi?input_request=updateOwnedNode&node_number=' + `${loginState.ownedNode.NodeNumber}` +'&ownership=0')
            .catch((error) => console.error(error));

        },
        release: () => {
            if(loginState.ownedNode !== null){
            fetch('https://www.zuidesigns.com/sp2021/nodeExample.cgi?input_request=updateOwnedNode&node_number=' + `${loginState.ownedNode.NodeNumber}` +'&ownership=0')
            .catch((error) => console.error(error));
            fetch('https://www.zuidesigns.com/sp2021/userExample.cgi?input_request=updateOwnedNode&username=' + `${loginState.ownedNode.Ownership}` + '&ownedNode=0')
            .catch((error) => console.error(error));
                loginState.ownedNode.isOwned = false;
                loginState.ownedNode.isSelected = false;
                dispatch({type: 'RELEASE'});
            }
        },
        adminRelease : () => {
                        dispatch({type: 'RELEASE'});
                        loginState.ownedNode = null;
        },
        changeInfo_1 : () => {
        let newInfo = [...userInfo];
        newInfo = {
                    Username : "Harley",
                    Password : "Mitchell",
                    NodeNumber : "2"
        }

//        SetInfo(newInfo);

        },
        changeInfo_2 : () => {
                let newInfo ;
                newInfo = {
                    Username : "Michael",
                    Password : "Scott",
                    NodeNumber : "1"
                }

                SetInfo(newInfo);

        },


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
};

return(
<AuthContext.Provider value={{userInfo,authContext}}>
    <NavigationContainer>
        {loginState.userToken !== null ? (
            !loginState.isAdmin ? (
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
           <Drawer.Navigator drawerContent={props => <AdminDrawer {...props}/>}>
              <Drawer.Screen name="Admin Home Page" component ={AdminStackScreen}/>
              <Drawer.Screen name="Admin Locker Selection" component ={AdminLSScreen}/>
              <Drawer.Screen name="Admin Locker Configuration" component ={AdminLCScreen}/>
              <Drawer.Screen name ="Settings" component={AdminSettingsStackScreen}/>
              <Drawer.Screen name ="Change Password" component={CPStackScreen}/>
              <Drawer.Screen name ="Change Username" component={CUStackScreen}/>
           </Drawer.Navigator>
              )
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

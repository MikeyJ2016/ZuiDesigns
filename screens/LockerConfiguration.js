import React from 'react';
import {View, Text,Button,StyleSheet,FlatList, Statusbar,ScrollView,TouchableOpacity } from 'react-native'
import {useTheme } from '@react-naviagtion/native';
import LinearGradient from 'react-native-linear-gradient';
import  {useState,useEffect } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext } from '../Components/context.js';

const LockerConfiguration = ({navigation}) => {

    const [data, setData] = React.useState([]);


    useEffect(async() =>{
         await fetch('https://www.zuidesigns.com/sp2021/nodeExample.cgi?')
           .then(response => response.json())
           .then(res => setData(res.users))
           .catch((error) => console.error(error));
   }, []);

    const {getOwned,release} = React.useContext(AuthContext);
    let locker = getOwned();
    let message,analog,digital,lockStatus;
    if(locker == null) {
        message = "None";
        analog = "0.0";
        digital = "0.0";
        lockStatus = "Lock";
    }else{
        message = "Locker " + `${locker.NodeNumber}`;
        analog = `${locker.AnalogVoltage}`;
        digital = `${locker.DigitalStatus}`;
        if(locker.RelayStatus == 0){
            lockStatus = "Lock";
        }else{
            lockStatus = "Unlock";
        }

    }


    return (
    <View style={[styles.container, {marginTop : 30, paddingHorizontal : 50}]}>
      <LinearGradient
          colors ={['#08d4c4','#01ab9d']}
          style={styles.side_by_side}
      >
        <Text style ={[styles.textSign,{
          color:'#fff'
        }]}> Selected : {message} </Text>
      </LinearGradient>
        <TouchableOpacity
            style = {[styles.signIn,{marginTop : 50},{paddingHorizontal :75}]}
        >
            <LinearGradient
                colors ={['#08d4c4','#01ab9d']}
                style={styles.side_by_side}
            >
                <Text style ={[styles.textSign,{
                    color:'#fff'
                }]}>{lockStatus}</Text>
            </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
            style = {[styles.signIn,{marginTop : 50},{paddingHorizontal :75}]}
            onPress={() => release()}
        >
            <LinearGradient
                colors ={['#08d4c4','#01ab9d']}
                style={styles.side_by_side}
            >
                <Text style ={[styles.textSign,{
                    color:'#fff'
                }]}>Release Locker</Text>
            </LinearGradient>
        </TouchableOpacity>

    <View style={styles.row}>
        <Text style ={[styles.textSign,{
            color:'#fff',
            paddingHorizontal : 20,
            textAlign: 'center',
        }]}>Digital Output Voltage</Text>

        <Text style ={[styles.textSign,{
            color:'#fff',
            paddingHorizontal : 20,
            marginTop : 0,
            justifyContent : 'center',
            textAlign: 'center',

        }]}>Analog Input Voltage</Text>
    </View>

    <View style={{
        marginTop: 0,
        marginLeft: 50,
        marginRight: 50,
        marginHorizontal : 400 ,
        paddingHorizontal : 20,
        flexDirection: 'row',
        flex : 1
      }}>
            <LinearGradient
                colors ={['#fff','#fff']}
                style={[styles.side_by_side,{marginHorizontal : 10}]}
            >
                <Text style ={[styles.textSign,{
                    color:'#000'
                }]}>{digital}</Text>
            </LinearGradient>

            <LinearGradient
                colors ={['#fff','#fff']}
                style={[styles.side_by_side,{marginHorizontal : 10}]}
            >
                <Text style ={[styles.textSign,{
                    color:'#000'
                }]}>{analog}</Text>
            </LinearGradient>
    </View>

    <View style={{
       marginTop: 0,
       marginLeft: 50,
       marginRight: 50,
       marginHorizontal : 400 ,
       paddingHorizontal : 20,
       flexDirection: 'row',
       flex : 1
     }}>
        <TouchableOpacity
            style = {[styles.side_by_side ]}
         >
            <LinearGradient
                colors ={['#6E6969','#6E6969']}
                style={styles.side_by_side}
            >
                <Text style ={[styles.textSign,{
                    color:'#fff'
                }]}>Save</Text>
            </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
            style = {[styles.side_by_side ]}
            onPress= {() => navigation.navigate('User Home Page')}>
            <LinearGradient
                colors ={['#08d4c4','#01ab9d']}
                style={styles.side_by_side}
            >
                <Text style ={[styles.textSign,{
                    color:'#fff'
                }]}>Back</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>
    </View>
    );
};

export default LockerConfiguration;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#114F79',
      alignItems : 'center'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        paddingHorizontal : 30,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 25
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0,

    },
    side_by_side : {
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            paddingHorizontal : 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    row: {
      marginTop: 50,
      marginLeft: 50,
      marginRight: 50,
      marginHorizontal : 400 ,
      paddingHorizontal : 20,
      flexDirection: 'row',
      flex : 1
    }
  });
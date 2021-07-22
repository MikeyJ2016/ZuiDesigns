import React from 'react';
import {View, Text,Button,StyleSheet,FlatList, Statusbar,ScrollView,TouchableOpacity } from 'react-native'
import {useTheme } from '@react-naviagtion/native';
import LinearGradient from 'react-native-linear-gradient';
import  {useState,useEffect } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext } from '../Components/context.js';

const LockerConfiguration = ({navigation}) => {

    const {getUser,getOwned,release} = React.useContext(AuthContext);
    const [data, setData] = React.useState({
        NodeNumber: "",
        RelayStatus : 0,
        DigitalStatus : "",
        AnalogVoltage : "",
        Ownership : ""
    });
    const [user, setUser] = React.useState({Username : ""});
    let temp = getUser();

    const fetchData = async() => {
       let response  = await fetch('https://www.zuidesigns.com/sp2021/userExample.cgi?input_request=verifyUsername&username=' + `${temp}`);
        let res = await response.json();
        res = res.users[0]
        if(res.OwnedNode !== "(null)"){
            response = await fetch('https://www.zuidesigns.com/sp2021/nodeExample.cgi?input_request=verifyNode&node_number=' + `${res.OwnedNode}`);
            res = await response.json();
            setData({
                ...data,
                    NodeNumber: res.nodes[0].NodeNumber,
                    RelayStatus : res.nodes[0].RelayStatus,
                    DigitalStatus : res.nodes[0].DigitalStatus,
                    AnalogVoltage : res.nodes[0].AnalogVoltage,
                    Ownership : res.nodes[0].Ownership,
            })
        }else{
            setData({
                ...data,
                NodeNumber: "",
                RelayStatus : 0,
                DigitalStatus : "",
                AnalogVoltage : "",
                Ownership : ""
            })
        }
    }


    useEffect(() =>{
         setUser({
         ...user,
         Username : temp
         })

        const interval = setInterval(() => {
        t = t + 1;
        fetchData();
        }, 1000);
        return () => clearInterval(interval);
   }, [t,temp]);


    let locker = getOwned();
    let t = 0;
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
        if(data.RelayStatus == 0){
            lockStatus = "Lock";
        }else{
            lockStatus = "Unlock";
        }

    }

    const LockLocker = async() => {
        let response, res;
        if(data.NodeNumber !== ""){
            if(data.RelayStatus == 1){
                    response = await fetch('https://www.zuidesigns.com/sp2021/nodeExample.cgi?input_request=updateLockerStatus&node_number=' + `${data.NodeNumber}` + '&relay_status=0');
            }else{
                    response = await fetch('https://www.zuidesigns.com/sp2021/nodeExample.cgi?input_request=updateLockerStatus&node_number=' + `${data.NodeNumber}` + '&relay_status=1');
            }
            let res = await response.json();
            res = res.users[0];
            setData({
                ...data,
                    NodeNumber: res.NodeNumber,
                    RelayStatus : res.RelayStatus,
                    DigitalStatus : res.DigitalStatus,
                    AnalogVoltage : res.AnalogVoltage,
                    Ownership : res.Ownership,
            })
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
            onPress={() => LockLocker()}
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
                }]}>{data.DigitalStatus}</Text>
            </LinearGradient>

            <LinearGradient
                colors ={['#fff','#fff']}
                style={[styles.side_by_side,{marginHorizontal : 10}]}
            >
                <Text style ={[styles.textSign,{
                    color:'#000'
                }]}>{data.AnalogVoltage}</Text>
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
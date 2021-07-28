import React from 'react';
import {View, Text,Button,StyleSheet,FlatList, Statusbar,ScrollView,TouchableOpacity } from 'react-native'
import {useTheme } from '@react-naviagtion/native';
import LinearGradient from 'react-native-linear-gradient';
import  {useState,useEffect,useContext} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext } from '../Components/context.js';

const AdminConfigureScreen = ({route, navigation}) => {

    const [node , setNode] = React.useState({NodeNumber : "" , Ownership : "",DigitalStatus : 0, AnalogVoltage : 0, RelayStatus : 0})
    let t = 0;

    let checkLocker = 0;
    const {authContext} = React.useContext(AuthContext);
    const {userInfo} = React.useContext(AuthContext);
    let temp = authContext.getUser();

    let message,owner;
    if(false) {
        message = "None";
    }else{
        message = " ";
    }

    const fetchData = async() => {
        let response  = await fetch('https://www.zuidesigns.com/sp2021/userExample.cgi?input_request=verifyUsername&username=' + `${temp}`);
        let res = await response.json();
        res = res.users[0];
//        alert(`${temp}`);
        if(res.OwnedNode !== "(null)"){
            res.OwnedNode = res.OwnedNode.slice(0,res.OwnedNode.length-1);
            response = await fetch('https://www.zuidesigns.com/sp2021/nodeExample.cgi?input_request=verifyNode&node_number=' + `${res.OwnedNode}`);
            res = await response.json();
            setNode({
                ...node,
                    NodeNumber: res.nodes[0].NodeNumber,
                    RelayStatus : res.nodes[0].RelayStatus,
                    DigitalStatus : res.nodes[0].DigitalStatus,
                    AnalogVoltage : res.nodes[0].AnalogVoltage,
                    Ownership : res.nodes[0].Ownership,
            })
        }else{
            setNode({
                ...node,
                NodeNumber: "",
                RelayStatus : 0,
                DigitalStatus : "",
                AnalogVoltage : "",
                Ownership : ""
            })
        }
    }



     useEffect(() =>{
        const interval = setInterval(() => {
            let locker = userInfo;
            if(locker !== null){
                t = t + 1;
                fetchData();
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [t]);


    const LockLocker = async() => {
        let response, res;

        if(node.NodeNumber !== null){
            if(node.RelayStatus == 1){
                    response = await fetch('https://www.zuidesigns.com/sp2021/nodeExample.cgi?input_request=updateLockerStatus&node_number=' + `${node.NodeNumber}` + '&relay_status=0');
            }else if (node.RelayStatus == 0){
                    response = await fetch('https://www.zuidesigns.com/sp2021/nodeExample.cgi?input_request=updateLockerStatus&node_number=' + `${node.NodeNumber}` + '&relay_status=1');
            }
            res = await response.json();
            res = res.users[0];
            setNode({
                ...node,
                    RelayStatus : res.RelayStatus,
                    DigitalStatus : res.DigitalStatus,
                    AnalogVoltage : res.AnalogVoltage,
                    Ownership : res.Ownership
            });
        }else{
            setNode({
                ...node,
                RelayStatus : 0,
                DigitalStatus : "",
                AnalogVoltage : "",
                Ownership : ""
            })
        }
    }


    const updateOwner = () => {
        AdminRemoveOwner();
    }


    return (
    <View style={[styles.container, {marginTop : 30, paddingHorizontal : 50}]}>
      <LinearGradient
          colors ={['#08d4c4','#01ab9d']}
          style={styles.side_by_side}
      >
        <Text style ={[styles.textSign,{
          color:'#fff'
        }]}> Selected : Locker {node.NodeNumber} </Text>
        <Text style ={[styles.textSign,{
                  color:'#fff'
        }]}> Owner : {node.Ownership} </Text>
        </LinearGradient>

     <View style={styles.row}>
            <TouchableOpacity
                        style = {[styles.side_by_side ]}
                        onPress={() => LockLocker()}
                     >
                        <LinearGradient
                            colors ={['#08d4c4','#01ab9d']}
                            style={styles.side_by_side}
                        >
                          {node.RelayStatus == 1 ?
                            <Text style ={[styles.textSign,{
                                color:'#fff'
                            }]}>Unlock</Text>

                            :
                            <Text style ={[styles.textSign,{
                                color:'#fff'
                            }]}>Lock</Text>
                            }
                        </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
               style = {[styles.side_by_side ]}
               onPress = {() =>  authContext.AdminRemoveOwner(node) }
            >
                 <LinearGradient
                     colors ={['#08d4c4','#01ab9d']}
                     style={styles.side_by_side}
                  >

                    <Text style ={[styles.textSign,{
                        color:'#fff'
                    }]}>Remove Owner</Text>

              </LinearGradient>
            </TouchableOpacity>
        </View>

        <View style={styles.row}>
                    <TouchableOpacity
                            style = {[styles.side_by_side ]}
                            onPress={() => {
                                fetch('https://www.zuidesigns.com/sp2021/nodeExample.cgi?input_request=updateOwnedNode&node_number=' + `${node.NodeNumber}` +'&ownership=0')
                                .catch((error) => console.error(error));
                            }}
                     >
                                <LinearGradient
                                    colors ={['#08d4c4','#01ab9d']}
                                    style={styles.side_by_side}
                                >
                                    <Text style ={[styles.textSign,{
                                        color:'#fff'
                                    }]}>Add Locker to Network</Text>
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity
                                   style = {[styles.side_by_side ]}
                                onPress={() => {
                                       fetch('https://www.zuidesigns.com/sp2021/nodeExample.cgi?input_request=updateOwnedNode&node_number=' + `${node.NodeNumber}` +'&ownership=UNAVAILABLE')
                                        .catch((error) => console.error(error));}}
                            >
                                     <LinearGradient
                                     colors ={['#08d4c4','#01ab9d']}
                                     style={styles.side_by_side}
                                      >
                                        <Text style ={[styles.textSign,{
                                      color:'#fff'
                                   }]}>Remove Locker from Network</Text>
                                  </LinearGradient>
                                </TouchableOpacity>
                </View>


    <View style={styles.row}>
        <Text style ={[styles.textSign,{
            color:'#fff',
            paddingHorizontal : 20,
            textAlign: 'center',
        }]}>Digital Input Voltage</Text>

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
                }]}>{node.DigitalStatus}</Text>
            </LinearGradient>

            <LinearGradient
                colors ={['#fff','#fff']}
                style={[styles.side_by_side,{marginHorizontal : 10}]}
            >
                <Text style ={[styles.textSign,{
                    color:'#000'
                }]}>{node.AnalogVoltage}</Text>
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
            onPress= {() => {
                authContext.adminRelease();
                navigation.navigate('Admin Locker Selection');}}>
            <LinearGradient
                colors ={['#6E6969','#6E6969']}
                style={styles.side_by_side}
            >
                <Text style ={[styles.textSign,{
                    color:'#fff'
                }]}>Back</Text>
            </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
            style = {[styles.side_by_side ]}>
            <LinearGradient
                colors ={['#08d4c4','#01ab9d']}
                style={styles.side_by_side}
            >
                <Text style ={[styles.textSign,{
                    color:'#fff'
                }]}>Save</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>
    </View>
    );
};

export default AdminConfigureScreen;

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
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            paddingHorizontal : 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    row: {
      marginTop: 30,
      marginLeft: 30,
      marginRight: 30,
      marginHorizontal : 400 ,
      paddingHorizontal : 20,
      flexDirection: 'row',
      flex : 1
    }
  });
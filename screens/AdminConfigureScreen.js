import React from 'react';
import {View, Text,Button,StyleSheet,FlatList, Statusbar,ScrollView,TouchableOpacity } from 'react-native'
import {useTheme } from '@react-naviagtion/native';
import LinearGradient from 'react-native-linear-gradient';
import  {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext } from '../Components/context.js';

const AdminConfigureScreen = ({route, navigation}) => {

    let locker = null;
    let message;
    if(locker == null) {
        message = "None";
    }else{
        message = "Locker " + `${locker.id}`;
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
        <Text style ={[styles.textSign,{
                  color:'#fff'
                }]}> Owner : {message} </Text>
        </LinearGradient>

     <View style={styles.row}>
            <TouchableOpacity
                        style = {[styles.side_by_side ]}
                     >
                        <LinearGradient
                            colors ={['#08d4c4','#01ab9d']}
                            style={styles.side_by_side}
                        >
                            <Text style ={[styles.textSign,{
                                color:'#fff'
                            }]}>Lock/UnLock</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                           style = {[styles.side_by_side ]}
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
                }]}>0.0</Text>
            </LinearGradient>

            <LinearGradient
                colors ={['#fff','#fff']}
                style={[styles.side_by_side,{marginHorizontal : 10}]}
            >
                <Text style ={[styles.textSign,{
                    color:'#000'
                }]}>0.0</Text>
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
            onPress= {() => navigation.navigate('Admin Home Page')}>
            <LinearGradient
                colors ={['#08d4c4','#01ab9d']}
                style={styles.side_by_side}
            >
                <Text style ={[styles.textSign,{
                    color:'#fff'
                }]}>Return</Text>
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

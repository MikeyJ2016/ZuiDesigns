import React from 'react';
import {View, Text,Button,StyleSheet, Statusbar, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme } from '@react-naviagtion/native';
import { createStackNavigator } from '@react-navigation/stack';


const AdminHome = ({navigation}) => {
    return (
    <View style= {styles.button}>
         <TouchableOpacity
             style = {[styles.signIn,{marginTop : 50}, {paddingHorizontal :50}]}
             onPress= {() => {navigation.navigate('Locker Selection')}}>
            <LinearGradient
              colors ={['#08d4c4','#01ab9d']}
              style={styles.signIn}
            >
                <Text style ={[styles.textSign,{
                    color:'#fff'
                }]}>Locker Selection</Text>
            </LinearGradient>
          </TouchableOpacity>

         <TouchableOpacity
             style = {[styles.signIn,{marginTop : 50}, {paddingHorizontal :50}]}
             onPress= {() => {navigation.navigate('Settings')}}>
            <LinearGradient
              colors ={['#08d4c4','#01ab9d']}
              style={styles.signIn}
            >
                <Text style ={[styles.textSign,{
                    color:'#fff'
                }]}>Settings</Text>
            </LinearGradient>
          </TouchableOpacity>
    </View>
    );
};



export default AdminHome;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0E2742'
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
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
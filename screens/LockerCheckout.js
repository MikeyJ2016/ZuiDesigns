import React from 'react';
import {View, Text,Button,StyleSheet, Statusbar } from 'react-native'
import {useTheme } from '@react-naviagtion/native';


const LockerCheckout = ({navigation}) => {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen Screen</Text>
      <Button
      title = "Go to details screen"
      onPress={() => navigation.navigate("Details")}
      />


      <Button
       title = "Go to details screen"
       onPress={() => navigation.navigate("Home")}
       />

           <Button
           title = "Go Back"
           onPress={() => navigation.goBack()}
           />
    </View>
    );
};

export default LockerCheckout;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
});
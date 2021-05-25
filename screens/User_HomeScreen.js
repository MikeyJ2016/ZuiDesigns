import React from 'react';
import {View, Text,Button,StyleSheet, Statusbar } from 'react-native'
import {useTheme } from '@react-naviagtion/native';


const HomeScreen = ({navigation}) => {
    return (
    <View style= {styles.container}>
      <Button
      color = "#36FF00"
          title = "Checkout a Locker"
          onPress={() => navigation.navigate("Locker Checkout")}

      />

    <Button
         title = "Configure Owned Locker"
         onPress={() => navigation.navigate("Locker Configuration")}
      />
    </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
});
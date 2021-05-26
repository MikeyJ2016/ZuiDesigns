import React from 'react';
import { View, StyleSheet } from 'react-native';

import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsGlyphs from 'react-native-vector-icons/Ionicons';

import{ AuthContext } from '../Components/context';

export function DrawerContent(props) {

const {signOut} = React.useContext(AuthContext);
const {getUser} = React.useContext(AuthContext);

const userName = `${getUser()}`;

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

return(

    <View style={{flex : 1}}>
        <DrawerContentScrollView {...props}>
            <View style ={styles.DrawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection : 'row', marginTop : 15}}>
                        <Avatar.Image
                            source={{
                                uri: 'https://www.gvsu.edu/cms4/asset/83FCF959-CAC9-6F16-437BAC0D302BE992/zuidesign[1595357085].jpg'
                            }}
                            size = {50}
                         />
                         <View>
                            <Title>
                               {userName}
                            </Title>
                            <Caption>

                            </Caption>
                         </View>
                    </View>
                </View>
            </View>
            <Drawer.Section style = {styles.drawerSection}>
                <DrawerItem
                    icon={({color,size}) => (
                        <Icon
                            name="home-outline"
                            color={color}
                            size ={size}
                         />
                    )}
                    label = "Home Screen"
                    onPress={() => {props.navigation.navigate('User Home Page')}}
                />
                <DrawerItem
                    icon={({color,size}) => (
                        <Icon
                            name="text-box-check"
                            color={color}
                            size ={size}
                         />
                    )}
                    label = "Locker Checkout"
                    onPress={() => {props.navigation.navigate("Locker Checkout")}}
                />
                <DrawerItem
                    icon={({color,size}) => (
                        <Icon
                            name="tools"
                            color={color}
                            size ={size}
                         />
                    )}
                    label = "Locker Configuration"
                    onPress={() => {props.navigation.navigate("Locker Configuration")}}
                />
                <DrawerItem
                    icon={({color,size}) => (
                        <IoniconsGlyphs
                            name="settings"
                            color={color}
                            size ={size}
                         />
                    )}
                    label = "Settings"
                    onPress={() => {signOut()}}
                />

            </Drawer.Section>
            <Drawer.Section title = "Preferences">
                <TouchableRipple onPress={() => {toggleTheme()}}>
                    <View style={styles.preference}>
                        <Text>Dark Theme</Text>
                        <View pointerEvents="none">
                            <Switch value={isDarkTheme}/>
                        </View>
                    </View>
                </TouchableRipple>
            </Drawer.Section>

        </DrawerContentScrollView>
        <Drawer.Section sytle= {styles.bottomDrawerSection}>
            <DrawerItem
                icon={({color,size}) => (
                    <Icon
                        name="exit-to-app"
                        color={color}
                        size ={size}
                     />
                )}
                label = "Sign Out"
                onPress={() => {signOut()}}
            />
        </Drawer.Section >
   </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
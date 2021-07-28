import React from 'react';
import {useEffect,useContext} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Image
} from 'react-native';


import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext } from '../Components/context.js';

import { useTheme } from 'react-native-paper';

const Testing = () => {
    const [tdata, setTData] = React.useState({items : [{}]});

    const [data,setData] = React.useState({
        username: '',
        password : '',
        check_textInputChange: false,
        secureTextEntry : true,
        validentry : true
    });


//    const {authContext} = React.useContext(AuthContext);
    const {products} = React.useContext(AuthContext);

    const textInputChange=(val) => {
        if(val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        }else{
            setData({
            ...data,
            username: val,
            check_textInputChange:false
            });
        }
    }

    const handlePasswordChange = (val) => {
            if( val.trim().length >= 8 ) {
                setData({
                    ...data,
                    password: val,
                    isValidPassword: true
                });
            } else {
                setData({
                    ...data,
                    password: val,
                    isValidPassword: false
                });
            }
        }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const loginHandle = async (username,password) => {
            alert(`${username}`);
        }
return (
< View style = {styles.container} >

    <View style = {styles.header}>
        <Image
            source={{
              uri: 'https://media.discordapp.net/attachments/811004485068521472/868999399206973520/logo.png'
            }}
            style={{width : 200,height:150}}
         />
        <Text style = {styles.text_header}> Mesh Network Concept</Text>
    </View>
    <View style = {styles.footer}>
        <Text style = {styles.text_footer}> Username</Text>
        <View style = {styles.action}>
            <FontAwesome
                name="user-o"
                color='#05375a'
                size={20}
            />
            <TextInput
                placeholder="Your Username"
                style={styles.textInput}
                onChangeText={(val) => textInputChange(val)}
                />
            {data.check_textInputChange ?
            <Feather
                name="check-circle"
                color="green"
                size={20}
             />
             : null }

        </View>
        <Text style = {[styles.text_footer, {
        marginTop : 35
        }]}> Password</Text>

        <View style = {styles.action}>
        <FontAwesome
         name="lock"
                        color='#05375a'
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Password"
                        secureTextEntry = {data.secureTextEntry ? true: false}
                        style={styles.textInput}
                        onChangeText ={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                    {data.secureTextEntry ?
                    <Feather
                        name="eye-off"
                        color="gray"
                        size={20}
                     />
                     :
                     <Feather
                        name = "eye"
                        color = "grey"
                        size = {20}
                      />
                      }
                    </TouchableOpacity>
           </View>
           <View style={styles.button}>
                {data.validentry ?
                    null
                    :
                    <Text style = {{color : 'red'}}> Username or Password is not correct </Text>
                }
                <TouchableOpacity
                    style = {styles.signIn}
                    onPress= {() => {loginHandle(data.username,data.password)}}>
                    <LinearGradient
                        colors ={['#08d4c4','#01ab9d']}
                        style={styles.signIn}
                    >
                        <Text style ={[styles.textSign,{
                            color:'#fff'
                        }]}>Login</Text>
                    </LinearGradient>
                </TouchableOpacity>


            </View>
    </View>
</View>
);
};

export default Testing;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#182E46',

    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingTop: 50,
                      alignItems: 'center',
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical:30
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
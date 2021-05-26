import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext } from '../Components/context.js';

import { useTheme } from 'react-native-paper';

const CreateUser = ({navigation}) => {

    const {signIn} = React.useContext(AuthContext);
    const [data,setData] = React.useState({
        username: '',
        password : '',
        confirm_password : '',
        check_textInputChange: false,
        secureTextEntry : true,
        confirm_secureTextEntry : true
    });

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

    const handleConfirmPasswordChange = (val) => {
            if( val.trim().length >= 8 ) {
                setData({
                    ...data,
                    confirm_password: val,
                    isValidPassword: true
                });
            } else {
                setData({
                    ...data,
                    confirm_password: val,
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

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

return (
< View style = {styles.container} >
    <View style = {styles.header}>
        <Text style = {styles.text_header}> Register New User Now!</Text>
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
        marginTop : 20
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
        <Text style = {[styles.text_footer, {
        marginTop : 20
        }]}> Confirm Password</Text>

        <View style = {styles.action}>
        <FontAwesome
         name="lock"
                        color='#05375a'
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Password"
                        secureTextEntry = {data.confirm_secureTextEntry ? true: false}
                        style={styles.textInput}
                        onChangeText ={(val) => handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}
                    >
                    {data.confirm_secureTextEntry ?
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
                    <TouchableOpacity
                        style = {styles.signIn}
                        onPress= {() => navigation.goBack()}>
                        <LinearGradient
                            colors ={['#08d4c4','#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style ={[styles.textSign,{
                                color:'#fff'
                            }]}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style = {[styles.signIn,{
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop : 15
                        }]}
                    >
                    <Text>Sign Up</Text>
                    </TouchableOpacity>
            </View>
    </View>
</View>
);
};

export default CreateUser;

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
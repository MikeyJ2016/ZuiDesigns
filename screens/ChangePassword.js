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



const ChangePasswordScreen = ({navigation}) => {

        const [data,setData] = React.useState({
        username: '',
        password : '',
        _newPassword:'',
        confirm_password : '',
        check_textInputChange: false,
        secureTextEntry : true,
        _newSecureTextEntry: true,
        confirm_secureTextEntry : true
        });

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

        const handleNewPasswordChange = (val) => {
                if( val.trim().length >= 8 ) {
                    setData({
                        ...data,
                        _newPassword: val,
                        isValidPassword: true
                    });
                } else {
                    setData({
                        ...data,
                        _newPassword: val,
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

        const updateNewSecureTextEntry = () => {
            setData({
                ...data,
                _newSecureTextEntry: !data._newSecureTextEntry
            });
        }
    return (
    <View>
           <Text style = {[styles.text_footer, {
            marginTop : 35, color : "white"
            }]}> Original Password</Text>

            <View style = {styles.action}>
                <FontAwesome
                    name="lock"
                    color='#fff'
                    size={20}
                />
                <TextInput
                    placeholder="Your Password"
                    placeholderTextColor = "white"
                    secureTextEntry = {data._newSecureTextEntry ? true: false}
                    style={styles.textInput}
                    onChangeText ={(val) => handleNewPasswordChange(val)}
                    color = "white"
                />
                <TouchableOpacity
                    onPress={updateNewSecureTextEntry}
                >
                    {data._newSecureTextEntry ?
                        <Feather
                            name="eye-off"
                            color="white"
                            size={20}
                         />
                         :
                         <Feather
                            name = "eye"
                            color = "white"
                            size = {20}
                          />
                     }
                </TouchableOpacity>
            </View>
        <Text style = {[styles.text_footer, {
        marginTop : 35, color : "white"
        }]}> New Password</Text>

        <View style = {styles.action}>
            <FontAwesome
                name="lock"
                color='#fff'
                size={20}
            />
            <TextInput
                placeholder="Your Password"
                placeholderTextColor = "white"
                secureTextEntry = {data.secureTextEntry ? true: false}
                style={styles.textInput}
                onChangeText ={(val) => handlePasswordChange(val)}
                color = "white"
            />
            <TouchableOpacity
                onPress={updateSecureTextEntry}
            >
                {data.secureTextEntry ?
                    <Feather
                        name="eye-off"
                        color="white"
                        size={20}
                     />
                     :
                     <Feather
                        name = "eye"
                        color = "white"
                        size = {20}
                      />
                 }
            </TouchableOpacity>
        </View>

            <Text style = {[styles.text_footer, {
            marginTop : 20, color : "white"
            }]}> Confirm Password</Text>

            <View style = {styles.action}>
            <FontAwesome
             name="lock"
                color='#fff'
                size={20}
            />
            <TextInput
                placeholder="Your Password"
                placeholderTextColor = "white"
                secureTextEntry = {data.confirm_secureTextEntry ? true: false}
                style={styles.textInput }
                onChangeText ={(val) => handleConfirmPasswordChange(val)}
                color = "white"

            />
            <TouchableOpacity
                onPress={updateConfirmSecureTextEntry}
            >
            {data.confirm_secureTextEntry ?
            <Feather
                name="eye-off"
                color="white"
                size={20}
             />
             :
             <Feather
                name = "eye"
                color = "white"
                size = {20}
              />
              }
            </TouchableOpacity>
        </View>
           <View style={styles.row}>
                <View style={styles.section}>
                    <TouchableOpacity
                        style = {[styles.signIn ]}
                        onPress= {() => navigation.goBack()}>
                        <LinearGradient
                            colors ={['#08d4c4','#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style ={[styles.textSign,{
                                color:'#fff'
                            }]}>Save</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
    f                    color = "gray"
                        style = {[styles.signIn,{
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginLeft : 25
                        }]}
                    >
                    <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
     </View>
    );
};

export default ChangePasswordScreen;

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
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    row: {
      marginTop: 50,
      marginLeft: 10,
      marginRight: 225,
      marginHorizontal : 100,
      flexDirection: 'row',
      alignItems: 'center',
      flex : 1
    }
  });
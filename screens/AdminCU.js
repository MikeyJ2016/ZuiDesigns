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



const ChangeUsernameScreen = ({navigation}) => {

        const {getUser,updateUsername} = React.useContext(AuthContext);


        const handleUpdate=() => {
            if(data.username == getUser() && data.check_newInputChange){
                updateUsername(data._newUserName);
                navigation.goBack();
            }
        }
        const [data,setData] = React.useState({
        username: '',
        _newUserName:'',
        check_textInputChange: false,
        check_newInputChange: false,
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

        const textNewInputChange=(val) => {
            if(val.trim().length >= 4) {
                setData({
                    ...data,
                    _newUserName: val,
                    check_newInputChange: true
                });
            }else{
                setData({
                ...data,
                _newUserName: val,
                check_newInputChange:false
                });
            }
        }



    return (
    <View>
           <Text style = {[styles.text_footer, {
            marginTop : 35, color : "white"
            }]}> Original Username</Text>

            <View style = {styles.action}>
                <FontAwesome
                    name="user-o"
                    color='#fff'
                    size={20}
                />
                <TextInput
                    placeholder="Original Username"
                    placeholderTextColor = "white"
                    secureTextEntry = {data._newSecureTextEntry ? true: false}
                    style={styles.textInput}
                    onChangeText ={(val) => textInputChange(val)}
                    color = "white"
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
        marginTop : 35, color : "white"
        }]}> New Username</Text>

        <View style = {styles.action}>
            <FontAwesome
                name="user-o"
                color='#fff'
                size={20}
            />
            <TextInput
                placeholder="New Username"
                placeholderTextColor = "white"
                secureTextEntry = {data.secureTextEntry ? true: false}
                style={styles.textInput}
                onChangeText ={(val) => textNewInputChange(val)}
                color = "white"
            />
            {data.check_newInputChange ?
            <Feather
                name="check-circle"
                color="green"
                size={20}
             />
             : null }
        </View>
           <View style={styles.row}>
                <View style={styles.section}>
                    <TouchableOpacity
                        style = {[styles.signIn ]}
                        onPress= {() => handleUpdate()}>
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
                         color = "gray"
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

export default ChangeUsernameScreen;

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
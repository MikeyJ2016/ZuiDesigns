import React from 'react';
import {View, Text,Button,StyleSheet,FlatList, Statusbar,ScrollView,TouchableOpacity,ActivityIndicator } from 'react-native'
import {useTheme } from '@react-naviagtion/native';
import LinearGradient from 'react-native-linear-gradient';
import  {useState,useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext } from '../Components/context.js';

const LockerCheckout = ({navigation}) => {

    const {updateOwn,getOwned,getUser} = React.useContext(AuthContext);
    const [data, setData] = React.useState([]);
    const [alert, setAlert] = React.useState(false);
    const [isLoading, setLoading] = useState(true);

    const fetchData = async() => {
      await fetch('https://www.zuidesigns.com/sp2021/nodeExample.cgi?')
        .then(response => response.json())
        .then(res => setData(res.users))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }

     useEffect(() =>{
          fetchData();
          const willFocusSubscription = navigation.addListener('focus', () => {
            fetchData();
        });

        return willFocusSubscription;
    }, []);

      const pressHandler = (id) => {
        const newData = [...data];
        newData.forEach((prevData) => {
          if(prevData.NodeNumber == id){
          if(prevData.isSelected === undefined ){
                      prevData.isSelected = true;
          }
                prevData.isSelected = !prevData.isSelected;
          }else{
            prevData.isSelected = false
          }
        })

        setData(newData);
      };

        const selection = async() => {

          const newData = [...data];
          let temp = getOwned();

          newData.forEach((data) => {
              if(getOwned() == null){
                  if(data.isSelected && data.Ownership == 0){
                    data.Ownership = 1;
                    updateOwn(data);
                    fetch('https://www.zuidesigns.com/sp2021/nodeExample.cgi?input_request=updateOwnedNode&node_number=' + `${data.NodeNumber}` +'&ownership=' + `${getUser()}`)
                    .catch((error) => console.error(error));
                    fetch('https://www.zuidesigns.com/sp2021/userExample.cgi?input_request=updateOwnedNode&username=' + `${getUser()}` + '&ownedNode=' +`${data.NodeNumber}`)
                    .catch((error) => console.error(error));
                    navigation.navigate('User Home Page');
                  }
              }else{
                setAlert(true);
              }
          })
        };


    return (
    <View style={styles.container}>
      <Text style = {styles.text_header}> Select Any Locker</Text>
      <View style={styles.container ,{height:300,width :300 ,
         borderWidth: 5, borderColor: 'white'  }}>
        <FlatList data = {data} keyExtractor={(item, index) => item.NodeNumber} renderItem={({item}) =>
        (item.Ownership !== "0" ? null :
              <TouchableOpacity style = {styles.signIn}
                onPress = {() => pressHandler(item.NodeNumber)}
               >
                   <LinearGradient
                       colors ={['#fff','#fff']}
                       style={[styles.signIn,{ flexDirection: 'row'}]}
                   >
                       <Text style ={[styles.textSign,{
                           color:'#000'
                       }]}>Locker {item.NodeNumber}</Text>
                      {item.isSelected ?

                      <Feather
                          name="check-circle"
                          color="green"
                          size={20}
                       />
                       : null }

                   </LinearGradient>

               </TouchableOpacity>)}>
        </FlatList>
      </View>
        {!alert ? null :
        <Text style = {{color: 'red'}}> You already own Locker {getOwned().NodeNumber} </Text>
        }
           <View style={styles.row}>
                    <TouchableOpacity
                        style = {[styles.side_by_side ]}
                        onPress= {() => selection()}>
                        <LinearGradient
                            colors ={['#6E6969','#6E6969']}
                            style={styles.side_by_side}
                        >
                            <Text style ={[styles.textSign,{
                                color:'#fff'
                            }]}>Checkout</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style = {[styles.side_by_side ]}
                        onPress= {() => navigation.navigate('User Home Page')}>
                        <LinearGradient
                            colors ={['#08d4c4','#01ab9d']}
                            style={styles.side_by_side}
                        >
                            <Text style ={[styles.textSign,{
                                color:'#fff'
                            }]}>Return Home</Text>
                        </LinearGradient>
                    </TouchableOpacity>
            </View>
    </View>
    );
};

export default LockerCheckout;

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
        borderColor : "black",
        borderWidth: 2
    },
    side_by_side : {
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            paddingHorizontal : 5,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    row: {
      marginTop: 100,
      marginLeft: 100,
      marginRight: 100,
      marginHorizontal : 400 ,
      paddingHorizontal : 20,
      flexDirection: 'row',
      flex : 1
    }
  });
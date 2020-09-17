import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect, useSelector, useDispatch} from 'react-redux';
import {setAuth} from '../../actions/authAction';
import {login} from '../../service/Api';
import styles from './LoginStyles';

export default function LoginScreen() {
  
  const [inputValue, setInputValue] = useState({
    email: 'cee@cee.com',
    password: '123456',
  });

  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const onChangeInput = (value, name) => {
    setInputValue((prev) => ({...prev, [name]: value}));
  };

  const onLogin = async () => {
    // alert(JSON.stringify(inputValue))
    try {
      const result = await login(inputValue);
      console.log('result', result);
      // if(result.data.token)
      //dispatch({type:"abc", data:"xyz"})
      dispatch(setAuth(result.data.token));
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {/* <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} /> */}
        <Image
          style={{
            width: 150,
            height: 150,
            alignSelf: 'center',
            marginTop: '20%',
          }}
          source={require('../../images/ins.png')}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeInput(text, 'email')}
          value={inputValue.email}
          placeholder="Your Email"
        />
        <TextInput
          style={[styles.input, {marginTop: 20}]}
          onChangeText={(text) => onChangeInput(text, 'password')}
          value={inputValue.password}
          placeholder="Your Password"
        />
        <TouchableOpacity style={styles.btnLogin} onPress={onLogin}>
          <Text style={styles.txtLogin}>Login</Text>
        </TouchableOpacity>
        {/* <Text>
          No count
          <Text style={{ color: 'red' }}>Signup</Text>
        </Text> */}
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginRight: 10}}>No account</Text>
          <Text style={{color: 'red'}}>Signup</Text>
        </View>
      </View>
    </ScrollView>
  );
}

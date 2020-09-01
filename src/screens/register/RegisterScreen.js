import styles from "./RegisterStyles"
import React, { useState } from 'react'
import { View, Text, ScrollView, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default function RegisterScreen() {

    const [inputValue, setInputValue] = useState({})
    const onChangeInput=(value, name)=>{
        setInputValue(prev => ({...prev,[name] : value}))
    }

    const onSignUp=()=>{
        alert(JSON.stringify(inputValue))
    }

    return (
        <ScrollView style={{flex:1}}>
           <View style={{justifyContent:"center", alignItems:"center"}}>
               <Image 
                    style={{width:150, height:150, marginTop:"20%", alignSelf:"center"}}
                    source={require("../../images/ins.png")}/>

               <TextInput
                    style={styles.input}
                    placeholder="Your email"
                    onChangeText={text=> onChangeInput(text,"email")}
                    value={inputValue}
               />

                <TextInput
                    style={[styles.input, {marginTop:20}]}
                    placeholder="Your password"
                    onChangeText={text => onChangeInput(text, "password")}
                    value={inputValue}
                />

                <TextInput
                    style={[styles.input, { marginTop: 20 }]}
                    placeholder="Confirm password"
                    onChangeText={text => onChangeInput(text, "confirm")}
                    value={inputValue}
                />

                <TextInput
                    style={[styles.input, { marginTop: 20 }]}
                    placeholder="First name"
                    onChangeText={text => onChangeInput(text, "firstname")}
                    value={inputValue}
                />

                <TextInput
                    style={[styles.input, { marginTop: 20 }]}
                    placeholder="Last name"
                    onChangeText={text => onChangeInput(text, "lastname")}
                    value={inputValue}
                />

                <TouchableOpacity style={styles.btnSignUp} onPress={onSignUp}>
                    <Text style={styles.txtSignUp}>Sign Up</Text>
                </TouchableOpacity>

                <View style={{flexDirection:"row", marginTop:10}}>
                    <Text style={{marginRight:10}}>Already have an account</Text>
                    <Text style={{color:"red"}}>Login now</Text>
                </View>
           </View>
        </ScrollView>
    )
}

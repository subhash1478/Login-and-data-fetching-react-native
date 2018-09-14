import React from 'react';
import { View, Text,TextInput, StyleSheet,TouchableOpacity ,Button,AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {doLogin} from '../services/webservices'
import {ShowSuccess,ShowError} from '../services/ShowMessage'
class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }
  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  _storeData = async () => {
     try {
      await AsyncStorage.setItem('TASKS', 'I like to save it.');
    } catch (error) {
      // Error saving data
    }
  }
  login = (email, pass) => {
    this._storeData()

    let obj={
      email:email,
      password:pass
    }
    doLogin(obj)
    .then((res) => {
      if(res.success==true){
        ShowSuccess(res.data.message)
        Actions.Register()
      }else{
        ShowError(res.message)
      }
    },(err)=>{
      alert(JSON.stringify(err))
    });
  }
  render() {
    return (
      <View style = {styles.container}>
      <TextInput style = {styles.input}   
      underlineColorAndroid = "transparent"     
      placeholder = "Email"
      placeholderTextColor = "#9a73ef"      autoCapitalize = "none"      onChangeText = {this.handleEmail}/>
      <TextInput style = {styles.input}      underlineColorAndroid = "transparent"      placeholder = "Password"
      placeholderTextColor = "#9a73ef"      autoCapitalize = "none"      onChangeText = {this.handlePassword}/>
      <TouchableOpacity      style = {styles.submitButton}      onPress = {
        () => this.login(this.state.email, this.state.password)
      }>
      <Text style = {styles.submitButtonText}> Submit </Text>
      </TouchableOpacity>
      </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      paddingTop: 23
    },
    input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
    },
    submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
    },
    submitButtonText:{
      color: 'white'
    }
  })
  export default Login;
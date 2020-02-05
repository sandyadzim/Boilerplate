import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, Image, ScrollView, StatusBar } from 'react-native';
import {Button, Text, Item, Input, Label } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      nohp: '' ? '' : this.props.navigation.getParam('noHp'),
      register: false,
      submitDisabled: true
    };
  }

  handleSignUp = () => {
    const paramNo = this.props.navigation.getParam('noHp')
    console.log(paramNo)
    const name = String(this.state.name)
    const email = String(this.state.email).toLowerCase()      
    const nohp = String(this.state.nohp)
      if(name !== '' && email !== '' && nohp !== ''){
        alert('Success!')
        this.setState({name: ''})
        this.setState({email: ''})
        this.props.navigation.navigate('Success')
      }else{
        alert('Nama/Email/Password sudah digunakan/salah')
      }
  }

  loadingIndicator = () => {
    if (this.state.register) {
      return (
        <View style={{marginTop:15}}>
            <ActivityIndicator color='#567dbe' size='large' />
        </View>
      )
    }
    return (
      <Button block style={styles.btnSubmit} onPress={() => this.handleSignUp()}>
        <Text style={styles.txtBtnSubmit}>Submit</Text>
      </Button>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#83a4db' barStyle='default' />
        <LinearGradient colors={['#567dbe', '#83a4db']} style={styles.gradient}>
          <View style={styles.viewLogo}>
            <Image source={require('../image/logoo.png')} style={styles.logo} />
          </View>
          <Text style={styles.txtTitle}>Sign Up</Text>     
          <View style={styles.viewForm}>
          <ScrollView>
            <Label style={styles.labelName}>Name</Label>
                <Item style={styles.itemForm}>
                    <Icon name='id-card' style={styles.iconForm2} />
                    <Input 
                      placeholder='Edutore'
                      placeholderTextColor='#ddd'
                      keyboardType='default'
                      value={this.state.name}
                      onChangeText={(text) => this.setState({name: text})}
                      style = {styles.txtInput}
                    />
                </Item>
                <Label style={styles.labelEmail}>Email</Label>
                <Item style={styles.itemForm}>
                    <Icon name='envelope' style={styles.iconForm} />
                    <Input 
                      placeholder='admin@xxx.com'
                      placeholderTextColor='#ddd'
                      keyboardType='email-address'
                      autoCapitalize='none'
                      value={this.state.email}
                      onChangeText={(text) => this.setState({email: text})}
                      style = {styles.txtInput}
                    />
                </Item>
                <Label style={styles.labelNohp}>Password</Label>
                <Item style={styles.itemForm}>
                    <Icon name='phone' style={styles.iconForm3} />
                    <Input 
                      placeholder='+628xxxxxxxxxx'
                      placeholderTextColor='#ddd'
                      keyboardType='number-pad'
                      value={this.state.nohp}
                      onChangeText={(text) => this.setState({ nohp: text })}
                      style = {styles.txtInput}
                    />
                </Item>
                {this.loadingIndicator()}
                </ScrollView>
          </View>

        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gradient: {
    flex: 1
  },
  viewLogo: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height:300,
    width: 300,
    marginTop: '5%'
  },
  txtTitle: {
    fontSize:24, 
    fontFamily: 'ElliotSans-Bold', 
    textAlign: 'center', 
    marginVertical:10, 
    color:'white'
  },
  viewForm: {
    flex: 2,
    marginTop: 20,
    marginHorizontal: 20
  },
  labelName: {
    fontFamily: 'ElliotSans-Bold', 
    textAlign: 'left',
    color: 'white'
  },
  labelEmail: {
    fontFamily: 'ElliotSans-Bold', 
    textAlign: 'left',
    color: 'white',
    marginTop:15
  },
  labelNohp: {
    fontFamily: 'ElliotSans-Bold', 
    textAlign: 'left',
    color: 'white',
    marginTop:15
  },
  itemForm: {
    backgroundColor: '#83a4db', 
    borderBottomWidth: 0, 
    borderRadius: 5
  },
  iconForm: {
    color: '#83a4db',
    fontSize:24,
    backgroundColor:'#fff',
    paddingHorizontal:13,
    paddingVertical:13,
    borderTopLeftRadius:2,
    borderBottomLeftRadius:2
  },
  iconForm2: {
    color: '#83a4db',
    fontSize:24,
    backgroundColor:'#fff',
    paddingHorizontal:10,
    paddingVertical:13,
    borderTopLeftRadius:2,
    borderBottomLeftRadius:2
  },
  iconForm3: {
    color: '#83a4db',
    fontSize:24,
    backgroundColor:'#fff',
    paddingHorizontal:17,
    paddingVertical:13,
    borderTopLeftRadius:2,
    borderBottomLeftRadius:2
  },
  btnSubmit: {
    marginTop: 15,
    backgroundColor: '#567dbe',
    borderRadius: 5
  },
  txtBtnSubmit: {
    fontFamily: 'SonderSans-Black',
    fontSize: 18
  },
  txtInput: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'ElliotSans-Bold'
  }
})

export default Register;

import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, Image, StatusBar, ScrollView, Alert } from 'react-native';
import { Button, Text, Item, Input, Label } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noDefault: '+62',
            noHp: '',
            numberPhone: '',
            password: '',
            login: false
        };
    }

    loadingIndicator = () => {
        if (this.state.login) {
            return (
                <View style = {{ marginTop: 15 }}>
                    <ActivityIndicator color = '#567dbe' size = 'large' />
                </View>
            )
        }
        return (
            <View>
                <Button block style = {styles.buttonSubmit} onPress = {() => this.handleOtpSms() } >
                    <Text style = {styles.txtButtonSubmit} > Verification with SMS  </Text>
                </Button>
                <Button block style = {styles.buttonSubmit} onPress = {() => this.handleOtpWhatsapp() }>
                    <Text style = {styles.txtButtonSubmit} > Verification with WhatsApp</Text>
                </Button>
            </View>
        )
    }

    handleOtpSms = async () => {
        if (this.state.noHp !== ''){
            this.setState({
                numberPhone: this.state.noDefault + this.state.noHp
            })
            Alert.alert(
                'Terimakasih!',
                'Kode Verifikasi untuk Login Kamu Sudah Kami Kirimkan ke Nomor Handphone ' + this.state.noDefault + this.state.noHp,
                [
                    {text: 'OK', onPress: () => this.props.navigation.navigate('Verification',{
                        noHp: this.state.numberPhone
                    })}
                ]
            )
        } else {
            Alert.alert(
                'GAGAL!',
                'Nomor yang Anda Masukkan Salah/Kosong',
                [
                    {text: 'OK', onPress: () => console.log('OKE')}
                ]
            )
            await this.setState({noHp: ''})
        }
    }

    handleOtpWhatsapp =  async () => {
        if (this.state.noHp !== ''){
            Alert.alert(
                'Terimakasih!',
                'Kode Verifikasi untuk Login Kamu Sudah Kami Kirimkan ke Nomor WhatsApp ' + this.state.noDefault + this.state.noHp,
                [
                    {text: 'OK', onPress: () => console.log('OK!')}
                ]
            )
        } else {
            Alert.alert(
                'GAGAL!!',
                'Nomor yang Anda Masukkan Salah/Kosong ',
                [
                    {text: 'OK', onPress: () => console.log('OK!')}
                ]
            )
            await this.setState({noHp: ''})
        }
    }

    render() {
        return (
            <View  style = { styles.container }>
		        <StatusBar backgroundColor = '#567dbe' barStyle = 'default' />
		        <LinearGradient colors = {['#567dbe', '#83a4db']} style = { styles.gradient }>
                    <View style = { styles.viewLogo } >
            		   <Image source = { require('../image/logoo.png') } style = { styles.logo }/>
			        </View>
                        <Text style = { styles.txtMain } > Sign In </Text>
                        <Text style = { styles.txtsubMain } > Sign In With Your Phone Number </Text>
                        <View style = { styles.viewForm } >
                            <ScrollView>
                                <Label style = { styles.labelUsername } > Phone Number </Label>
                                <Item style = { styles.itemForm } >
                                    <Text style = { styles.iconForm }>{this.state.noDefault}</Text>
                                    <Input
                                    placeholder = '8xxxxxxxxxx'
                                    placeholderTextColor="#eee" 
                                    keyboardType = 'phone-pad'
                                    // onKeyPress = {() => this.validateSignIn('username') }
                                    value = { this.state.noHp }
                                    onChangeText = {(text) => this.setState({ noHp: text }) } style = {styles.inputTxt}/>
                                </Item>
                                { this.loadingIndicator() }
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 300,
        width: 300,
        marginTop: '5%'
    },
    txtMain: {
        fontFamily: 'ElliotSans-Bold',
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 10
    },
    txtsubMain: {
        fontFamily: 'ElliotSans-BoldItalic',
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    viewForm: {
        flex: 2,
        marginTop: 20,
        marginHorizontal: 20
    },
    labelUsername: {
        fontFamily: 'ElliotSans-Bold',
        textAlign: 'left',
        color: 'white'
    },
    itemForm: {
        backgroundColor: '#83a4db',
        borderBottomWidth: 0,
        borderRadius: 5
    },
    buttonSubmit: {
        marginTop: 15,
        backgroundColor: '#567dbe',
        borderRadius: 5
    },
    txtButtonSubmit: {
        fontFamily: 'SonderSans-Black',
        fontSize: 18
    },
    iconForm: {
        color: '#83a4db',
        fontSize: 24,
        backgroundColor: '#fff',
        paddingHorizontal: 13,
        paddingVertical: 13,
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2,
        fontFamily: 'ElliotSans-Bold'
    },
    inputTxt: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'ElliotSans-Bold'
    }
});

export default Login;
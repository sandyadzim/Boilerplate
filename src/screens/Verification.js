import React, { Component } from 'react';
import { View, StyleSheet, Image, StatusBar, ScrollView, Alert } from 'react-native';
import { Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import CodeInput from 'react-native-confirmation-code-input';

class Verification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    };
  }

  handleVerification =  () => {
    const noHp = this.props.navigation.getParam('noHp')
    Alert.alert(
        'Success',
        'Your Verification Success! ',
        [
          {text: 'OK', onPress: () => this.props.navigation.navigate('Register',{
            noHp: noHp
          })}
        ]
    )
    console.log(noHp)
}

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor = '#567dbe' barStyle = 'default' />
        <LinearGradient colors = {['#567dbe', '#83a4db']} style = { styles.gradient }>
          <View style = { styles.viewLogo } >
            <Image source = { require('../image/logoo.png') } style = { styles.logo }/>
			    </View>
          <ScrollView>
          <Text style = { styles.txtMain } > Input Your Code Verification </Text>
            <CodeInput
              ref="codeInputRef"
              keyboardType="numeric"
              codeLength={6}
              className='border-circle'
              compareWithCode='123456'
              autoFocus={false}
              activeColor='#fff'
              inactiveColor='#ddd'
              codeInputStyle={{ fontWeight: '500' }}
              onFulfill={() => this.handleVerification()}
            />
          </ScrollView>
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
      fontFamily: 'ElliotSans-BoldItalic',
      color: 'white',
      fontSize: 18,
      textAlign: 'center'
  }
});

export default Verification;

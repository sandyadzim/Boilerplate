import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Text, Button } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isSuccess: true
    };
  }

  render() {
      if (this.state.isSuccess == true) {
          return (
            <View style={{flex:1, justifyContent:'center'}}>
                <LinearGradient colors = {['#567dbe', '#83a4db']} style = {{ flex: 1, justifyContent:'center'}}>
                    <Icon name='check' style={{color: '#fff', fontSize: 250, alignSelf:'center'}} />
                    <View style={{width:'50%', alignSelf:'center'}}>
                        <Button block style={{borderRadius: 30, backgroundColor:'#fff'}} onPress={() => this.props.navigation.navigate('Home')}>
                            <Text style={{color: '#1e9cd7'}}>Next</Text>
                        </Button>
                    </View>
                </LinearGradient>
            </View>
          )
      }
    return (
      <View style={{flex:1, justifyContent:'center'}}>
        <LinearGradient colors = {['#567dbe', '#83a4db']} style = {{ flex: 1, justifyContent:'center'}}>
            <ActivityIndicator color = '#fff' size = 'large' />
        </LinearGradient>
      </View>
    );
  }
}

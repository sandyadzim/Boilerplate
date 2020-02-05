import React, { Component } from 'react';
import {View} from 'react-native';
import {Button, Text} from 'native-base'

class Profile extends Component {
    render() {
        return (
            <View>
                <Text>Ini Screen Profile</Text>
                <Button danger onPress={() => this.props.navigation.navigate('Home')}>
                    <Text>Kembali ke Home</Text>
                </Button>
            </View>
        );
    }
}

export default Profile;
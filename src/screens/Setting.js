import React, { Component } from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';
import {Button, Text, Header, Body, Right, Left, Icon, Card} from 'native-base'
import Icon2 from 'react-native-vector-icons/FontAwesome'

class Setting extends Component {
    render() {
        return (
            <View style={styles.container}>
            <StatusBar backgroundColor='#567dbe' barStyle='default' />
                <Header style={styles.barHeader}>
                    <Left>
                        <Icon2 name ='arrow-left' style={styles.iconBack} onPress={() => this.props.navigation.goBack()} />
                    </Left>
                    <Body style={styles.barBody}>
                        <Text style={styles.txtBar}>Setting</Text>
                    </Body>
                </Header>
                <View style={styles.firstView}>
                        <Image source={require('../image/logoo.png')} style={styles.imgProfile} />
                        <View style={{marginTop:'13%'}}>
                            <Text style={styles.txtProfle}>Admin</Text>
                        </View>    
                        <Icon2 name='pencil' style={styles.iconEdit} />
                </View>
                <View>
                    <Card style={styles.cardView}>
                        <Icon2 name='envelope' style={styles.iconEmail} />
                        <Text style={styles.txtEmail}>admin@gmail.com</Text>
                    </Card>
                </View>
                <View>
                    <Card style={styles.cardView}>
                        <Icon2 name='phone' style={styles.iconEmail} />
                        <Text style={styles.txtEmail}>+62 8xx xxxx xxxx</Text>
                    </Card>
                </View>
                <View style={styles.buttonLogout}>
                    <Button danger block onPress={() => this.props.navigation.navigate('Login')}>
                        <Text>Logout</Text>
                    </Button>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    barHeader:{
        backgroundColor:'#567dbe'
    },
    iconBack:{
        fontSize:24, 
        color:'white'
    },
    barBody:{
        alignItems:'center', 
        marginRight: '20%'
    },
    txtBar:{
        textAlign:'center', 
        fontSize:22, 
        color:'#fff'
    },
    firstView:{
        flexDirection:'row',
        backgroundColor:'#567dbe',
        borderBottomRightRadius: 50,
    },
    cardView:{
        flexDirection:'row', 
        width:'94%', 
        marginLeft: '3%'
    },
    imgProfile:{
        width:100, 
        height:100, 
        backgroundColor:'#ebc634', 
        borderRadius:50, 
        margin:'3%'
    },
    txtProfle:{
        borderBottomWidth:1, 
        fontSize:18, 
        fontStyle:'italic',
        color:'#fff',
        borderBottomColor:'#fff'
    },
    iconEdit:{
        fontSize:18, 
        marginTop:'13%', 
        marginLeft:'3%',
        color:'#fff'
    },
    buttonLogout:{
        width: '94%',
        marginLeft: '3%'
    },
    iconEmail:{
        color:'#567dbe',
        fontSize:24,
        margin:'3%'
    },
    txtEmail:{
        fontSize: 20,
        color: '#567dbe',
        marginTop:'3%',
        fontStyle:'italic'
    }
});

export default Setting;
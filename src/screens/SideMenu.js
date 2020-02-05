import React, {Component} from 'react'
import {View, StyleSheet, SafeAreaView, Image, ScrollView} from 'react-native'
import {List, ListItem, Icon, Text} from 'native-base'
import Icon2 from 'react-native-vector-icons/FontAwesome'

export class SideMenu extends Component {

    render() {
      let {container, imageUser} = styles;
      return (
        <SafeAreaView style={container}>
        <Icon name='close' style={styles.iconX} onPress={() => this.props.navigation.closeDrawer()} />
          <View style={imageUser}>
            <Image 
            source={require('../image/logoo.png')} 
            style={styles.imageProfile}/>
            <Text style={styles.userName} >Admin</Text>
          </View>
          <ScrollView>
            <List>  
              <ListItem onPress={() => this.props.navigation.closeDrawer()}  >
                <Icon2 name='home' style={styles.iconHome} />
                <Text>Beranda</Text>
              </ListItem>
              <ListItem onPress={() => this.props.navigation.navigate('Setting')}>
                  <Icon2 name='cog' style={styles.iconSetting} />
                  <Text>Setting</Text>
              </ListItem>
              <ListItem onPress={() => this.props.navigation.navigate('Profile')}>
                  <Icon2 name='user' style={styles.iconProfile} />
                  <Text>Profile</Text>
              </ListItem> 
            </List>

          </ScrollView>

            <List>                   
            
            </List>

        </SafeAreaView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageUser: {
      height: 150, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    iconX:{
        textAlign:'left', 
        marginLeft: '5%'
    },
    iconSetting:{
        fontSize:24, 
        marginHorizontal:'5%'
    },
    iconProfile:{
        fontSize:24, 
        marginHorizontal:'6%'
    },
    imageProfile:{
        height: 120, 
        width: 120,
        borderRadius: 60, 
        backgroundColor:'#83a4db'
    },
    userName:{
        fontStyle:'italic',
        fontSize:24,
        fontWeight: 'bold',
    },
    iconHome:{
      fontSize:24,
      marginHorizontal:'4%'
    }
})
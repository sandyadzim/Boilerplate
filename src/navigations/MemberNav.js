import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions, Image } from 'react-native'
import Home from '../screens/Home';
import Verification from '../screens/Verification';
import Setting from '../screens/Setting';
import Profile from '../screens/Profile';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Success from '../screens/Success';
import Keranjang from '../screens/Keranjang';
import Langganan from '../screens/Langganan';
import { SideMenu } from '../screens/SideMenu';
import Icon from 'react-native-vector-icons/FontAwesome'


// const MemberNav = createStackNavigator({
//     Home : {
//         screen: Home,
//         navigationOptions:{
//             header: null
//         }
//     }
// },
// {
//     initialRouteName: 'Home'
// })

const authStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Verification: {
        screen: Verification,
        navigationOptions: {
            header: null
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            header: null
        }
    },
    Success: {
        screen: Success,
        navigationOptions: {
            header: null
        }
    }
})

// const MainStack = createStackNavigator({
//   Home: {
//       screen: MemberNav,
//       navigationOptions: {
//           header: null
//       }
//   },
//   Setting: {
//       screen: Setting,
//       navigationOptions: {
//           header: null
//       }
//     },
//   Profile: {
//       screen: Profile,
//       navigationOptions: {
//           header: null
//       }
//     }
// },
// {
//   initialRouteName: 'Home'
// });

const BottomTabNav = createMaterialBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) => (
                <Icon name='houzz' size={25} color={(tintColor)} />
            ),
            activeColor: '#1e9cd7'
        }
    },
    Langganan: {
        screen: Langganan,
        navigationOptions: {
            tabBarLabel: 'Langganan',
            tabBarIcon: ({tintColor}) => (
                <Icon name='sticky-note' size={25} color={(tintColor)} />
            ),
            activeColor: '#1e9cd7'
        }
    },
    Keranjang: {
        screen: Keranjang,
        navigationOptions: {
            tabBarLabel: 'Keranjang',
            tabBarIcon: ({tintColor}) => (
                <Icon name='shopping-cart' size={25} color={(tintColor)} />
            ),
            activeColor: '#1e9cd7'
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Akun',
            tabBarIcon: ({tintColor}) => (
                <Icon name='user' size={25} color={(tintColor)} />
            ),
            activeColor: '#1e9cd7'
        }
    }
},
{
    initialRouteName: 'Home',
    tabBarOptions: {
        activeTintColor: '#1e9cd7'
    },
    barStyle: {
        backgroundColor: '#f2f2f2'
    }
})

const appDrawer = createDrawerNavigator(
  {
      drawer: BottomTabNav
  },
  {
      contentComponent: SideMenu,
      drawerWidth: (Dimensions.get('window').width) * 3/4,
      drawerPosition:'right'
  });

  const RootNav = createSwitchNavigator(
  {
      app: appDrawer,
      auth: authStack,
      bottomTab: BottomTabNav
  }, 
  {
      initialRouteName: 'bottomTab'
  })

export default createAppContainer(RootNav);
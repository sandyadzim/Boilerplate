import React from 'react'
import {View, StyleSheet} from 'react-native'
import { DrawerItems } from 'react-navigation'

const CustomDrawer = props => (
    <View style={styles.container}>
        <DrawerItems 
            activeBackgroundColor={'black'}
            activeTintColor={'white'}
            iconContainerStyle={styles.icon}
            {...props}
        />
    </View>
)

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    icon:{
        width:30
    }
})

export default CustomDrawer;
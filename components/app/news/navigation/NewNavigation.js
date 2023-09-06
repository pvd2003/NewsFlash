import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Detail from '../screens/Detail'
import Home from '../screens/Home'
import Add from '../screens/Add'
import Profile from '../screens/Profile'
import {Image} from 'react-native'


const Tab = createBottomTabNavigator();



const NewNavigation = () => {
    const icon = (route) => {
        return {
            tabBarIcon: ({ focused }) => {
                if (route.name == "Home") {
                    if (focused) {
                        return <Image source={require('../../../../media/image/home2.png')}
                            style={{ width: 20, height: 20 }} />
                    } else {
                        return <Image source={require('../../../../media/image/home.png')}
                            style={{ width: 20, height: 20 }} />
                    }
                } 
                else if (route.name == "Add") {
                    if (focused) {
                        return <Image source={require('../../../../media/image/explore2.png')}
                            style={{ width: 20, height: 20 }} />
                    } else {
                        return <Image source={require('../../../../media/image/explore.png')}
                            style={{ width: 20, height: 20 }} />
                    }
                } 
                else if (route.name == "Detail") {
                    if (focused) {
                        return <Image source={require('../../../../media/image/bookmark2.png')}
                            style={{ width: 20, height: 20 }} />
                    } else {
                        return <Image source={require('../../../../media/image/bookmark.png')}
                            style={{ width: 20, height: 20 }} />
                    }
                } 
                else if (route.name == "Profile") {
                    if (focused) {
                        return <Image source={require('../../../../media/image/profile2.png')}
                            style={{ width: 20, height: 20 }} />
                    } else {
                        return <Image source={require('../../../../media/image/profile.png')}
                            style={{ width: 20, height: 20 }} />
                    }
                }
            },
            headerShown: false
        }
    }

    return (

        <Tab.Navigator
        screenOptions={({route}) => icon(route)}>
            <Tab.Screen
                name="Home"
                component={Home} />
            <Tab.Screen
                name="Detail"
                component={Detail} />
            <Tab.Screen
                name="Add"
                component={Add} />
            <Tab.Screen
                name="Profile"
                component={Profile} />
        </Tab.Navigator>
    )
}

export default NewNavigation
import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useContext, createContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const MH1 = (props) => {
//     const { navigation } = props;
//     const [age, setAge] = useState(20);
//     const [count, setCount] = useContext(AppContext);
//     return (
//         <View>
//             <Text>Man Hinh 1: {count}</Text>

//             <Button
//                 title='Tang'
//                 onPress={() => setCount(count + 1)} />

//             <Button
//                 title='Giam'
//                 onPress={() => setCount(count - 1)} />

//             <Button
//                 title='Chuyen sang man hinh 1'
//                 onPress={() => navigation.navigate('MH2', { abc: age })} />
//         </View>
//     )
// }

const MH1 = (props) => {
    const { navigation } = props;
    // const [age, setAge] = useState(20);
    const { count, setCount } = useContext(AppContext);
    return (
        <View>
            <Text>Màn hình 1: {count}</Text>
            <Button
                title='Tăng'
                onPress={() => setCount(count + 1)} />
            <Button
                title='Giảm'
                onPress={() => setCount(count - 1)} />
            <Button
                title='Chuyển sang Màn hình 2'
                onPress={() => navigation.navigate('MH2',
                    { abc: age })} />
        </View>
    )
}

const MH2 = (props) => {
    const { navigation, route } = props;
    const { abc } = route?.params
    return (
        <View>
            <Text>Man Hinh 2: {abc}</Text>
            <Button
                title='Chuyen sang man hinh 1'
                onPress={() => navigation.navigate('MH1')} />
        </View>
    )
}

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

//Khoi tao Context cho App
const AppContext = createContext();
const AppProvider = (props) => {
    const { children } = props;
    const [count, setCount] = useState(0);
    return (

        <AppContext.Provider value={{ count, setCount }}>
            {children}
        </AppContext.Provider>
    )
}

const PhuDao = () => {
    return (
        <AppProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="MH1"
                    screenOptions={{ headerShown: true }}>
                    <Stack.Screen name="MH1" component={MH1} />
                    <Stack.Screen name="MH2" component={MH2}
                        initialParams={{ abc: 18 }} />
                </Stack.Navigator>
            </NavigationContainer>
        </AppProvider>

    )
}

export default PhuDao

const styles = StyleSheet.create({})
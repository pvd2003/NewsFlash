import { StyleSheet, Text, View, Image,
         TextInput, Alert, Button } from 'react-native'
import React, { useState } from 'react'


const PhuDao2 = () => {
    const [name, setName] = useState('');

    const onLogin = () => {
        if (!name) {
            Alert.alert('Chua dien vao cho trong');
        }
        else if(name.trim().length == 0){
            Alert.alert('Khong de khoang trang');
        }
        else if(name.trim().length > 50){
            Alert.alert('khong viet qua 50 ki tu');
        }
        else {
            Alert.alert('Login success');
        }
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.avata}
                source={require('../../../media/image/imgePhuDao/Rectangle.png')} />

            <Text style={styles.title}>
                Lets Get Started
            </Text>
            <View style={styles.inputContainer}>

                <TextInput 
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
                />

                <Image
                style={styles.iconUser}
                source={require('../../../media/image/imgePhuDao/user.png')} />
            </View>

            <Button 
            title='Login'
            onPress={onLogin}/>


        </View>
    )
}

export default PhuDao2

const styles = StyleSheet.create({

    input: {
        height: 52,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingLeft: 60,
    },
    iconUser: {
        position: 'absolute',
        top: 13,
        left: 42,
        zIndex: 1
    },
    inputContainer: {
        paddingHorizontal: 24,
        position: 'relative',
    },
    title: {
        marginTop: 12,
        fontWeight: '700',
        fontSize: 24,
        textAlign: 'center',
        color: '#fff',
        lineHeight: 29,
        textTransform: 'capitalize'

    },
    avata: {
        width: '100%',
        height: 380,
    },
    container: {
        flex: 1,
        backgroundColor: '#FF8B6A'

    },
})
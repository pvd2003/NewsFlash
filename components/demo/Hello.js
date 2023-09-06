
import { View, Text, Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Hello = () => {
    const [name, setName] = useState("Văn Đức")
    console.log('>>>>Hello', name)

    const ChangeName = () => {
        setName('Văn Phan')
    }

    return (
        <View>
            <Text>Hello: {name}</Text>
            <Image
                source={require('../../media/image/hinh.jpg')}
                style={{ with: 150, height: 300 }}>

            </Image>


            <TextInput
                placeholder='Enter your name'
                value={name}
                onChangeText={text => setName(text)}>
            </TextInput>

            <Button
                onPress={ChangeName}
                title='Click'>

            </Button>

        </View>
    )
}

export default Hello
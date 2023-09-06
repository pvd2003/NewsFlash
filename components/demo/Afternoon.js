import { View, Text, TextInput, Button, ToastAndroid } from 'react-native'
import React, {useState} from 'react'

const Afternoon = () => {
    const [inputNumber, setInputNumber] = useState('')
    const [result, retresult] = useState('')

    const xoSo = () => {
        const random =Math.floor(Math.random()*100)
        retresult(random)
        if (random == inputNumber) {
            ToastAndroid.show("Chuc mung da trung", ToastAndroid.LONG)
        } else {
            ToastAndroid.show("Chuc may man lan sau", ToastAndroid.LONG)
        }
    }

  return (
    <View>
      <Text>Xổ Số Kiến Thiết</Text>
      <TextInput
        placeholder='Nhập số của bạn'
        value={inputNumber}
        onChangeText={text => setInputNumber(text)}/>

<TextInput
        placeholder='Nhập số của bạn'
        value={inputNumber}
        onChangeText={text => setInputNumber(text)}/>
        
        <TextInput
        placeholder='Nhập số của bạn'
        value={inputNumber}
        onChangeText={text => setInputNumber(text)}/>
      
      <Button
        title='Nhấp Vào Đây'
        onPress={xoSo}/>

        <Text> {result} </Text>
    </View>
  )
}

export default Afternoon
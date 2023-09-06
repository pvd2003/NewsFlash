import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const ManHinh1 = (props) => {
    const {navigation} = props;
  return (
    <View>
      <Text >ManHinh1</Text>
      <Button
      title='Go to Screen2'
      onPress={() => navigation.navigate('ManHinh2',
      {hoten: 'Van Duc'})}/>
    </View>
  )
}

export default ManHinh1

const styles = StyleSheet.create({})
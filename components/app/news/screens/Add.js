import { StyleSheet, Text, View, Image, TextInput, Pressable, Alert } from 'react-native'
import React, { useContext, useState, useEffect, useCallback } from 'react'
import NewsContext from '../utilities/NewsContext'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Add = (props) => {

  const { navigation } = props;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const { uploadImage, addNews } = useContext(NewsContext);

  const imageResult = async (response) => {
    if (response.didCancel) {
      Alert.alert('User cancelled image picker');
    } else if (response.errorCode) {
      Alert.alert('ImagePicker Error: ', response.errorMessage);
    } else {
      //upload hinh len server
      response = response.assets[0];
      const formData = new FormData();
      formData.append('image', {
        uri: response.uri,
        type: response.type,
        name: response.fileName,
      });
      const res = await uploadImage(formData);
      setImage(res.path);

    }
  }

  const handleImage = useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra: true,
    }
    // launchCamera(options, imageResult);
    //Lua chon hinh
    Alert.alert('Camera', '', [
      {
        text: 'Chụp Hình',
        onPress: () => launchCamera(options, imageResult)
      },
      {
        text: 'Tải hình lên',
        onPress: () => launchImageLibrary(options, imageResult)
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel')
      },
    ])
  }, []);

  const handleSubmit = async () => {
    const res = await addNews( title, content, image);
    if(res){
      Alert.alert('Success', 'Add news successlly');
      setContent('');
      setTitle('');
      setImage('');
    }else{
      Alert.alert('Error', 'Add news error');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.chuaXacDinh}>
        <Image
          source={require('../../../../media/image/quit.png')} />
        <Text style={styles.tenChucNang}>
          Create News
        </Text>
        <Image
          source={require('../../../../media/image/bacham.png')} />
      </View>
      {image ?
        <Image
          source={{ uri: image }}
          style={styles.cover} />
        :
        <Pressable
          onPress={handleImage}
          style={styles.cover}>
          <Image
            source={require('../../../../media/image/plus.png')}
            style={styles.plus} />
          <Text style={styles.photo}>Add Your Photo</Text>
        </Pressable>}

      <TextInput
        style={styles.title}
        placeholder='News title'
        value={title}
        onChangeText={setTitle} />

      <TextInput
        style={styles.content}
        placeholder='Add News/Article'
        numberOfLines={10}
        value={content}
        onChangeText={setContent} />

      <Pressable
       onPress={handleSubmit}
       style={styles.coverBtn}>
        <Text 
          style={styles.btnPublish}>Publish</Text>
      </Pressable>
    </View>
  )
}

export default Add

const styles = StyleSheet.create({
  coverBtn: {
    backgroundColor: '#1877f2',
    borderRadius: 6,
  },
  chuaXacDinh: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  tenChucNang: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#000000',
  },
  content: {
    fontWeight: '400',
    lineHeight: 24,
    fontSize: 16,
    letterSpacing: 0.12,
    color: '#A0A3BD',
  },
  title: {
    fontWeight: '400',
    lineHeight: 36,
    fontSize: 24,
    letterSpacing: 0.12,
    color: '#A0A3BD',
  },
  btnPublish: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 13,
    fontWeight: '600',
    lineHeight: 24,
    fontSize: 16,
    letterSpacing: 0.12,
    color: '#fff',
    textAlign: 'center'

  },
  cover: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 183,
    backgroundColor: '#eef1f4',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#4e4b66',
    borderStyle: 'dashed'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  }
})
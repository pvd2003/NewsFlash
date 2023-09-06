import { StyleSheet, Text, View, Image, ScrollView, FlatList, Pressable } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import NewsContext from '../utilities/NewsContext'

const Home = (props) => {
  const { navigation } = props
  const { getNews } = useContext(NewsContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    //tu dong chay khi component duoc render
    //chay 1 lan duy nhat
  });
  
  useEffect(() => {
    //tu dong chay khi component duoc render
    //chay lan dau tien va moi khi co su thay doi state
    const get = async () => {
      const response = await getNews();
      setData(response);
    }
    get();
    return () => { }
  }, []);

  useEffect(()=>{},[data]);
     const renderItem = (props) => {
        const { item } = props;
        const { name,quantity,description,image ,_id} = item;
        var imglinkk = `http://172.16.65.84:9000/images/${image}`

        return (
            <Pressable 
            onPress ={() => navigation.navigate('Detail',{id:_id})}
            style={homeStyles.card}>
                <Image
                    source={{ uri: imglinkk }}
                    style={homeStyles.image}
                />
              <View style={homeStyles.information}>
                    <Text style={homeStyles.title}>{name}</Text>
                    <Text style={homeStyles.title}>{quantity}</Text>
                    <Text style={homeStyles.title}>{description}</Text>
                </View>
            </Pressable>
        )
    }


  const [refeshing, setRefeshing] = useState(false);
 
  const onRefesh = async () =>{
    setRefeshing(true);
    const response = await getNews();
    setData(response);
    setRefeshing(false);
  }


  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.NameLogo}>
        <Image
          source={require('../../../../media/image/logo.png')}
        />
        <Image
          source={require('../../../../media/image/thongbao.png')}
        />
      </View>

      <View style={homeStyles.chucNang}>
        <Text style={homeStyles.text1}>Latest</Text>
        <Text style={homeStyles.text2}>See all</Text>
      </View>

      <View style={homeStyles.chucNang2}>
        <View>
          <Text style={homeStyles.text3}>All</Text>
          <Image
            source={require('../../../../media/image/GachChan.png')}
          />
        </View>

        <Text style={homeStyles.text4}>Sports</Text>
        <Text style={homeStyles.text4}>Politics</Text>
        <Text style={homeStyles.text4}>Bussiness</Text>
        <Text style={homeStyles.text4}>Health</Text>
        <Text style={homeStyles.text4}>Travel</Text>
        <Text style={homeStyles.text4}>Science</Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        refreshing={refeshing}
        onRefresh={onRefesh}
      />

      {/* <ScrollView showsVerticalScrollIndicator= {false}>
        {
          data.map(item =>
            <View
              key={item._id}
            >{renderItem({item})}</View>
            )
        }
      </ScrollView> */}
    </View>
  )
}

export default Home

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },

  NameLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  chucNang: {
    marginTop: 36,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text1: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.12,
  },

  text2: {
    color: '#4E4B66',
    fontSize: 14,
  },

  chucNang2: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text3: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
    marginRight: 5,
    letterSpacing: 0.12,
  },

  text4: {
    color: '#4E4B66',
    fontSize: 16,
    marginRight: 5,
    letterSpacing: 0.12,
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    padding: 8,
  },

  image: {
    width: 86,
    height: 86,
    borderRadius: 6,
    marginRight: 4,
  },

  information: {
    flex: 1,
    height: 86,
  },

  category: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 20,
    color: '#4e4b66'
  },

  title: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: '#000'
  }

})

// var data = [
//   {
//     "_id": "63bfa809c4f47f0016aee205",
//     "title": "Ukraine's President Zelensky to BBC: Blood money being paid...",
//     "content": "Europe",
//     "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     "createdAt": "2023-01-12T06:26:17.539Z",
//     "createdBy": {
//       "_id": "63ac39aeedf7c80016c57a67",
//       "name": "",
//       "avatar": ""
//     }
//   },
//   {
//     "_id": "64bfa809c4f47f0016aee205",
//     "title": "Her train broke down. Her phone died. And then she met her..",
//     "content": "Travel",
//     "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     "createdAt": "2023-01-12T06:26:17.539Z",
//     "createdBy": {
//       "_id": "63ac39aeedf7c80016c57a67",
//       "name": "",
//       "avatar": ""
//     }
//   }, {
//     "_id": "65bfa809c4f47f0016aee205",
//     "title": "Russian warship: Moskva sinks in Black Sea",
//     "content": "Europe",
//     "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     "createdAt": "2023-01-12T06:26:17.539Z",
//     "createdBy": {
//       "_id": "63ac39aeedf7c80016c57a67",
//       "name": "",
//       "avatar": ""
//     }
//   }, {
//     "_id": "66bfa809c4f47f0016aee205",
//     "title": "Wind power produced more electricity than coal and nucle...",
//     "content": "Money",
//     "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     "createdAt": "2023-01-12T06:26:17.539Z",
//     "createdBy": {
//       "_id": "63ac39aeedf7c80016c57a67",
//       "name": "",
//       "avatar": ""
//     }
//   }, {
//     "_id": "67bfa809c4f47f0016aee205",
//     "title": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
//     "content": "Europe",
//     "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     "createdAt": "2023-01-12T06:26:17.539Z",
//     "createdBy": {
//       "_id": "63ac39aeedf7c80016c57a67",
//       "name": "",
//       "avatar": ""
//     }
//   }, {
//     "_id": "69bfa809c4f47f0016aee205",
//     "title": "We keep rising to new challenges:' For churches hit...",
//     "content": "Life",
//     "image": "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     "createdAt": "2023-01-12T06:26:17.539Z",
//     "createdBy": {
//       "_id": "63ac39aeedf7c80016c57a67",
//       "name": "",
//       "avatar": ""
//     }
//   },

// ]
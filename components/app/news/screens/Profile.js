import { StyleSheet, Text, View, Image, TextInput, Pressable, FlatList } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import NewsContext from '../utilities/NewsContext'

const Profile = (props) => {

    const { navigation } = props
    const { getMyNews } = useContext(NewsContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        //tu dong chay khi component duoc render
        //chay lan dau tien va moi khi co su thay doi state
        const get = async () => {
            const response = await getMyNews();
            setData(response);
        }
        get();
        return () => { }
    }, []);

    const renderItem = (props) => {
        const { item } = props;
        const { title, image, content, _id } = item;
        return (
            <Pressable
                style={styles.card}
                onPress={() => navigation.navigate('Detail', { id: _id })}>
                <Image
                    style={styles.image}
                    source={{ uri: image }}
                />
                <View style={styles.information}>
                    <Text style={styles.category}>{content}</Text>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        )
    }

    const [refeshing, setRefeshing] = useState(false);

    const onRefesh = async () => {
        setRefeshing(true);
        const response = await getMyNews();
        setData(response);
        setRefeshing(false);
    }


    return (
        <View style={styles.container}>
            <View style={styles.chuaXacDinh}>
                <Image
                    source={require('../../../../media/image/quit.png')} />
                <Text style={styles.tenChucNang}>My News</Text>
                <Image
                    source={require('../../../../media/image/bacham.png')} />
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                refreshing={refeshing}
                onRefresh={onRefesh} />
        </View>


    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
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
})
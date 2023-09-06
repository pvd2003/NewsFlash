import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import NewsContext from '../utilities/NewsContext'

const Detail = (props) => {
    const { navigation, route } = props;
    const { id } = route?.params; //kiem tra 
    const { getDetail } = useContext(NewsContext);
    const [data, setData] = useState(null); //chi tiet 1 bai viet

    useEffect(() => {
        const fetchData = async () => {
            const response = await getDetail(id);
            setData(response);
            console.log(response);
            // imglink = `http://172.16.65.84:9000/images/${data.image}`;

        };
        if (id) {
            fetchData();
        }
        return () => { }
    }, [id]);
    return (
        (data) ? <ScrollView style={detailStyles.container}>
            <View>
                {/* <Image
                    style={detailStyles.quit}
                    source={require('../../../../media/image/quit.png')}
                />
                <View style={detailStyles.sAB}>
                    <Image
                        style={detailStyles.share}
                        source={require('../../../../media/image/share.png')}
                    />
                    <Image
                        style={detailStyles.bacham}
                        source={require('../../../../media/image/bacham.png')}
                    />
                </View>
            </View>

            <View style={detailStyles.authorInfomation}>
                <Image

                    source={require('../../../../media/image/bbc.png')}
                />
                <View style={detailStyles.author}>
                    <Text style={detailStyles.authorName}>BBC News</Text>
                    <Text style={detailStyles.authorTime}>14m ago</Text>
                </View>

                <Image
                    source={require('../../../../media/image/btnFollowing.png')}
                /> */}

                <Image
                    style={detailStyles.newsimg}
                    source={{ uri: `http://172.16.65.84:9000/images/${data.image}` }}
                />

                <View style={detailStyles.news}>

                    <Text style={detailStyles.newstitle}>{data.name}</Text>

                    <Text style={detailStyles.newsdetails}>{data.price}</Text>

                    <Text style={detailStyles.newsdetails}>{data.description}</Text>


                </View>
            </View>

            {/* <Image
                style={detailStyles.newsImage}
                source={{ uri: data.image }}
                resizeMode='cover'
            />

            <Text style={detailStyles.europe}>Europe</Text>
            <Text style={detailStyles.title}>{data.title}</Text>
            <Text style={detailStyles.content}>
                Ukrainian President Volodymyr Zelensky has accused European countries that continue to buy Russian oil of "earning their money in other people's blood".
                {"\n \n"}
                In an interview with the BBC, President Zelensky singled out Germany and Hungary, accusing them of blocking efforts to embargo energy sales, from which Russia stands to make up to £250bn ($326bn) this year.
                {"\n \n"}
                There has been a growing frustration among Ukraine's leadership with Berlin, which has backed some sanctions against Russia but so far resisted calls to back tougher action on oil sales.
            </Text> */}
        </ScrollView>
            : <View><Text>Dang tai du lieu...</Text></View>
    )
}

export default Detail

const detailStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
    },

    chucNang: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    quit: {
        color: '#4E4B66',
    },

    sAB: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    share: {
        color: '#4E4B66',
        position: 'absolute',
        right: 16,
    },

    bacham: {
        color: '#4E4B66',
    },

    authorInfomation: {
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    author: {
        position: 'absolute',
        left: 60,
    },

    authorName: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        color: '#000',
    },

    authorTime: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        color: '#4E4B66',
    },

    newsImage: {
        width: '100%',
        height: 248,
        marginTop: 16,
        borderRadius: 6
    },

    europe: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        color: '#4E4B66',
        marginTop: 16,
    },

    title: {
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 36,
        color: '#000',
        marginTop: 4,
    },

    content: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        color: '#4E4B66',
        marginTop: 16,
    },
    news: {
        marginLeft: -4,
    },
    newstitle: {
        fontWeight: '400',
        fontSize: 24,
    },
    newsdetails: {
        fontSize: 16,
        marginTop: 16,
    },
    newsimg: {
        width: 380,
        height: 248,
        marginTop: 16,
        alignSelf: 'center',
        borderRadius: 6,
    },
    newscontainer: {
        padding: 24,
        backgroundColor: '#fff',
    },
})
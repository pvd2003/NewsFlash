import React, { createContext, useState } from 'react'
import AxiosInstance from '../../axiosClient/AxiosInstace';

export const NewsContext = createContext();

export const NewsProvider = (props) => {
    const { children } = props;

    //Lay danh sach bai viet
    const getNews = async () => {
        try{
            const response = await AxiosInstance().get('/sanpham/getAll')
            return response;
        }catch(error){
            console.log('getNews Error', error)
        }
        return [];
    }

    //Lay thong tin chi tiet bai viet
    const getDetail = async (id) => {
        try{
            const response = await AxiosInstance().get(`/sanpham/${id}/getDetail`)
            return response;
        }catch(error){
            console.log('getDetail Error', error)
        }
        return [];

    }

    //Them hinh anh
    const uploadImage = async (form) =>{
        try{
            const response = await AxiosInstance('multipart/form-data')
                                            .post('/media/upload', form)
            return response.data;
        }catch(error){
            console.log('uploadImage Error', error)
        }
        return null;
    }

    //Them bai viet moi
    const addNews = async (title, content, image) =>{
        try{
            const body = {title, content, image}
            await AxiosInstance()
                    .post('/articles', body)
            return true;
        }catch(error){
            console.log('addNews Error', error)
        }
        return null;
    }

    //Lay bai viet cua ban
     const getMyNews = async () => {
        try{
            const response = await AxiosInstance().get('/articles/my-articles')
            return response.data;
        }catch(error){
            console.log('getMyNews Error', error)
        }
        return [];
    }

    return (
        <NewsContext.Provider
            value={{getNews, getDetail, uploadImage, addNews, getMyNews}}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsContext
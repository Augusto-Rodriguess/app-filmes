import React,{Fragment} from 'react' 
import {Image,Text} from 'react-native'
import styles from './style';

  const image = Math.floor(Math.random() * 4 + 1);

export default function BannerMovies(){
    return(
        <>
        <Text style ={styles.TextBanner}>Em cartaz</Text>
        <Image style = {styles.ImageBanner} source = {require(`../../Img/${image}.jpg`)} />


        </>
    );
}
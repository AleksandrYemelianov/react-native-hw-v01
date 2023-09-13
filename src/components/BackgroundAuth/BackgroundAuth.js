import React from 'react';
import {ImageBackground, View } from 'react-native'
import BackgroundImg from '../../assets/images/photo_BG.png'
import { styles } from './BackgroundAuthStyles';

const BackgroundAuth = ({children}) => {
    return (
        <ImageBackground source={BackgroundImg} style={styles.background} >
            {children}
        </ImageBackground>
    );
};

export default BackgroundAuth
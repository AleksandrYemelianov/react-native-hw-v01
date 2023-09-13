import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BackgroundAuth from '../../components/BackgroundAuth/BackgroundAuth';
import LoginForm from '../../components/LoginForm/LoginForm';


const LoginScreen = () => {
    return (
        <View style={{ width: '100%', height: '100%' }}>
            <BackgroundAuth>
                <LoginForm/>
            </BackgroundAuth>
        </View>
    );
};

export default LoginScreen

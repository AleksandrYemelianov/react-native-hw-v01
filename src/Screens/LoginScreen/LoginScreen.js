import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import BackgroundAuth from '../../components/BackgroundAuth/BackgroundAuth';
import LoginForm from '../../components/LoginForm/LoginForm';


const LoginScreen = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ width: '100%', height: '100%' }}>
                <BackgroundAuth>
                    <LoginForm />
                </BackgroundAuth>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default LoginScreen

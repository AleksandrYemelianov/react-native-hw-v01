import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BackgroundAuth from '../../components/BackgroundAuth/BackgroundAuth';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';



const RegistrationScreen = () => {
    return (
        <View style={{ width: '100%', height: '100%' }}>
            <BackgroundAuth>
                <RegistrationForm/>
            </BackgroundAuth>
        </View>
    );
};

export default RegistrationScreen

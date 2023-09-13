import React from 'react'
import { View, Text, TextInput } from 'react-native'
import AvatarAuth from '../AvatarAuth/AvatarAuth';
import ButtonAuth from '../ButtonAuth/ButtonAuth';
import ButtonHiddenPassword from '../ButtonHiddenPassword/ButtonHiddenPassword';
import { styles } from './RegistrationFormStyles';

const RegistrationForm = () => {
    const signIn = () => {
        console.debug('Welcome!');
    };
    return (
        <View style={styles.container}>
            <AvatarAuth/>
            <Text style={styles.text}>Реєстрація</Text>
            <View style={styles.wrapperInput}>
                <TextInput placeholder="Логін" style={styles.input}/>
                <TextInput placeholder="Адреса електронної пошти" style={styles.input}/>
                <View style={styles.inputRelative}>
                    <TextInput placeholder="Пароль" style={styles.input} />
                    <ButtonHiddenPassword/>
                </View>       
            </View>
            <ButtonAuth onPress={signIn} text='Зареєстуватися'/>
            <Text>Вже є акаунт? Увійти</Text>
        </View>
    );
};

export default RegistrationForm
import React from 'react'
import { View, Text, TextInput } from 'react-native'
import ButtonAuth from '../ButtonAuth/ButtonAuth';
import ButtonHiddenPassword from '../ButtonHiddenPassword/ButtonHiddenPassword';
import { styles } from './LoginFormStyles';

const LoginForm = () => {
    const signIn = () => {
        console.debug('Welcome!');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Увійти</Text>
            <View style={styles.wrapperInput}>
                <TextInput placeholder="Адреса електронної пошти" autoComplete="email" style={styles.input}/>
                <View style={styles.inputRelative}>
                    <TextInput placeholder="Пароль" autoComplete="password" style={styles.input} />
                    <ButtonHiddenPassword/>
                </View>       
            </View>
            <ButtonAuth onPress={signIn} text='Увійти'/>
            <Text>Немає акаунту? Зареєструватися</Text>
        </View>
    );
};

export default LoginForm
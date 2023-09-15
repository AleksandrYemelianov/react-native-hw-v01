import React, { useState } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, Platform, Alert, TouchableOpacity, Keyboard } from 'react-native'
import { accentColor } from '../../assets/colors/colors';
import ButtonAuth from '../ButtonAuth/ButtonAuth';
import ButtonHiddenPassword from '../ButtonHiddenPassword/ButtonHiddenPassword';
import { styles } from './LoginFormStyles';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [focusEmail, setFocusEmail] = useState(false);
    const [focusPassword, setFocusPassword] = useState(false);
    const [visiblePassword, setVisiblePassword] = useState(false)
    const handleSetVisible = () => setVisiblePassword(prevState => !prevState)

    const handleSubmitLogin = () => {
        const isEmpty = email.trim() === '' || password.trim() === '';
        const validEmail = (email) => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            return emailRegex.test(email);
        };

        if (isEmpty) {
            Alert.alert('Всі поля мають бути заповнені!')
            return
        }
        if (!validEmail(email)) {
            Alert.alert('Введіть коректну електронну пошту!')
            return
        }
        console.group('Login')
        console.log('Email: ', email);
        console.log('Password: ', password)
        console.groupEnd()

        setEmail('');
        setPassword('');
        Keyboard.dismiss()

    };

    const currentOS = Platform.OS === 'ios';

    return (
        
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={-120} style={styles.keyboardVisible}>
            <View style={styles.container}>
                <Text style={styles.text}>Увійти</Text>
                <View style={styles.wrapperInput}>
                    <TextInput
                        placeholder="Адреса електронної пошти"
                        cursorColor={accentColor}
                        style={[styles.input, focusEmail ? styles.inputOnFocus : null]}
                        keyboardType={'email-address'}
                        value={email}
                        onChangeText={setEmail}
                        onFocus={() => setFocusEmail(true)}
                        onBlur={() => setFocusEmail(false)}
                    />
                    <View style={styles.inputRelative}>
                        <TextInput
                            placeholder="Пароль"
                            style={[styles.input, focusPassword ? styles.inputOnFocus : null]}
                            secureTextEntry={!visiblePassword}
                            value={password}
                            onChangeText={setPassword}
                            onFocus={() => setFocusPassword(true)}
                            onBlur={() => setFocusPassword(false)}
                        />
                        <ButtonHiddenPassword password={password} visible={visiblePassword} onPress={handleSetVisible} />
                    </View>
                </View>
                <ButtonAuth onPress={handleSubmitLogin} text='Увійти' />
                <TouchableOpacity>
                    <Text style={styles.textAuth}>
                        Немає акаунту? <Text style={styles.textAuthAccent}>Зареєструватися</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

    );
};

export default LoginForm
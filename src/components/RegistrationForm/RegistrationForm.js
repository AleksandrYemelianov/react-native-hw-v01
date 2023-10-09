import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { accentColor } from '../../assets/colors/colors';
import AvatarAuth from '../AvatarAuth/AvatarAuth';
import ButtonAuth from '../ButtonAuth/ButtonAuth';
import ButtonHiddenPassword from '../ButtonHiddenPassword/ButtonHiddenPassword';
import { styles } from './RegistrationFormStyles';

const RegistrationForm = () => {
    const navigation = useNavigation();

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [focusLogin, setFocusLogin] = useState(false);
    const [focusEmail, setFocusEmail] = useState(false);
    const [focusPassword, setFocusPassword] = useState(false);
    const [visiblePassword, setVisiblePassword] = useState(false)
    const handleSetVisible = () => setVisiblePassword(prevState => !prevState)

    const resetForm = () => {
        setLogin('')
        setEmail('');
        setPassword('');
        Keyboard.dismiss()
    };

    const handleSubmitLogin = () => {
        const isEmpty = login.trim() === '' || email.trim() === '' || password.trim() === '';
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
        console.log('Login: ', login);
        console.log('Email: ', email);
        console.log('Password: ', password)
        console.groupEnd()

        resetForm();
        navigation.navigate("Home")
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={-100} style={styles.keyboardVisible} >
            <View style={styles.container}>
                <AvatarAuth />
                <Text style={styles.text}>Реєстрація</Text>
                <View style={styles.wrapperInput}>
                    <TextInput
                        placeholder="Логін"
                        cursorColor={accentColor}
                        style={[styles.input, focusLogin ? styles.inputOnFocus : null]}
                        keyboardType={'name-phone-pad'}
                        value={login}
                        onChangeText={setLogin}
                        onFocus={() => setFocusLogin(true)}
                        onBlur={() => setFocusLogin(false)} />
                    <TextInput
                        placeholder="Адреса електронної пошти"
                        cursorColor={accentColor}
                        style={[styles.input, focusEmail ? styles.inputOnFocus : null]}
                        keyboardType={'email-address'}
                        value={email}
                        onChangeText={setEmail}
                        onFocus={() => setFocusEmail(true)}
                        onBlur={() => setFocusEmail(false)} />
                    <View style={styles.inputRelative}>
                        <TextInput
                            placeholder="Пароль"
                            style={[styles.input, focusPassword ? styles.inputOnFocus : null]}
                            secureTextEntry={!visiblePassword}
                            value={password}
                            onChangeText={setPassword}
                            onFocus={() => setFocusPassword(true)}
                            onBlur={() => setFocusPassword(false)} />
                        <ButtonHiddenPassword password={password} visible={visiblePassword} onPress={handleSetVisible} />
                    </View>
                </View>
                <ButtonAuth onPress={handleSubmitLogin} text='Зареєстуватися' />
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.textAuth}>
                        Вже є акаунт? <Text style={styles.textAuthAccent}>Увійти</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default RegistrationForm
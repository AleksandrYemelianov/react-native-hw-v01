import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './ButtonHiddenPasswordStyles';

const ButtonHiddenPasword = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Показати</Text>
        </TouchableOpacity>
    );
};

export default ButtonHiddenPasword
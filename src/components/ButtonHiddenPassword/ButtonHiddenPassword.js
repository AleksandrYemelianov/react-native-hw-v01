import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './ButtonHiddenPasswordStyles';

const ButtonHiddenPassword = ({ password, visible, onPress }) => {
    const isEmpty = password === '';
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {!isEmpty && <Text style={styles.text}>{visible ? 'Сховати' : 'Показати'}</Text>}
        </TouchableOpacity>
    );
};

export default ButtonHiddenPassword
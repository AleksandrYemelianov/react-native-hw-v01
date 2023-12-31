import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './ButtonAuthStyles';

const ButtonAuth = ({text, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

export default ButtonAuth
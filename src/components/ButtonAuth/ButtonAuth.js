import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './ButtonAuthStyles';
import { accentColor, backgroundColor, backgroundTextColor, iconFillColor } from '../../assets/colors/colors';

const ButtonAuth = ({text, onPress, disable}) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={{
                ...styles.button,
                backgroundColor: disable ? backgroundTextColor : accentColor, 
            }}>
            <Text style={{
                ...styles.text,
                color: disable ? iconFillColor : backgroundColor,
            }}>{text}</Text>
        </TouchableOpacity>
    );
};

export default ButtonAuth
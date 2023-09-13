import { TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { styles } from './AvatarAuthStyle'

const AvatarAuth = () => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.wrapperSvg}>
                <AntDesign name="pluscircleo" size={25} style={styles.svgAdd} />
            </TouchableOpacity>
        </View>
    );
}

export default AvatarAuth
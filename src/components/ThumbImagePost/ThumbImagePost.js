import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './ThumbImagePostStyle';

const ThumbImagePost = ({children, caption, touchableText}) => {
    return (
        <View style={styles.postWrapperTopSection}>
            <View style={styles.postWrapperImg}>
                <Image />
                {children}
            </View>
            {caption && <Text style={styles.postCaption}>{caption}</Text>}
            {touchableText &&
                <TouchableOpacity >
                    <Text style={styles.touchableText}>
                        {touchableText}
                    </Text>
                </TouchableOpacity>}
        </View>
    );
}

export default ThumbImagePost
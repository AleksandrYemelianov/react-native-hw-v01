import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './MainContainerStyles';

const MainContainer = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

export default MainContainer
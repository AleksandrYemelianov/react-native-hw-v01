import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './PostsUserHeaderStyles'

const PostsUserHeader = () => {
  return (
    <View style={styles.postHeader}>
      <View style={styles.imgThumb}>
        <Image/>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Vorname Nachname</Text>
        <Text style={styles.userContact}>spitzname@beispiel.de</Text>
      </View>
    </View>
  )
}

export default PostsUserHeader
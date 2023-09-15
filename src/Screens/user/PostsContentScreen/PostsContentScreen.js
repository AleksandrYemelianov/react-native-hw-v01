import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './PostsContentScreenStyles'
import PostsUserHeader from '../../../components/PostsUserHeader/PostsUserHeader'

const PostsContentScreen = () => {
  return (
    <View style={styles.container}>
      <PostsUserHeader/>
    </View>
  )
}

export default PostsContentScreen
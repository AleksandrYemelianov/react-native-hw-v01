import React from 'react'
import { View, Text } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'; 
import { styles } from './PostsUserContentInfoStules';

const PostsUserContentInfo = () => {
  return (
    <View style={styles.postInfoWrapper}>
      <View style={styles.postComment}>
        <EvilIcons name="comment" size={24} style={styles.postInfoIcon} />
        <Text style={styles.postCommentText}>0</Text>
      </View>
      <View style={styles.postLocation}>
        <EvilIcons name="location" size={24} style={styles.postInfoIcon} />
        <Text style={styles.postLocationText}>Location Post</Text>
      </View>
    </View>
  );
}

export default PostsUserContentInfo
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons'; 
import { styles } from './PostsUserContentInfoStules';

const PostsUserContentInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.postInfoWrapper}>
      <TouchableOpacity style={styles.postComment} onPress={() => navigation.navigate("Comments")}>
        <EvilIcons name="comment" size={24} style={styles.postInfoIcon} />
        <Text style={styles.postCommentText}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.postLocation} onPress={() => navigation.navigate("Location")}>
        <EvilIcons name="location" size={24} style={styles.postInfoIcon} />
        <Text style={styles.postLocationText}>Location Post</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PostsUserContentInfo
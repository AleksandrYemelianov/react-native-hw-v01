import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CommentsScreen from '../CommentsScreen/CommentsScreen';
import MapScreen from '../MapScreen/MapScreen';
import PostsContentScreen from '../PostsContentScreen/PostsContentScreen';
import { styles } from './PostsScreenStyles';


const PostsStack = createStackNavigator();

const PostsScreen = () => {
  return (
    <PostsStack.Navigator screenOptions={{ tabBarShowLabel: false}}>
      <PostsStack.Screen
        name="PostsContent"
        component={PostsContentScreen}
          options={{
          title: "Публікації",
          headerStyle: styles.header,
            headerTitleStyle: styles.title,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => alert("This is a button!")}
              style={styles.wrapperSvg}
            >
              <MaterialCommunityIcons
                name="logout"
                size={24}
                style={styles.svgLogout} />
            </TouchableOpacity>
          ),
        }}

      />
      <PostsStack.Screen name="Comments" component={CommentsScreen}/>
      <PostsStack.Screen name="Location" component={MapScreen}/>
    </PostsStack.Navigator>
  )
}

export default PostsScreen


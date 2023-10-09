import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import CommentsScreen from '../CommentsScreen/CommentsScreen';
import MapScreen from '../MapScreen/MapScreen';
import PostsMainContent from '../../../components/PostsMainContent/PostsMainContent';
import { styles } from './PostsScreenStyles';


const PostsStack = createStackNavigator();

const PostsScreen = () => {
  const navigation = useNavigation();

  return (
    <PostsStack.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <PostsStack.Screen
        name="PostsMain"
        component={PostsMainContent}
        options={{
          title: "Публікації",
          headerStyle: styles.header,
          headerTitleAlign: 'center',
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
      <PostsStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          title: "Коментарі",
          headerStyle: styles.header,
          headerTitleAlign: 'center',
          headerTitleStyle: styles.title,
          tabBarStyle: { display: 'none' },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="ios-return-up-back-outline" size={24} style={styles.iconBack} />
            </TouchableOpacity>
          ),
        }} />
      <PostsStack.Screen
        name="Location"
        component={MapScreen}
        options={{
          title: "Локація",
          headerStyle: styles.header,
          headerTitleAlign: 'center',
          headerTitleStyle: styles.title,
          tabBarStyle: { display: 'none' },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="ios-return-up-back-outline" size={24} style={styles.iconBack} />
            </TouchableOpacity>
          ),
        }} />
    </PostsStack.Navigator>
  );
};

export default PostsScreen


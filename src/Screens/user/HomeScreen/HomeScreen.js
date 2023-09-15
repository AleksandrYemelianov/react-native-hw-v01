import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import PostsScreen from '../PostsScreen/PostsScreen';
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import { styles } from './HomeScreenStyles';

const UserTab = createBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <UserTab.Navigator screenOptions={{ tabBarShowLabel: false, }}>
      <UserTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerShown: false,
          
          tabBarIcon: ({ focused, size, color }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Posts')}>
              <AntDesign name="appstore-o" size={24} style={styles.icon} />
            </TouchableOpacity>
          )
        }}
      />
      <UserTab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: 'Створити публікацію',
          headerTitleStyle: styles.title,
          tabBarIcon: () => (
            <TouchableOpacity style={styles.iconActiveWrapper} onPress={() => navigation.navigate('CreatePosts')}>
              <AntDesign name="plus" size={24} style={styles.iconAccent} />
            </TouchableOpacity>
          ),
          tabBarStyle: { display: 'none' },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="ios-return-up-back-outline" size={24} style={styles.iconBack} />
            </TouchableOpacity>
          ),
        }}
      />
      <UserTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <AntDesign name="user" size={24} style={styles.icon} />
            </TouchableOpacity>
          ),
        }}
      />
    </UserTab.Navigator>
  );
};

export default HomeScreen


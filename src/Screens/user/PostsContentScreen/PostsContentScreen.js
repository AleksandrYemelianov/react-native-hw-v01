import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './PostsContentScreenStyles'
import PostsUserHeader from '../../../components/PostsUserHeader/PostsUserHeader'
import PostsUserContent from '../../../components/PostsUserContent/PostsUserContent'
import MainContainer from '../../../components/MainContainer/MainContainer'

const PostsContentScreen = () => {
  return (
    <MainContainer>
      <PostsUserHeader />
      <PostsUserContent />
    </MainContainer>
  );
};

export default PostsContentScreen
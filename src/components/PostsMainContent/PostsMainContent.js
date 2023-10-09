import React from 'react'
import PostsUserHeader from '../PostsUserHeader/PostsUserHeader'
import PostsUserContent from '../PostsUserContent/PostsUserContent'
import MainContainer from '../MainContainer/MainContainer'

const PostsMainContent = () => {
  return (
    <MainContainer>
      <PostsUserHeader />
      <PostsUserContent />
    </MainContainer>
  );
};

export default PostsMainContent
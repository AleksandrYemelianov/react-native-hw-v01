import React from 'react'
import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import MainContainer from '../MainContainer/MainContainer'
import ThumbImagePost from '../ThumbImagePost/ThumbImagePost'
import CreatePostForm from '../CreatePostForm/CreatePostForm';
import { styles } from './CreatePostStyles';

const CreatePost = () => {
  return (
    <MainContainer>
      <ThumbImagePost touchableText={'Завантажте фото'}>
        <View style={styles.thumbSvg}>
          <MaterialIcons name="photo-camera" size={24} style={styles.iconSvg} />
        </View>
      </ThumbImagePost>
      <CreatePostForm/>
    </MainContainer>
  )
}

export default CreatePost
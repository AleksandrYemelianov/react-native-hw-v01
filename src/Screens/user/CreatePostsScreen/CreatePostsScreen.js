import React from 'react'
import { Keyboard, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import MainContainer from '../../../components/MainContainer/MainContainer';
import ThumbImagePost from '../../../components/ThumbImagePost/ThumbImagePost';
import CreatePostForm from '../../../components/CreatePostForm/CreatePostForm';
import {styles} from './CreatePostScreenStyles'

const CreatePostsScreen = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <MainContainer>
        <ThumbImagePost touchableText={'Завантажте фото'}>
          <View style={styles.thumbSvg}>
            <MaterialIcons name="photo-camera" size={24} style={styles.iconSvg} />
          </View>
        </ThumbImagePost>
        <CreatePostForm />
        <TouchableOpacity style={styles.buttonDelete}>
          <MaterialIcons name="delete-forever" size={24} style={styles.iconSvg} />
        </TouchableOpacity>
      </MainContainer>
    </KeyboardAvoidingView>
  )
};

export default CreatePostsScreen
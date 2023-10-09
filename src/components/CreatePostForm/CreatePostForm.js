import { View, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons'; 
import ButtonAuth from '../ButtonAuth/ButtonAuth'
import {styles} from './CreatePostFormStyle'
import { accentColor } from '../../assets/colors/colors';

const CreatePostForm = () => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [focusDescription, setFocusDescription] = useState(false);
  const [focusLocation, setFocusLocation] = useState(false);
  
  return (
    <>
      <View style={styles.createPostInputWrapper}>
        <TextInput
          placeholder="Назва"
          cursorColor={accentColor}
          style={[styles.createPostInput, focusDescription ? styles.inputOnFocus : null]}
          value={description}
          onChangeText={setDescription}
          onFocus={() => setFocusDescription(true)}
          onBlur={() => setFocusDescription(false)}
        />
        <View style={styles.createPostLocation}>
          <EvilIcons name="location" size={24} style={styles.createPostInfoIcon} />
          <TextInput
            placeholder="Місцевість"
            cursorColor={accentColor}
            style={[styles.createPostInputLocation, styles.createPostInput, focusLocation ? styles.inputOnFocus : null]}
            value={location}
            onChangeText={setLocation}
            onFocus={() => setFocusLocation(true)}
            onBlur={() => setFocusLocation(false)}
          />
        </View>
      </View>
      <ButtonAuth text={'Опубліковати'} disable />
    </>
  )
};

export default CreatePostForm
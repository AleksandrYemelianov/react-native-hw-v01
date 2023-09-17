import { View, Text, TextInput } from 'react-native'
import React from 'react'
import ButtonAuth from '../ButtonAuth/ButtonAuth'

const CreatePostForm = () => {
  return (
    <View>
      <TextInput/>
          <TextInput />
          <ButtonAuth text={'Опубліковати'} disable/>
    </View>
  )
}

export default CreatePostForm
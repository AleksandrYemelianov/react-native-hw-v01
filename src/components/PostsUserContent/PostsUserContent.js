import { View, Text, Image } from 'react-native'
import React from 'react'
import PostsUserContentInfo from '../PostsUserContentInfo/PostsUserContentInfo';
import { styles } from './PostsUserContentStyles';
import ThumbImagePost from '../ThumbImagePost/ThumbImagePost';

const PostsUserContent = () => {
    return (
        <View style={styles.postSectionContent}>
            <View style={styles.postThumb}>
                <ThumbImagePost caption={'Some caption foto'} />
                <PostsUserContentInfo />
            </View>
        </View>
    );
}

export default PostsUserContent
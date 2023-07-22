import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

interface PostDetailsProps {
    post: {
        imageUrl: string;
        username: string;
        caption: string;
        likes: number;
        comments: number;
        timestamp: string;
    };
}

const screenWidth = Dimensions.get('window').width;

const PostDetails = ({ route }) => {
    const { post } = route.params;

    React.useEffect(() => {
        console.warn(post)
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.username}>{post.username}</Text>
            <Image source={post.imageUrl} style={styles.postImage} resizeMode="contain" />
            <View style={styles.detailsContainer}>
                <Text style={styles.caption}>{post.caption}</Text>
                <View style={styles.likesCommentsContainer}>
                    <Text style={styles.comments}>{`${post.comments} comments`}</Text>
                </View>
                <Text style={styles.timestamp}>{post.timestamp}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius:10
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 15,
        marginLeft:20,
    },
    postImage: {
        width: screenWidth,
        height: screenWidth,
    },
    detailsContainer: {
        padding: 10,
    },
    caption: {
        fontSize: 16,
        marginBottom: 5,
    },
    likesCommentsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    likes: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    comments: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    timestamp: {
        fontSize: 14,
        color: '#888',
    },
});

export default PostDetails;

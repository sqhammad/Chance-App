import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, StatusBar, TouchableOpacity } from 'react-native';

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

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const PostDetails = ({ navigation, route }) => {
    const { post } = route.params;
    return (
        <>
            <StatusBar hidden={false} />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={35} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerText}>{post.username}</Text>
                <MaterialCommunityIcons name='message' size={32} color="white" />
            </View>
            <LinearGradient
                colors={['#ffffff', '#00cccc', '#009999']}
                style={styles.container}
            >
                <View style={styles.postContainer}>
                    {/* <Text style={styles.username}></Text> */}
                    <Image source={post.imageUrl} style={styles.postImage} resizeMode="contain" />
                    <View style={styles.detailsContainer}>
                        <Text style={styles.caption}>{post.caption}</Text>
                        <View style={styles.likesCommentsContainer}>
                            <Text style={styles.comments}>{`${post.comments} comments`}</Text>
                        </View>
                        <Text style={styles.timestamp}>{post.timestamp}</Text>
                    </View>
                </View>
            </LinearGradient>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        padding: 0,
        justifyContent: "center"
    },
    header: {
        height: screenHeight * 0.07,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#009999",
        alignContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    headerText: {
        fontSize: 30,
        fontWeight: "600",
        color: "white"
    },
    postContainer: {
        backgroundColor: "rgb(255,255,255)",
        marginHorizontal: 10,
        paddingHorizontal: 5,
        paddingTop: 30
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 15,
        marginLeft: 20,
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
        color: '#000',
    },
});

export default PostDetails;

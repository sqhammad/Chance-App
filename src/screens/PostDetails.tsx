import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, StatusBar, TouchableOpacity, ScrollView } from 'react-native';

interface PostDetailsProps {
    post: {
        imageUrl: string;
        profileImage: string,
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
                colors={['#ffffff', '#4dc9ff', '#4dc9ff']}
                style={styles.container}
            >
                <ScrollView>
                    <View style={styles.postContainer}>
                        <View style={styles.artistView}>
                            <Image source={post.profileImage} style={{ width: screenWidth * 0.09, aspectRatio: 1, borderRadius: 50 }} resizeMode="contain" />
                            <Text style={styles.artistName}>{post.username}</Text>
                        </View>
                        <Image source={post.imageUrl} style={styles.postImage} resizeMode="contain" />
                        <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: 1, width: screenWidth, paddingVertical: 5, paddingLeft: 0 }}>
                            <MaterialCommunityIcons name='heart' size={35} color="red" style={{ marginHorizontal: 5 }} />
                            <MaterialCommunityIcons name='message-outline' size={30} color="black" style={{ marginHorizontal: 5 }} />
                            <MaterialCommunityIcons name='forwardburger' size={35} color="black" style={{ marginHorizontal: 5 }} />
                        </View>
                        <View style={styles.detailsContainer}>

                            <Text style={styles.caption}>{post.caption}</Text>
                            <View style={styles.likesCommentsContainer}>
                                <Text style={styles.comments}>{`${post.comments} comments`}</Text>
                            </View>
                            <Text style={styles.timestamp}>{post.timestamp}</Text>
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        padding: 0,
        // justifyContent: "center"
    },
    header: {
        height: screenHeight * 0.07,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#4dc9ff",
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
        alignItems: "flex-start",

    },
    postImage: {
        justifyContent: "center",
        alignSelf: "center",
        maxHeight: screenHeight * 0.8,

    },
    detailsContainer: {
        padding: 7,
    },
    artistView: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        margin: 10,
        marginBottom: 5
    },
    artistName: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: "center",
        alignSelf: "center",
        marginLeft: 10,
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

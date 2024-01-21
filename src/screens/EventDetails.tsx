import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import TopNavigation from '../navigation/topNavigation';

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
            <TopNavigation navigation={navigation} heading={'Event'} isGoBack={true} />
            <LinearGradient
                colors={['#ffffff', '#fff']}
                style={styles.container}
            >
                <ScrollView>
                    <View style={styles.postContainer}>
                        <View style={styles.artistView}>
                            <Image source={post.profileImage} style={{ width: screenWidth * 0.09, aspectRatio: 1, borderRadius: 50 }} resizeMode="contain" />
                            <Text style={styles.artistName}>{post.artist}</Text>
                        </View>
                        <View style={styles.detailsContainer}>
                            <View style={styles.likesCommentsContainer}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 5 }}>Event Name : {post.event_name}</Text>
                            </View>
                        </View>
                        <View style={{ maxHeight: screenHeight * 0.8, backgroundColor: '#000' }}>
                            <Image source={post.image} style={styles.postImage} resizeMode="contain" />
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: 1, width: screenWidth, paddingVertical: 5, paddingLeft: 0 }}>
                            <MaterialCommunityIcons name='heart' size={35} color="red" style={{ marginHorizontal: 5 }} />
                            <MaterialCommunityIcons name='forwardburger' size={35} color="black" style={{ marginHorizontal: 5 }} />
                        </View>
                        <View style={styles.detailsContainer}>
                            <Text style={styles.caption}>Event Charges : {post.event_charges}</Text>
                            <Text style={styles.timestamp}>Event Time : {post.event_datetime}</Text>
                            <View style={styles.likesCommentsContainer}>
                                <Text style={[styles.comments]}>Event Description :</Text>
                                <Text style={{ fontSize: 16 }}>{post.event_desc}</Text>
                            </View>
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
    postContainer: {
        backgroundColor: "rgb(255,255,255)",
        alignItems: "flex-start",
        paddingVertical: 10
    },
    postImage: {
        justifyContent: "center",
        alignSelf: "center",
        width: screenWidth,
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
        fontWeight: 'bold',
    },
    likesCommentsContainer: {
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    likes: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    comments: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    timestamp: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default PostDetails;

// UserMessageListScreen.js
import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, } from '@expo/vector-icons';

import TopNavigation from '../navigation/topNavigation';
import post1 from '../../assets/posts/post1.jpg';
import post2 from '../../assets/posts/post2.jpg';
import post3 from '../../assets/posts/post3.jpg';
import directingpost from '../../assets/posts/directing.jpeg';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const UserMessagesScreen = ({ navigation }) => {
    const userData = [
        { id: '1', username: 'John Doe', image: post1 },
        { id: '2', username: 'Jane Smith', image: post2 },
        { id: '3', username: 'Bob Johnson', image: post3 },
        // Add more user entries as needed
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ChatScreen', { chat: item })}>
            <View style={styles.userItem}>
                <Image source={item.image}
                    style={{ width: screenWidth * 0.1, aspectRatio: 1, borderRadius: 50, }}
                    resizeMode="contain" />
                <Text style={styles.username}>{item.username}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={35} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Messages</Text>
                <TouchableOpacity onPress={() => navigation.navigate('UserMessagesScreen')}>
                    <MaterialCommunityIcons name="square-edit-outline" size={35} color="#ffffff" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={userData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    userItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center'
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10
    },
});

export default UserMessagesScreen;

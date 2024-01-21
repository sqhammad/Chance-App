import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, StatusBar, TouchableOpacity, ScrollView } from 'react-native';

import post1 from '../../assets/posts/post1.jpg';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const ProfileScreen = ({ navigation }) => {
    const skillsList = ['communication', 'acting', 'painting',
        'dancing', 'singing', 'collaborative']

    return (
        <>
            <StatusBar hidden={false} />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={35} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Profile</Text>
                <MaterialIcons name='edit' size={35} color="white" />
            </View>
            <LinearGradient
                colors={['#ffff66',  '#4dc9ff', '#4dc9ff']}
                style={styles.container}
            >
                <ScrollView style={{ marginBottom: 10, borderRadius: 10 }}>
                    <View style={{
                        alignContent: "center",
                        alignItems: "center"
                    }}>
                        <Image source={post1} style={styles.postImage} />
                        {/* <TouchableOpacity style={styles.btn}>
                            <Text style={{
                                textAlign: "center", fontSize: 16,
                                fontWeight: "bold",
                            }}>
                                Add Profile Picture</Text>
                        </TouchableOpacity> */}
                    </View>
                    <View style={styles.postContainer}>
                        <Text style={styles.containerText}>Name : Itachi Uchiha</Text>
                        <Text style={styles.containerText}>Email : itachi.uchiha@chance.com</Text>
                        <Text style={styles.containerText}>Phone : +22 9874563210</Text>
                        <Text style={[styles.containerText, { borderBottomWidth: 0 }]}>
                            Skills :</Text>
                        <View style={{
                            paddingBottom: 5,
                            borderBottomColor: "#4dc9ff", borderBottomWidth: 1,
                        }}>
                            {skillsList.length > 0 ? (
                                <View style={{
                                    display: "flex", flexDirection: "row", flexWrap: "wrap",
                                    paddingVertical: 7, backgroundColor: "rgba(77,201, 255, 0.3)",
                                    alignContent: "center", borderRadius: 10, alignSelf: "center",
                                    paddingHorizontal: 2, marginVertical: 10
                                }}>
                                    {skillsList.sort().map((skill, index) => (
                                        <Text style={{
                                            margin: 4, paddingVertical: 2, paddingHorizontal: 7,
                                            textAlign: "center", borderRadius: 50,
                                            borderColor: "rgba(77,201, 255,0.7)", borderWidth: 1.2,
                                            backgroundColor: "rgba(77,201, 255,0.3)",
                                        }}>{skill}</Text>
                                    ))}
                                </View>
                            ) : (
                                <Text style={styles.containerText}>Skills not added</Text>
                            )}
                        </View>
                        <Text style={[styles.containerText, { borderBottomWidth: 0 }]}>
                            Resume / CV :</Text>
                        <View style={{
                            paddingBottom: 5,
                            borderBottomColor: "#4dc9ff", borderBottomWidth: 1,
                        }}>
                            <TouchableOpacity style={styles.btn} onPress={() => pickDocument()}>
                                <Text style={{ textAlign: "center" }}>Upload Resume / CV</Text>
                            </TouchableOpacity>
                            <Text style={{
                                margin: 5, paddingHorizontal: 10,
                                paddingBottom: 5, fontSize: 15
                            }}>
                                Resume_file.pdf
                            </Text>
                        </View>
                        <Text style={styles.containerText}>
                            LinkedIn : www.linkedin.com/itachiuchiha/</Text>
                        <Text style={styles.containerText}>
                            Facebook : www.facebook.com/itachiuchiha</Text>
                        <Text style={styles.containerText}>
                            Twitter : www.twitter.com/itachiuchiha</Text>
                        <Text style={styles.containerText}>
                            Instagram : itachi.uchiha</Text>
                    </View>
                </ScrollView>
            </LinearGradient >
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        padding: 0,
        alignContent: "center",
        alignItems: "center"
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
        marginHorizontal: 10,
        paddingHorizontal: 15,
        width: screenWidth * 0.9,
        borderRadius: 10,
        marginTop: 15,
        paddingVertical: 10
    },
    containerText: {
        fontSize: 17,
        marginTop: 10, paddingVertical: 5,
        borderBottomColor: "#4dc9ff", borderBottomWidth: 1,
    },
    postImage: {
        height: screenHeight * 0.2,
        borderRadius: 100,
        aspectRatio: 1,
        resizeMode: 'cover',
        marginTop: screenHeight * 0.05,
    },
    detailsContainer: {
        display: 'flex',
        padding: 10,
    },
    btn: {
        margin: 5, marginTop: 10, paddingHorizontal: 10, paddingVertical: 5,
        borderColor: "rgba(77,201, 255,0.7)", borderWidth: 1.2,
        backgroundColor: "rgba(77,201, 255,0.4)", borderRadius: 10, width: 160,
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

export default ProfileScreen;

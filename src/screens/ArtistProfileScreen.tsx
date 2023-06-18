import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';

// Mock data for personal posts
const personalPosts = [
  {
    id: '1',
    image: require('C:\Hammad\Projects\Chance\assets\image.jpg'),
    caption: 'Caption 1',
  },
  {
    id: '2',
    image: require('C:\Hammad\Projects\Chance\assets\image.jpg'),
    caption: 'Caption 2',
  },
  {
    id: '3',
    image: require('C:\Hammad\Projects\Chance\assets\image.jpg'),
    caption: 'Caption 3',
  },
];

const ArtistProfileScreen = () => {
  const [artistName, setArtistName] = useState('John Doe');
  const [artistCategory, setArtistCategory] = useState('Painter');

  const renderPersonalPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Image source={item.image} style={styles.postImage} />
      <Text style={styles.postCaption}>{item.caption}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image
        source={require('path/to/profileImage.jpg')}
        style={styles.profileImage}
      />
      <Text style={styles.artistName}>{artistName}</Text>
      <Text style={styles.artistCategory}>{artistCategory}</Text>
      <FlatList
        data={personalPosts}
        keyExtractor={(item) => item.id}
        renderItem={renderPersonalPost}
        contentContainerStyle={styles.postsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  artistName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  artistCategory: {
    fontSize: 18,
    marginTop: 5,
  },
  postsContainer: {
    marginTop: 20,
  },
  postContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  postImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  postCaption: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default ArtistProfileScreen;

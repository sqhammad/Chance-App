import React from 'react';
import { View, StyleSheet, Image, FlatList, Text } from 'react-native';

// Mock data for carousel images
const carouselImages = [
  { id: '1', image: require('C:\Hammad\Projects\Chance\assets\image.jpg') },
  { id: '2', image: require('C:\Hammad\Projects\Chance\assets\image.jpg') },
  { id: '3', image: require('C:\Hammad\Projects\Chance\assets\image.jpg') },
];

// Mock data for posts
const posts = [
  { id: '1', artist: 'John Doe', image: require('C:\Hammad\Projects\Chance\assets\image.jpg') },
  { id: '2', artist: 'Jane Smith', image: require('C:\Hammad\Projects\Chance\assets\image.jpg') },
  { id: '3', artist: 'Alex Johnson', image: require('C:\Hammad\Projects\Chance\assets\image.jpg') },
];

const FeedScreen = () => {
  const renderCarouselImage = (item:any) => (
    <Image source={item.image} style={styles.carouselImage} />
  );

  const renderPost = (item : any) => (
    <View style={styles.postContainer}>
      <Image source={item.image} style={styles.postImage} />
      <Text style={styles.artistName}>{item.artist}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={carouselImages}
        keyExtractor={(item) => item.id}
        renderItem={renderCarouselImage}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContainer}
      />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
        contentContainerStyle={styles.postsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  carouselContainer: {
    marginBottom: 20,
  },
  carouselImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },
  postsContainer: {
    paddingTop: 10,
  },
  postContainer: {
    marginBottom: 20,
  },
  postImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  artistName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FeedScreen;

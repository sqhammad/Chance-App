import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { imageUrl } from '../config';

const PostDetailsScreen = () => {
  const post = {
    artist: 'John Doe',
    image: imageUrl,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo commodo massa, ac blandit orci luctus sed.',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.artistName}>{post.artist}</Text>
      <Image source={{uri : post.image}} style={styles.postImage} />
      <Text style={styles.description}>{post.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  artistName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 10,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default PostDetailsScreen;

import React from 'react';
import { View, StyleSheet, Image, FlatList, Text, Dimensions } from 'react-native';
import event1 from '../../assets/events/event1.jpg';
import event2 from '../../assets/events/event2.jpg';
import event3 from '../../assets/events/event3.jpg';
import post1 from '../../assets/posts/post1.jpg'
import Carousel, { Pagination } from 'react-native-snap-carousel';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

// Mock data for carousel images
const carouselImages = [
  { id: '1', artist: 'John Doe', image: event1 },
  { id: '2', artist: 'John Doe', image: event2 },
  { id: '3', artist: 'John Doe', image: event3 },
];

const postImages = [
  { id: '1', artist: 'John Doe', image: event1 },
  { id: '2', artist: 'John Doe', image: event2 },
  { id: '3', artist: 'John Doe', image: event3 },
  { id: '4', artist: 'Itachi Uchiha', image: post1 },
];

const FeedScreen = () => {
  const renderEventImage = ({ item }: { item: { id: string; image: any } }) => (
    <Image source={item.image} style={{ width: screenWidth, height: screenHeight * 0.3,  }} resizeMode="contain" />
  );

  const renderPostImage = ({ item }: { item: { id: string; artist: string; image: any } }) => (
    <View style={styles.postContainer}>
      <Image style={[styles.image,{height:200}]} source={item.image} resizeMode="contain" />
      <Text style={styles.artistName}>{item.artist}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel data={carouselImages} renderItem={renderEventImage} sliderWidth={screenWidth} itemWidth={screenWidth} layout="default" loop style={{paddingBottom:10, backgroundColor:'#fff'}}/>
      <FlatList data={postImages} keyExtractor={(item) => item.id} renderItem={renderPostImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0
  },
  postContainer: {
    display: 'flex',
    margin: 5,
    // padding: 10,
    width: screenWidth * 0.9,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  image: {
    display: 'flex',
    width: '100%',
    margin:10,
    // borderRadius:10
  },
  artistName: {
    margin: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FeedScreen;

import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
import post1 from '../../assets/posts/post1.jpg'

const { width: screenWidth } = Dimensions.get('window');

const data = [
  { id: 1, imageUrl: post1, title: 'Story 1' },
  { id: 2, imageUrl: post1, title: 'Story 2' },
  // Add more data as needed
];

type RenderItemProps = {
  item: { id: number; imageUrl: string; title: string };
  index: number;
  parallaxProps?: any;
};

export default function StoryCarousel() {
  const renderItem = ({ item, index, parallaxProps }: RenderItemProps) => {
    return (
      <View style={styles.carouselItem}>
        <ParallaxImage
          source={item.imageUrl }
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth *0.2}
        hasParallaxImages={true}
        loop={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  carouselItem: {
    width: screenWidth * 0.2,
    aspectRatio: 1,
    borderRadius: 100,
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 100,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
    borderRadius: 100
  },
  title: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    textAlign: 'center',
  },
});


import React from 'react';
import { View, StyleSheet, Image, Text, FlatList, TouchableOpacity } from 'react-native';

// Mock data for artists and their portfolios
const artists = [
  {
    id: '1',
    name: 'John Doe',
    category: 'Painter',
    portfolio: [
      { id: '1', image: require('C:\Hammad\Projects\Chance\assets\image.jpg') },
      { id: '2', image: require('C:\Hammad\Projects\Chance\assets\image.jpg') },
      { id: '3', image: require('C:\Hammad\Projects\Chance\assets\image.jpg') },
    ],
  },
  {
    id: '2',
    name: 'Jane Smith',
    category: 'Singer',
    portfolio: [
      { id: '4', image: require('C:\Hammad\Projects\Chance\assets\image.jpg') },
      { id: '5', image: require('C:\Hammad\Projects\Chance\assets\image.jpg') },
      { id: '6', image: require('C:\Hammad\Projects\Chance\assets\image.jpg') },
    ],
  },
];

const PortfolioScreen = () => {
  const renderPortfolioItem = ({ item }) => (
    <TouchableOpacity style={styles.portfolioItem}>
      <Image source={item.image} style={styles.portfolioImage} />
    </TouchableOpacity>
  );

  const renderArtist = ({ item }) => (
    <View style={styles.artistContainer}>
      <Text style={styles.artistName}>{item.name}</Text>
      <Text style={styles.artistCategory}>{item.category}</Text>
      <FlatList
        data={item.portfolio}
        keyExtractor={(item) => item.id}
        renderItem={renderPortfolioItem}
        horizontal
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={artists}
        keyExtractor={(item) => item.id}
        renderItem={renderArtist}
        contentContainerStyle={styles.artistList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  artistList: {
    paddingBottom: 10,
  },
  artistContainer: {
    marginBottom: 20,
  },
  artistName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  artistCategory: {
    fontSize: 14,
    marginBottom: 10,
  },
  portfolioItem: {
    marginRight: 10,
  },
  portfolioImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default PortfolioScreen;

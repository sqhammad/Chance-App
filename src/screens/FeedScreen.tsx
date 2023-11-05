import React from 'react';
import { View, StyleSheet, Image, FlatList, Text, Dimensions, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import event1 from '../../assets/events/event1.jpg';
import event2 from '../../assets/events/event2.jpg';
import event3 from '../../assets/events/event3.jpg';
import post1 from '../../assets/posts/post1.jpg';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


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

const eventObject = {
  photos: [event1, event2, event3],
  name: 'Sample Event',
  ticketPrice: '$20',
  availableSeats: 100,
  place: 'Sample Venue',
  dateTime: '2023-07-30 18:00',
  description: 'Atoms of radioactive elements can split. According to Albert Einstein, mass and energy are interchangeable under certain circumstances. When atoms split, the process is called nuclear fission. In this case, a small amount of mass is converted into energy. Thus the energy released cannot do much damage. However, several subatomic particles called neutrons are also emitted during this process. Each neutron will hit a radioactive element releasing more neutrons in the process. This causes a chain reaction and creates a large amount of energy. This energy is converted into heat which expands uncontrollably causing an explosion. Hence, atoms do not literally explode. They generate energy that can cause explosions.',
};

const post = {
  imageUrl: post1,
  username: 'Itachi',
  caption: 'I am Itachi Uchiha from Naruto!',
  likes: 100,
  comments: 20,
  timestamp: '2023-07-22 12:34 PM',
};

const FeedScreen = ({ navigation }) => {

  const handleEventImagePress = () => {
    navigation.navigate('EventDetails', { event: eventObject });
  };

  const handlePostImagePress = () => {
    navigation.navigate('PostDetails', { post: post });
  };

  const renderEventImage = ({ item }: { item: { id: string; image: any } }) => (
    <TouchableOpacity onPress={handleEventImagePress}>
      <Image source={item.image} style={{ width: screenWidth, height: screenHeight * 0.3, }} resizeMode="contain" />
    </TouchableOpacity>
  );

  const renderPostImage = ({ item }: { item: { id: string; artist: string; image: any } }) => (
    <TouchableOpacity onPress={handlePostImagePress}>
      <View style={styles.postContainer}>
        <Text style={styles.artistName}>{item.artist}</Text>
        <Image style={[styles.image, { height: 200 }]} source={item.image} resizeMode="contain" />
        <Text style={styles.caption}>caption</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar hidden={false} />
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.navigate('ProfileScreen')}>
        <MaterialIcons name="account-circle" size={37} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Home</Text>
        <MaterialCommunityIcons name='message' size={31} color="white" />
      </View>
      <LinearGradient
        colors={['#ffffff', '#00cccc', '#009999']}
        style={styles.container}
      >
        <ScrollView>
          {/* <Carousel data={carouselImages} renderItem={renderEventImage} sliderWidth={screenWidth}
            itemWidth={screenWidth} layout="default" loop style={{
              paddingBottom: 10, backgroundColor: '#fff', marginHorizontal:0
            }} /> */}
          <FlatList data={postImages} keyExtractor={(item) => item.id}
            renderItem={renderPostImage} style={{ marginTop: 10 }} />
        </ScrollView>
      </LinearGradient>
      <View style={styles.bottomNav}>
        <MaterialIcons name="home" size={37} color="#009999" />
        <AntDesign name="search1" size={32} color="#009999" />
        <MaterialIcons name="add-circle" size={37} color="#009999" />
        <MaterialCommunityIcons name="web" size={35} color="#009999" />
        <Entypo name="menu" size={38} color="#009999" />
      </View>
      {/* </StatusBar> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    // height: screenHeight * 0.9
  },
  header: {
    height: screenHeight * 0.07,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#009999",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "600",
    color: "white"
  },
  bottomNav: {
    height: screenHeight * 0.065,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  postContainer: {
    display: 'flex',
    margin: 5,
    // padding: 5,
    paddingBottom: 10,
    width: screenWidth * 0.9,
    // borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'flex-start', // Updated this line
    alignSelf: 'center',
    marginBottom: 10,
    paddingTop: 10,
    borderTopColor: "black",
    borderTopWidth: 1,

  },
  image: {
    display: 'flex',
    width: '100%',
    margin: 10,
    alignSelf: 'center',
    // borderRadius:10
  },
  artistName: {
    margin: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  caption: {
    margin: 10,
    fontSize: 16,
  },
});

export default FeedScreen;

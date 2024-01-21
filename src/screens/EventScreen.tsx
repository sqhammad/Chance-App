import React from 'react';
import { View, StyleSheet, Image, FlatList, Text, Dimensions, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import event1 from '../../assets/events/event1.jpg';
import event2 from '../../assets/events/event2.jpg';
import event3 from '../../assets/events/event3.jpg';
import post1 from '../../assets/posts/post1.jpg';
import paint from '../../assets/eventtype/paint.png';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import BottomNavigator from '../navigation/bottomNavigator';
import EventTypeCarousel from '../carousel/evenTypeCarousel';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const postImages = [
  { id: '1', artist: 'John Doe', image: event1, profileImage: post1, },
  { id: '2', artist: 'John Doe', image: event2, profileImage: post1, },
  { id: '3', artist: 'John Doe', image: event3, profileImage: post1, },
  { id: '4', artist: 'Itachi Uchiha', image: event1, profileImage: post1, },
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
  imageUrl: event1,
  profileImage: post1,
  username: 'Itachi',
  caption: 'I am Itachi Uchiha from Naruto!',
  likes: 100,
  comments: 20,
  timestamp: '2023-07-22 12:34 PM',
};

const EventScreen = ({ navigation }) => {

  const handleEventImagePress = () => {
    navigation.navigate('EventDetails', { event: eventObject });
  };

  const handlePostImagePress = () => {
    navigation.navigate('PostDetails', { post: post });
  };

  const renderCarouselItem = ({ item, index }) => (
    <View style={styles.carouselDotContainer}>
      <View style={[styles.carouselDot, index === 0 && styles.activeDot]} />
    </View>
  );
  const EventTypeItem = ({ onPress, image }) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.eventTypeContainer}>
        <Image source={paint} style={styles.eventTypeImage} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );

  const renderEventType = ({ item }) => (
    <EventTypeItem onPress={handleEventImagePress} image={item.image} />
  );

  const renderPostImage = ({ item }: { item: { id: string; artist: string; image: any; profileImage: any } }) => (
    <TouchableOpacity onPress={handlePostImagePress}>
      <View style={styles.postContainer}>
        <View style={styles.artistView}>
          <Image source={post.profileImage} style={{ width: screenWidth * 0.09, aspectRatio: 1, borderRadius: 50 }} resizeMode="contain" />
          <Text style={styles.artistName}>{item.artist}</Text>
        </View>
        <Image source={post.imageUrl} style={styles.postImage} resizeMode="contain" />
        <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: 1, width: screenWidth, paddingVertical: 5, paddingLeft: 0 }}>
          <MaterialCommunityIcons name='heart' size={35} color="red" style={{ marginHorizontal: 5 }} />
          <MaterialCommunityIcons name='message-outline' size={30} color="black" style={{ marginHorizontal: 5 }} />
          <MaterialCommunityIcons name='forwardburger' size={35} color="black" style={{ marginHorizontal: 5 }} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.caption}>Caption</Text>
          <View style={styles.likesCommentsContainer}>
            <Text style={styles.comments}>{`${post.comments} comments`}</Text>
          </View>
          <Text style={styles.timestamp}>{post.timestamp}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar hidden={false} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <MaterialIcons name="account-circle" size={37} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Event</Text>
        <MaterialCommunityIcons name='message' size={31} color="#ffffff" />
      </View>
      <Toast />
      <View style={styles.container}>
        <ScrollView>
          <Carousel
            data={postImages}
            renderItem={renderEventType}
            sliderWidth={screenWidth}
            itemWidth={screenWidth * 0.2}
            layout="default"
            loop
          />
          <FlatList data={postImages} keyExtractor={(item) => item.id}
            renderItem={renderPostImage} style={{ marginTop: 10 }} />
        </ScrollView>
      </View>
      <BottomNavigator navigation={navigation} />
      {/* </StatusBar> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    backgroundColor: "#ffffff"
    // height: screenHeight * 0.9
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
    color: "#ffffff"
  },
  bottomNav: {
    height: screenHeight * 0.065,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#4dc9ff",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  postContainer: {
    backgroundColor: "rgb(255,255,255)",
    alignItems: "flex-start",
    marginBottom: 0,
    paddingBottom: 0,
    maxHeight: screenHeight * 0.95,
  },
  postImage: {
    justifyContent: "center",
    alignSelf: "center",
    maxHeight: screenHeight * 0.7,
    width: screenWidth,
    backgroundColor: '#000',
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
    paddingBottom: 0
  },
  image: {
    display: 'flex',
    alignSelf: 'center',
    width: '80%',
    aspectRatio: 1,
    // borderRadius:10
  },
  carouselDotContainer: {
    width: 10,
    height: 10,
    marginHorizontal: 5,
  },
  carouselDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
  },
  activeDot: {
    backgroundColor: '#4dc9ff', // Active dot color
  },

  paginationContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: '#888', // Inactive dot color
  },
  paginationInactiveDot: {
    backgroundColor: '#ccc', // Inactive dot color
  },
  eventTypeContainer: {
    width: screenWidth * 0.2,
    aspectRatio: 1,
    borderRadius: 100,
    borderWidth: 1,
    margin: 5,
  },
  eventTypeImage: {
    width: screenWidth * 0.2,
    aspectRatio: 1,
    alignSelf: "center",
    resizeMode: 'contain'
  },
});

export default EventScreen;

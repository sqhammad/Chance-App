import React from 'react';
import { View, StyleSheet, Image, FlatList, Text, Dimensions, TouchableOpacity, ScrollView, StatusBar } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import BottomNavigator from '../navigation/bottomNavigator';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import event1 from '../../assets/events/event1.jpg';
import event2 from '../../assets/events/event2.jpg';
import eventsinging from '../../assets/events/eventsinging.jpg';
import post1 from '../../assets/posts/post1.jpg';
import paint from '../../assets/eventtype/paint.png';
import actorjob from '../../assets/job/actor.jpg';
import modelingjob from '../../assets/job/modeling.jpg';
import singingjob from '../../assets/job/singing.jpeg';
import TopNavigation from '../navigation/topNavigation';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const postImages = [
  {
    id: '1', artist: 'John Doe', image: actorjob, profileImage: post1,
    job_title: 'Actor',
    job_desc: 'Atoms of radioactive elements can split. According to Albert Einstein, mass and energy are interchangeable under certain circumstances. When atoms split, the process is called nuclear fission. In this case, a small amount of mass is converted into energy. ',
    job_shift: 'Morning',
    job_duration: '2023-07-30 18:00',
    job_pay: '$20',
  },
  {
    id: '2', artist: 'John Doe', image: modelingjob, profileImage: post1,
    job_title: 'Model',
    job_desc: 'Atoms of radioactive elements can split. According to Albert Einstein, mass and energy are interchangeable under certain circumstances. When atoms split, the process is called nuclear fission. In this case, a small amount of mass is converted into energy. ',
    job_shift: 'Morning',
    job_duration: '2023-07-30 18:00',
    job_pay: '$20',
  },
  {
    id: '3', artist: 'John Doe', image: singingjob, profileImage: post1,
    job_title: 'Singer',
    job_desc: 'Atoms of radioactive elements can split. According to Albert Einstein, mass and energy are interchangeable under certain circumstances. When atoms split, the process is called nuclear fission. In this case, a small amount of mass is converted into energy. ',
    job_shift: 'Morning',
    job_duration: '2023-07-30 18:00',
    job_pay: '$20',
  },
];



const eventObject = {
  photos: [actorjob, modelingjob, singingjob],
  event_name: 'Sample Event',
  event_desc: 'Atoms of radioactive elements can split. According to Albert Einstein, mass and energy are interchangeable under certain circumstances. When atoms split, the process is called nuclear fission. In this case, a small amount of mass is converted into energy. Thus the energy released cannot do much damage. However, several subatomic particles called neutrons are also emitted during this process. Each neutron will hit a radioactive element releasing more neutrons in the process. This causes a chain reaction and creates a large amount of energy. This energy is converted into heat which expands uncontrollably causing an explosion. Hence, atoms do not literally explode. They generate energy that can cause explosions.',
  event_link: 'Sample Venue',
  event_datetime: '2023-07-30 18:00',
  event_charges: '$20',
};

const post = {
  imageUrl: actorjob,
  profileImage: post1,
  username: 'Itachi',
  caption: 'I am Itachi Uchiha from Naruto!',
  likes: 100,
  comments: 20,
  timestamp: '2023-07-22 12:34 PM',
};

const JobScreen = ({ navigation }) => {

  const handleEventImagePress = () => {
    navigation.navigate('EventDetails', { event: eventObject });
  };

  const handlePostImagePress = (item) => {
    navigation.navigate('JobDetails', { post: item });
  };


  const renderCarouselItem = ({ item }: { item: { id: string; image: any, category: any } }) => (
    <TouchableOpacity onPress={handleEventImagePress} style={{ justifyContent: 'center', alignItems: 'center' }} >
      <Image source={item.image} style={styles.carouselImage} resizeMode="cover" />
      <Text>{item.category}</Text>
    </TouchableOpacity>
  );

  const carouselItems = [
    { id: '1', image: eventsinging, category: 'singing' },
    { id: '2', image: paint, category: 'painting' },
    { id: '3', image: event1, category: 'art' },
    { id: '4', image: event2, category: 'event' },
  ];


  const renderPostImage = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => handlePostImagePress(item)}>
      <View style={styles.postContainer}>
        <View style={styles.artistView}>
          <Image source={post.profileImage} style={{ width: screenWidth * 0.09, aspectRatio: 1, borderRadius: 50 }} resizeMode="contain" />
          <Text style={styles.artistName}>{item.artist}</Text>
        </View>
        <Image source={item.image} style={styles.postImage} resizeMode="contain" />
        <View style={{ flexDirection: "row", alignItems: "center", width: screenWidth, paddingVertical: 5, paddingLeft: 0 }}>
          <MaterialCommunityIcons name='heart' size={35} color="red" style={{ marginHorizontal: 5 }} />
          <MaterialCommunityIcons name='forwardburger' size={35} color="black" style={{ marginHorizontal: 5 }} />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.likesCommentsContainer}>
            <Text style={styles.comments}>Job Position : {item.job_title}</Text>
          </View>
          <Text style={styles.caption}>Job Pay : {item.job_pay}</Text>
          <Text style={styles.timestamp}>Job Shift : {item.job_shift}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar hidden={false} />
      <TopNavigation navigation={navigation} heading={'Jobs'} isGoBack={false} />
      <Toast />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.carouselContainer}>
            <FlatList
              data={carouselItems}
              renderItem={renderCarouselItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
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
  postContainer: {
    backgroundColor: "rgb(255,255,255)",
    alignItems: "flex-start",
    marginBottom: 0,
    paddingBottom: 0,
    maxHeight: screenHeight * 0.95,
    borderTopWidth: 0.5
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
  carouselImage: {
    width: screenWidth * 0.18,
    height: screenWidth * 0.18,
    borderRadius: 100,
    margin: 10,
  },
  carouselContainer: {
    margin: 5,
    alignItems: 'flex-start',
  },
});

export default JobScreen;

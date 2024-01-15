import { MaterialIcons, AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Dimensions, StatusBar, Image, FlatList, ScrollView } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import Modal from 'react-native-modal';
import Toast from "react-native-toast-message";
import DateTimePicker from '@react-native-community/datetimepicker';

import * as Permissions from 'expo-permissions';

import post1 from '../../assets/posts/post1.jpg';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const AddPostScreen = ({ navigation }) => {
  const [cameraRef, setCameraRef] = useState(null);
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [postFeedModal, setPostFeedModal] = useState(false);
  const [postEventModal, setPostEventModal] = useState(false);
  const [postJobModal, setPostJobModal] = useState(false);
  const [postFeedData, setPostFeedData] = React.useState({
    user_id: 0,
    post: null,
    caption: '',
  })
  const [postEventData, setPostEventData] = React.useState({
    user_id: 0,
    post: null,
    event_name: '',
    event_desc: '',
    event_link: '',
    event_datetime: '',
    event_charges: ''
  })
  const [postJobData, setPostJobData] = React.useState({
    user_id: 0,
    post: null,
    job_title: '',
    job_desc: '',
    job_duration: '',
    job_shift: '',
    job_pay: '',
  })

  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  const EventDateInput = () => {
    const [showDatePicker, setShowDatePicker] = React.useState(false);

    const onDateChange = (event, selectedDate) => {
      if (selectedDate) {
        handleEventChange('event_datetime', selectedDate);
      }
      setShowDatePicker(false);
    };

    return (
      <>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Event Date & Time"
            value={postEventData.event_datetime ? new Date(postEventData.event_datetime).toLocaleString() : ''}
            editable={false}
          />
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={postEventData.event_datetime ? new Date(postEventData.event_datetime) : new Date()}
            mode="datetime"
            display="default"
            onChange={onDateChange}
          />
        )}
      </>
    );
  };

  React.useEffect(() => {
    requestMediaPermission(); // Check and request media permission on component mount
    fetchGalleryImages();
  }, []);

  const requestMediaPermission = async () => {
    const cameraPermission = await Camera.requestPermissionsAsync();
    const mediaPermission = await MediaLibrary.requestPermissionsAsync();

    if (cameraPermission.status !== 'granted' || mediaPermission.status !== 'granted') {
      console.log('Camera and/or Media permission not granted!');
    }
  };

  const fetchGalleryImages = async () => {
    const { assets } = await MediaLibrary.getAssetsAsync({ mediaType: ['photo', 'video'] });
    setSelectedImage(await assets[0].uri)
    setGalleryImages(assets);
  };


  const handleImageSelect = (image) => {
    setSelectedImage(image.uri);
  };

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setIsCameraVisible(false);

      // Save the captured photo to the gallery
      await MediaLibrary.createAssetAsync(photo.uri);

      // Set the captured photo to the state
      setSelectedImage(photo.uri);
      // setIsCameraVisible(false)
    }
  };

  const openCamera = () => {
    setIsCameraVisible(true);
  };

  const handleFeedChange = (field, text) => {
    setPostFeedData({
      ...postFeedData,
      [field]: text
    });
  }
  const handleEventChange = (field, text) => {
    setPostEventData({
      ...postEventData,
      [field]: text
    });
  }
  const handleJobChange = (field, text) => {
    setPostJobData({
      ...postJobData,
      [field]: text
    });
  }

  const handleSaveFeed = () => {
    if (postFeedData.caption == '') {
      Toast.show({
        type: "error",
        text1: "Field can't be Empty",
        text2: "Field can't be Empty.",
        position: "top",
        visibilityTime: 3000,
      });
    } else {
      setPostFeedModal(false);
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Feed Posted",
        position: "top",
        visibilityTime: 3000,
      });
      setTimeout(() => {
        navigation.replace('Feeds');
      }, 1000);
    }
  }

  const handleSaveEvent = () => {
    if (postEventData.event_name == '' || postEventData.event_desc == '' || postEventData.event_link == '' || postEventData.event_datetime == '' || postEventData.event_charges == '') {
      Toast.show({
        type: "error",
        text1: "Field can't be Empty",
        text2: "Field can't be Empty.",
        position: "top",
        visibilityTime: 3000,
      });
    } else {
      setPostEventModal(false)
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Event Posted",
        position: "top",
        visibilityTime: 3000,
      });
      setTimeout(() => {
        navigation.replace('Feeds');
      }, 1000);
    }
  }

  const handleSaveJob = () => {
    if (postJobData.job_title == '' || postJobData.job_desc == '' || postJobData.job_pay == '' || postJobData.job_shift == '' || postJobData.job_duration == '') {
      Toast.show({
        type: "error",
        text1: "Field can't be Empty",
        text2: "Field can't be Empty.",
        position: "top",
        visibilityTime: 3000,
      });
    } else {
      setPostJobModal(false)
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Job Posted",
        position: "top",
        visibilityTime: 3000,
      });
      setTimeout(() => {
        navigation.replace('Feeds');
      }, 1000);
    }
  }

  return (
    <>
      <StatusBar hidden={false} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={35} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Post</Text>
        <TouchableOpacity onPress={openCamera} >
          <MaterialCommunityIcons name="camera-outline" size={35} color="#ffffff" />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <>
            {isCameraVisible ? (
              <Camera
                style={styles.camera}
                type={Camera.Constants.Type.back}
                ref={(ref) => setCameraRef(ref)}
              >
                <View style={styles.cameraContainer}>
                  <TouchableOpacity style={styles.backButton} onPress={() => setIsCameraVisible(false)}>
                    <MaterialIcons name="arrow-back" size={35} color="black" />
                  </TouchableOpacity>
                </View>
                <View style={styles.cameraContainer}>
                  <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
                    <Text style={styles.captureButtonText}>Capture</Text>
                  </TouchableOpacity>
                </View>
              </Camera>
            ) : (
              <View style={{ justifyContent: "center", alignItems: "center", height: screenHeight * 0.47, backgroundColor: '#000000' }}>
                {selectedImage ? (
                  <Image source={{ uri: selectedImage }} style={{ height: screenHeight * 0.47, aspectRatio: 1 }} resizeMode="contain" />
                ) : (
                  <Text style={{ color: 'white', fontSize: 20 }}>No Image Selected</Text>
                )}
              </View>
            )}
          </>
          <View>

            {/* Display all the images from the gallery */}
            <FlatList
              data={galleryImages}
              keyExtractor={(item) => item.id}
              // horizontal
              numColumns={3}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleImageSelect(item)}>
                  <Image source={{ uri: item.uri }} style={{ width: screenWidth * 0.3333, aspectRatio: 1, }} />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => setPostFeedModal(true)}>
          <Text style={[styles.addButtonText, { color: '#ffffff', fontSize: 20, fontWeight: '500' }]}>Post Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPostEventModal(true)}>
          <Text style={[styles.addButtonText, { color: '#ffffff', fontSize: 20, fontWeight: '500' }]}>Post Event</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPostJobModal(true)}>
          <Text style={[styles.addButtonText, { color: '#ffffff', fontSize: 20, fontWeight: '500' }]}>Post Job</Text>
        </TouchableOpacity>
      </View >
      <Toast />

      <Modal isVisible={postFeedModal}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeading}>Post Feed</Text>
            {/* Add your content for the new modal here */}
            <TextInput
              value={postFeedData.caption}
              placeholder={"Feed Caption"}
              onChangeText={(text) => handleFeedChange('caption', text)}
              variant="outlined"
              multiline={true}
              style={[styles.inputStyle, { marginBottom: 15 }]}
            />
            <View style={{ flexDirection: "row", marginHorizontal: 10, marginTop: 10 }}>
              <View
                style={{
                  flexDirection: "row-reverse",
                  backgroundColor: "#4dc9ff",
                  width: 70,
                  alignContent: "center",
                  justifyContent: "space-around",
                  padding: 5,
                  borderRadius: 10,
                  marginTop: 5,
                  marginBottom: 20,
                }}>
                <TouchableOpacity onPress={() => setPostFeedModal(false)}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }} />
              <View
                style={{
                  flexDirection: "row-reverse",
                  backgroundColor: "#4dc9ff",
                  width: 70,
                  alignContent: "center",
                  justifyContent: "space-around",
                  padding: 5,
                  borderRadius: 10,
                  marginTop: 5,
                  marginBottom: 20,
                }}>
                <TouchableOpacity onPress={() => {
                  handleSaveFeed()
                }}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Post
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Modal isVisible={postEventModal}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeading}>Post Event</Text>
            <View style={{ marginBottom: 15 }}>
              <TextInput
                variant="outlined"
                value={postEventData.event_name}
                placeholder={"Event Name"}
                onChangeText={(text) => handleEventChange('event_name', text)}
                style={[styles.inputStyle, { marginBottom: 10 }]}
              />
              <TextInput
                variant="outlined"
                value={postEventData.event_desc}
                placeholder={"Event Description"}
                onChangeText={(text) => handleEventChange('event_desc', text)}
                style={[styles.inputStyle, { marginBottom: 10 }]}
                multiline={true}
              // numberOfLines={3}
              />
            </View>
            <EventDateInput />
            <TextInput
              variant="outlined"
              value={postEventData.event_charges}
              placeholder={"Event Name"}
              onChangeText={(text) => handleEventChange('event_charges', text)}
              style={[styles.inputStyle, { marginBottom: 10 }]}
            />
            <TextInput
              variant="outlined"
              value={postEventData.event_link}
              placeholder={"Event Link"}
              onChangeText={(text) => handleEventChange('event_link', text)}
              style={[styles.inputStyle, { marginBottom: 10 }]}
            />
            <View style={{ flexDirection: "row", marginHorizontal: 10, marginTop: 15 }}>
              <View
                style={{
                  flexDirection: "row-reverse",
                  backgroundColor: "#4dc9ff",
                  width: 70,
                  alignContent: "center",
                  justifyContent: "space-around",
                  padding: 5,
                  borderRadius: 10,
                  marginTop: 5,
                  marginBottom: 20,
                }}>
                <TouchableOpacity onPress={() => setPostEventModal(false)}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }} />
              <View
                style={{
                  flexDirection: "row-reverse",
                  backgroundColor: "#4dc9ff",
                  width: 70,
                  alignContent: "center",
                  justifyContent: "space-around",
                  padding: 5,
                  borderRadius: 10,
                  marginTop: 5,
                  marginBottom: 20,
                }}>
                <TouchableOpacity onPress={() => {
                  handleSaveEvent()
                }}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Post
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal >
      <Modal isVisible={postJobModal}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeading}>Post Job</Text>
            <View style={{ marginBottom: 15 }}>
              <TextInput
                variant="outlined"
                value={postJobData.job_title}
                placeholder={"Job Title"}
                onChangeText={(text) => handleEventChange('job_title', text)}
                style={[styles.inputStyle, { marginBottom: 10 }]}
              />
              <TextInput
                variant="outlined"
                value={postJobData.job_desc}
                placeholder={"Job Description"}
                onChangeText={(text) => handleEventChange('job_desc', text)}
                style={[styles.inputStyle, { marginBottom: 10 }]}
                multiline={true}
              // numberOfLines={3}
              />
            </View>
            <EventDateInput />
            <TextInput
              variant="outlined"
              value={postJobData.job_duration}
              placeholder={"Job Duration"}
              onChangeText={(text) => handleEventChange('job_duration', text)}
              style={[styles.inputStyle, { marginBottom: 10 }]}
            />
            <TextInput
              variant="outlined"
              value={postJobData.job_shift}
              placeholder={"Job Shift"}
              onChangeText={(text) => handleEventChange('job_shift', text)}
              style={[styles.inputStyle, { marginBottom: 10 }]}
            />
            <TextInput
              variant="outlined"
              value={postJobData.job_pay}
              placeholder={"Job Pay"}
              onChangeText={(text) => handleEventChange('job_pay', text)}
              style={[styles.inputStyle, { marginBottom: 10 }]}
            />
            <View style={{ flexDirection: "row", marginHorizontal: 10, marginTop: 15 }}>
              <View
                style={{
                  flexDirection: "row-reverse",
                  backgroundColor: "#4dc9ff",
                  width: 70,
                  alignContent: "center",
                  justifyContent: "space-around",
                  padding: 5,
                  borderRadius: 10,
                  marginTop: 5,
                  marginBottom: 20,
                }}>
                <TouchableOpacity onPress={() => setPostJobModal(false)}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1 }} />
              <View
                style={{
                  flexDirection: "row-reverse",
                  backgroundColor: "#4dc9ff",
                  width: 70,
                  alignContent: "center",
                  justifyContent: "space-around",
                  padding: 5,
                  borderRadius: 10,
                  marginTop: 5,
                  marginBottom: 20,
                }}>
                <TouchableOpacity onPress={() => {
                  handleSaveEvent()
                }}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Post
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal >
    </>

  );
};

const styles = StyleSheet.create({
  modalContainer: {
    display: "flex",
    backgroundColor: "white",
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingTop: 25,
    width: screenWidth * 0.9,
  },

  modalHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333333',
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
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    backgroundColor: "#ffffff"
    // height: screenHeight * 0.9
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionInput: {
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  mediaInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#4dc9ff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  bottomNav: {
    height: screenHeight * 0.065,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#4dc9ff",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  buttonView: {
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1565C0",
    margin: 10,
    padding: 10,
    // width: 200,
    height: 50,
    borderRadius: 10,
    borderColor: '#1565C0',
    borderWidth: 1
  },
  loginBtnText: {
    fontFamily: "Medium",
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
  camera: {
    flex: 1,
    width: screenWidth,
    height: screenHeight * 0.865
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  backButton: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    marginLeft: 20,
    marginTop: 10,
    padding: 5,
  },
  captureButton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    marginLeft: 20,
    marginBottom: 20,
    padding: 10,
  },
  captureButtonText: {
    fontSize: 16,
  },
  inputStyle: {
    fontFamily: "Medium",
    fontSize: 15,
    backgroundColor: "white",
    padding: 12,
    borderBottomWidth: 1
  },
});

export default AddPostScreen;

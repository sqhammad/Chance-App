import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text, TouchableOpacity, Image, Dimensions, Platform, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons as MaterialCommunityIcons } from 'react-native-vector-icons';

import logo from '../../assets/logo/chanceLogo2.png'


const SignupScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [managedBy, setManagedBy] = useState('');
  const [isOtp, setIsOtp] = useState(false);
  const [otp, setOtp] = useState('');
  const [image, setImage] = useState(null);

  const handleSignup = () => {
    if (!isOtp) { }
  };

  const pickImage = async () => {
    // askMediaPermission()
    const status = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.warn(status)
    if (status.status == 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };

  React.useEffect(() => {
    // Check and request permissions (iOS only)
    if (Platform.OS === 'ios') {
      (async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      })();
    }
  }, []);
  return (
    <LinearGradient
      colors={['#ffffff', '#ffffff', '#009999']}
      style={styles.container}
    >
      <ScrollView style={{marginVertical:15,}}>
        <Image
          source={logo}
          resizeMode='contain'
          style={{
            height: height * 0.26, width: "auto", marginBottom: 30,
          }}
        />
        {/* <TouchableOpacity style={{ alignSelf: "center", marginTop: 10, marginBottom: 15 }}
        onPress={() => pickImage()}>
        {image === null ? (
          <MaterialCommunityIcons name="account-circle-outline" size={150} color="black" style={styles.image} />
        ) : (
          <>
            <Image source={{ uri: image }} style={[styles.image, { height: 150, width: 150, borderRadius: 100, margin: 10 }]} />
            <MaterialCommunityIcons name="plus-circle" size={40} color="black"
              style={{
                position: 'absolute', top: -1, right: -1, borderRadius: 50, fontWeight: "900"
              }} />
          </>
        )}
      </TouchableOpacity> */}
        <TextInput
          placeholder="Enter First Name"
          value={firstName}
          onChangeText={setFirstName}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter Last Name"
          value={lastName}
          onChangeText={setLastName}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter Phone Number"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Managed By"
          value={managedBy}
          onChangeText={setManagedBy}
          style={styles.input}
        />
        {isOtp && <TextInput
          placeholder="Enter OTP"
          value={otp}
          onChangeText={setOtp}
          style={styles.input}
        />}
        {isOtp ? (
          <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Feeds')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={() => setIsOtp(true)}>
            <Text style={styles.buttonText}>Get OTP</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          Already a user? Login here
        </Text>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  input: {
    marginBottom: 25,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 20,
    borderRadius: 50,
    width: '100%',
    alignSelf: "center"
  },
  button: {
    height: 50,
    borderRadius: 50,
    width: '45%',
    backgroundColor: '#004466', // Add your desired background color
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: 5,
    alignSelf: "center"
  },
  buttonText: {
    color: 'white', // Add your desired text color
    fontSize: 16,
    fontWeight: "bold"
  },
  loginLink: {
    alignSelf: 'center',
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default SignupScreen;

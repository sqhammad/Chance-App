import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import CountryPicker, { Country, CountryCode, CallingCode } from 'react-native-country-picker-modal';
import { LinearGradient } from 'expo-linear-gradient';

import logo from '../../assets/logo/chanceLogo2.png'

const LoginScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');
  const { email, setEmail } = React.useState('');
  // const [countryCode, setCountryCode] = useState<CountryCode | undefined>('GB');
  // const [callingCode, setCallingCode] = useState('');
  // const [mobileNumber, setMobileNumber] = useState('');
  // const [otp, setOTP] = useState('');
  // const [isOTPSent, setIsOTPSent] = useState(false);

  // const handleSendOTP = () => {
  //   // Send OTP logic here
  //   setIsOTPSent(true);
  // };

  // const handleCountryCodeChange = (country: Country) => {
  //   setCountryCode(country.cca2);
  //   setCallingCode(country.callingCode[0])
  // };

  const handleLogin = () => {
    // Handle login logic here
    navigation.replace('Feeds')
  };

  return (
    <LinearGradient
      colors={['#ffffff', '#ffffff', '#009999']}
      style={styles.container}
    >
      <Image
        source={logo}
        resizeMode='contain'
        style={{
          height: height * 0.26, width: "auto", marginBottom: 50,
          marginTop: height * 0.15
        }}
      />
      {/* <View style={styles.mobiledev}>
        <View style={styles.countryPickerContainer}>
          <CountryPicker
            withFilter
            withFlag
            // withCountryNameButton // Display country name as the label
            withCallingCodeButton
            onSelect={handleCountryCodeChange}
            countryCode={countryCode}
            containerButtonStyle={{ height: 50 }}
          />
        </View>
        <TextInput
          placeholder="Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          style={styles.input}
          keyboardType="numeric"
        />
      </View> */}
      <TextInput
        style={styles.input}
        value={email}
        placeholder='Enter Email / Mobile Number'
      />
      <TextInput
        style={styles.input}
        value={email}
        placeholder='Enter Password'
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Text style={{
        alignSelf: "flex-end", margin: 5, fontSize: 15,
        color: "blue", textDecorationLine: "underline",
      }}>
        Forgot Password?</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: 20,
    // background: 'radial-gradient(circle at center, #ffffff, #ee0979)',
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
    marginVertical: 5,
  },
  buttonText: {
    color: 'white', // Add your desired text color
    fontSize: 16,
    fontWeight: "bold"
  },
  resendLink: {
    alignSelf: 'center',
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  countryLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  countryPickerContainer: {
    flex: 1,
    justifyContent: 'center', // Center the button horizontally
    alignItems: 'center', // Center the button vertically
    padding: 0,
    margin: 0,
  },
});

export default LoginScreen;

import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import CountryPicker, { Country, CountryCode, CallingCode } from 'react-native-country-picker-modal';
import logo from '../../assets/logo/chanceLogo2.png'

const LoginScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');
  const [countryCode, setCountryCode] = useState<CountryCode | undefined>('GB');
  const [callingCode, setCallingCode] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [isOTPSent, setIsOTPSent] = useState(false);

  const handleSendOTP = () => {
    // Send OTP logic here
    setIsOTPSent(true);
  };

  const handleCountryCodeChange = (country: Country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0])
    console.warn(country.callingCode[0])
  };

  const handleLogin = () => {
    // Handle login logic here
    navigation.replace('Feeds')
  };

  return (
    <View style={styles.container}>
      <Image
        // style={styles.tinyLogo}
        source={logo}
        style={{ height: height * 0.26, width: "auto", marginBottom: 50, marginTop: height * 0.15 }}
      />
      <View style={styles.mobiledev}>
        <View style={styles.countryPickerContainer}>
          <CountryPicker
            withFilter
            withFlag
            // withCountryNameButton // Display country name as the label
            withCallingCodeButton
            onSelect={handleCountryCodeChange}
            countryCode={countryCode}
            containerButtonStyle={{height:50}}
          />
        </View>
        <TextInput
          placeholder="Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          style={styles.input}
          keyboardType="numeric"
        />
      </View>
      {isOTPSent ? (
        <TextInput
          placeholder="OTP"
          value={otp}
          onChangeText={setOTP}
          style={styles.otpInput}
          keyboardType="numeric"
        />
      ) : null}
      <TouchableOpacity
        onPress={isOTPSent ? handleLogin : handleSendOTP}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          {isOTPSent ? 'Verify OTP' : 'Send OTP'}
        </Text>
      </TouchableOpacity>
      {isOTPSent ? (
        <Text style={styles.resendLink} onPress={() => setIsOTPSent(false)}>
          Resend OTP
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft:20,
    width: '70%',
    borderRadius:50,
  },
  otpInput: {
    marginBottom: 20,
    padding: 10,
    paddingLeft:20,
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
    borderRadius:50,
  },
  mobiledev: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    height: 50,
    borderRadius: 50,
    backgroundColor: '#007AFF', // Add your desired background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // Add your desired text color
    fontSize: 16,
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
    padding:0,
    margin:0,
  },
});

export default LoginScreen;

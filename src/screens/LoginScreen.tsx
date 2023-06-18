import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [isOTPSent, setIsOTPSent] = useState(false);

  const handleSendOTP = () => {
    // Send OTP logic here
    setIsOTPSent(true);
  };

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        style={styles.input}
        keyboardType="numeric"
      />
      {isOTPSent ? (
        <TextInput
          placeholder="OTP"
          value={otp}
          onChangeText={setOTP}
          style={styles.input}
          keyboardType="numeric"
        />
      ) : null}
      <Button
        title={isOTPSent ? 'Verify OTP' : 'Send OTP'}
        onPress={isOTPSent ? handleLogin : handleSendOTP}
        style={styles.button}
      />
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
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  button: {
    marginTop: 10,
  },
  resendLink: {
    alignSelf: 'center',
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;

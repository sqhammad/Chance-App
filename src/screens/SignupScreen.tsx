import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';

const SignupScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [managedBy, setManagedBy] = useState('');

  const handleSignup = () => {
    // Handle signup logic here
  };

  const handleLoginLinkPress = () => {
    // Navigate to the login screen
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      <TextInput
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        style={styles.input}
      />
      <TextInput
        placeholder="Managed By"
        value={managedBy}
        onChangeText={setManagedBy}
        style={styles.input}
      />
      <Button title="Signup" onPress={handleSignup} style={styles.button} />
      <Text style={styles.loginLink} onPress={handleLoginLinkPress}>
        Already a user? Login here
      </Text>
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
  loginLink: {
    alignSelf: 'center',
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default SignupScreen;

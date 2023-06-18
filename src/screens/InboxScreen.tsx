import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';

// Mock data for messages
const messages = [
  { id: '1', sender: 'John Doe', message: 'Hello, how are you?' },
  { id: '2', sender: 'Jane Smith', message: 'Are you available for a project?' },
  { id: '3', sender: 'Alex Johnson', message: 'Let\'s discuss the details.' },
];

const InboxScreen = () => {
  const renderMessage = ({ item }) => (
    <TouchableOpacity style={styles.messageContainer}>
      <Text style={styles.sender}>{item.sender}</Text>
      <Text style={styles.message}>{item.message}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  sender: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  message: {
    fontSize: 14,
  },
});

export default InboxScreen;

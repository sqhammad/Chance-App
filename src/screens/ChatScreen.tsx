// ChatScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, } from '@expo/vector-icons';

import directingpost from '../../assets/posts/directing.jpeg';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const ChatScreen = ({ navigation, route }) => {
  const { chat } = route.params;
  const [inputMessage, setInputMessage] = React.useState('');
  const [messages, setMessages] = React.useState([
    { id: '1', text: 'Hi there!', sender: 'John Doe', senderId: 1 },
    { id: '2', text: 'Hello!', sender: 'John Doe', senderId: 4 },
    { id: '3', text: 'How are you?', sender: 'John Doe', senderId: 1 },
    { id: '4', text: 'I am Good, thanks for asking.', sender: 'John Doe', senderId: 4 },
    { id: '5', text: 'And you?', sender: 'John Doe', senderId: 4 },
    { id: '6', text: 'Thanks, doing great.', sender: 'John Doe', senderId: 1 },
  ]);

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = { id: String(messages.length + 1), text: inputMessage, sender: chat.username, senderId: 4 };
      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={item.senderId == 4 ? styles.sentMessage : styles.receivedMessage}>
      {item.senderId == 4 ? (
        <Image source={directingpost}
          style={{ width: screenWidth * 0.09, aspectRatio: 1, borderRadius: 50, }}
          resizeMode="contain" />
      ) : (
        <Image source={chat.image}
          style={{ width: screenWidth * 0.09, aspectRatio: 1, borderRadius: 50, }}
          resizeMode="contain" />
      )}
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={35} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Messages</Text>
        {/* <TouchableOpacity onPress={() => navigation.navigate('UserMessagesScreen')}> */}
        <Image source={chat.image}
          style={{ width: screenWidth * 0.1, aspectRatio: 1, borderRadius: 50, }}
          resizeMode="contain" />
        {/* </TouchableOpacity> */}
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.messageList}
        contentContainerStyle={styles.messageListContent}
        inverted  // to display messages from bottom to top
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Type your message..."
          value={inputMessage}
          onChangeText={(text) => setInputMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: "white"
  },
  messageList: {
    flex: 1,
  },
  messageListContent: {
    padding: 10,
  },
  receivedMessage: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal:15,
    borderRadius: 50,
    maxWidth: '80%',
    marginBottom: 10,
    alignItems: 'center'
  },
  sentMessage: {
    flexDirection: 'row-reverse',
    backgroundColor: '#4dc9ff',
    paddingVertical: 10,
    paddingHorizontal:15,
    borderRadius: 50,
    maxWidth: '80%',
    alignSelf: 'flex-end',
    marginBottom: 10,
    alignItems: 'center'
  },
  messageText: {
    fontSize: 16,
    color: '#000',
    marginHorizontal: 5
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  inputField: {
    flex: 1,
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#4dc9ff',
    padding: 10,
    borderRadius: 50,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ChatScreen;

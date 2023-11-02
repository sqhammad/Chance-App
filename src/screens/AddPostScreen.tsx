import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

const AddPostScreen = () => {
  const [description, setDescription] = useState('');
  const [media, setMedia] = useState('');

  const handleAddPost = () => {
    // Handle logic to save the post

    // Reset the input fields
    setDescription('');
    setMedia('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.descriptionInput}
        value={description}
        onChangeText={setDescription}
        multiline
        placeholder="Enter description"
      />
      <Text style={styles.label}>Media URL:</Text>
      <TextInput
        style={styles.mediaInput}
        value={media}
        onChangeText={setMedia}
        placeholder="Enter media URL"
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddPost}>
        <Text style={styles.addButtonText}>Add Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddPostScreen;

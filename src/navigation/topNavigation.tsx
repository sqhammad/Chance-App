import React from 'react';
import { MaterialIcons, AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function TopNavigation({ navigation, heading, isGoBack }) {
  return (
    <View style={styles.header}>
      {isGoBack && <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={35} color="white" />
      </TouchableOpacity>}
      {!isGoBack && <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
        <MaterialIcons name="account-circle" size={37} color="#ffffff" />
      </TouchableOpacity>}
      <Text style={styles.headerText}>{heading}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('UserMessagesScreen')}>
      <MaterialCommunityIcons name='message' size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

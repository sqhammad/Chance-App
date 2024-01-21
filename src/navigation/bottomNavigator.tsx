import React from 'react';
import { MaterialIcons, AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function BottomNavigator({ navigation }) {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity onPress={() => navigation.navigate('Feeds')}>
        <MaterialIcons name="home" size={37} color="#ffffff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('EventScreen')}>
        <MaterialCommunityIcons name="web" size={35} color="#ffffff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AddPostScreen')}>
        <MaterialIcons name="add" size={37} color="#ffffff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('EventScreen')}>
        <MaterialIcons name="work" size={35} color="#ffffff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Entypo name="menu" size={38} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    height: screenHeight * 0.065,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#4dc9ff",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
});

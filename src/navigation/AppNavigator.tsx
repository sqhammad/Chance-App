import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ArtistProfileScreen from '../screens/ArtistProfileScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import FeedScreen from '../screens/FeedScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import InboxScreen from '../screens/InboxScreen';
import ChatScreen from '../screens/ChatScreen';
import EventDetails from '../screens/EventDetails';
import PostDetails from '../screens/PostDetails';
import ProfileScreen from '../screens/ProfileScreen';
import AddPostScreen from '../screens/AddPostScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Feeds" component={FeedScreen} options={{
          headerShown: false,
          cardStyle: {
            backgroundColor: "white",
          },
        }}
        />
        <Stack.Screen name="PostDetails" component={PostDetails} options={{
          headerShown: false,
          cardStyle: {
            backgroundColor: "white",
          },
        }} />
        <Stack.Screen name="AddPostScreen" component={AddPostScreen} options={{
          headerShown: false,
          cardStyle: {
            backgroundColor: "white",
          },
        }} />
        <Stack.Screen name="EventDetails" component={EventDetails} options={{
          headerShown: false,
          cardStyle: {
            backgroundColor: "white",
          },
        }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{
          headerShown: false,
          cardStyle: {
            backgroundColor: "white",
          },
        }} />
        <Stack.Screen name="Portfolio" component={PortfolioScreen} />
        <Stack.Screen name="ArtistProfile" component={ArtistProfileScreen} />
        <Stack.Screen name="Inbox" component={InboxScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

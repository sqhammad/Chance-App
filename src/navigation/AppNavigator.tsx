// import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ArtistProfileScreen from '../screens/ArtistProfileScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import FeedScreen from '../screens/FeedScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import InboxScreen from '../screens/InboxScreen';
import ChatScreen from '../screens/ChatScreen';
import AddPostScreen from '../screens/AddPostScreen';

const StackNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    ArtistProfile: ArtistProfileScreen,
    Portfolio: PortfolioScreen,
    Feed: FeedScreen,
    PostDetails: PostDetailsScreen,
    Inbox: InboxScreen,
    Chat: ChatScreen,
    AddPost: AddPostScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(StackNavigator);

const AppNavigator = () => {
  return <AppContainer />;
};

export default AppNavigator;

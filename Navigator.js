import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import AddPage from './Screens/AddPage';
import CardPage from './Screens/CardPage';
import CommunityPage from './Screens/CommunityPage';
import HomePage from './Screens/HomePage';
import ProfilePage from './Screens/ProfilePage';
import QuizPage from './Screens/QuizPage';
import SettingsPage from './Screens/SettingsPage';


const HomeStack = createStackNavigator({
  HomePage,
  CardPage,
  QuizPage
}, {
  defaultNavigationOptions: {
    header: null
  }
});

const CommunityStack = createStackNavigator({
  CommunityPage,
  AddPage,
  CardPage,
  QuizPage
}, {
  defaultNavigationOptions: {
    header: null
  }
});

const ProfileStack = createStackNavigator({
  ProfilePage,
  CardPage,
  QuizPage
}, {
  defaultNavigationOptions: {
    header: null
  }
});

const MainTabNavigator = createBottomTabNavigator({
  HomeStack,
  CommunityStack,
  ProfileStack
}, {
  defaultNavigationOptions: ({ navigation }) => ({

  })
});

export default createAppContainer(createSwitchNavigator({
  SettingsPage,
  Main: MainTabNavigator
}));
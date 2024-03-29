// In Navigation.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './../screens/login'
import Agree from './../screens/agree'
import Setting from './../screens/setting'
import Editinfo from './../screens/edit_info'
import Explore from './../screens/explore'
import Favourite from './../screens/favourite'
import Chat from './../screens/chat'
import Profile from './../screens/profile'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Continue from './../screens/continue'
import Moreinterest from './../screens/moreinterst'
import Message from './../screens/message'
import Notification from './../screens/notification'
import Vodeocall from './../screens/videocall'
import AudioCall from './../screens/audiocall'
import lastMatches from './../screens/last_matches'
import Camera from './../screens/camera'
import Addper from './../screens/otherapp/addper'
const Tab = createBottomTabNavigator();
function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'EXPLORE') {
            iconName = focused
              ? <MaterialIcons name="dashboard" size={24} color="red" />
              : <MaterialIcons name="dashboard" size={24} color="black" />;
          } else if (route.name === 'FAVOURITE') {
            iconName = focused ? <Ionicons name="md-heart" size={24} color="red" /> : <Ionicons name="md-heart" size={24} color="black" />;
          } else if (route.name === 'CHAT') {
            iconName = focused ? <Ionicons name="ios-chatbubbles" size={24} color="red" /> : <Ionicons name="ios-chatbubbles" size={24} color="black" />;
          } else if (route.name === 'PROFILE') {
            iconName = focused ? <FontAwesome name="user" size={24} color="red" /> : <FontAwesome name="user" size={24} color="black" />;
          }

          // You can return any component that you like here!
          return iconName;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="EXPLORE" component={Explore} />
      <Tab.Screen name="FAVOURITE" component={Favourite} />
      <Tab.Screen name="CHAT" component={Chat} />
      <Tab.Screen name="PROFILE" component={Profile} />
    </Tab.Navigator>
  )
}
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Agree" component={Agree} options={{ headerShown: false }} />
        <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
        <Stack.Screen name="Editinfo" component={Editinfo} options={{ headerShown: false }} />
        <Stack.Screen name="Continue" component={Continue} options={{ headerShown: false }} />
        <Stack.Screen name="Moreinterest" component={Moreinterest} options={{ headerShown: false }} />
        <Stack.Screen name="Message" component={Message} options={{ headerShown: false }} />
        <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
        <Stack.Screen name="Vodeocall" component={Vodeocall} options={{ headerShown: false }} />
        <Stack.Screen name="AudioCall" component={AudioCall} options={{ headerShown: false }} />
        <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false }} />
        <Stack.Screen name="lastMatches" component={lastMatches} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={BottomNavigation} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Addper" component={Addper} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
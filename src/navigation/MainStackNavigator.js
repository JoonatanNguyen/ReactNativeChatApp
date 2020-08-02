import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen'
import GroupsScreen from '../screens/GroupsScreen'
import ChatScreen from '../screens/ChatScreen'
import AddGroupScreen from '../screens/AddGroupScreen'
import firebase from '../firebase/Firebase'
import AsyncStorage from '@react-native-community/async-storage'

const Stack = createStackNavigator()

const ChatFlow = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator name="chat">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="GroupsScreen" component={GroupsScreen} />
        <Stack.Screen name="AddGroupScreen" component={AddGroupScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const MainStackNavigator = () => {
  return ChatFlow()
}

export default MainStackNavigator

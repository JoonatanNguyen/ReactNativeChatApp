import { StatusBar } from 'expo-status-bar'
import React from 'react'

import MainStackNavigator from './src/navigation/MainStackNavigator'
import { View, Text } from 'react-native'

export default function App() {
  return <MainStackNavigator />
}

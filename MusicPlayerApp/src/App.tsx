import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
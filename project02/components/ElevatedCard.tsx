import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View  >
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal= {true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>more..</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>😊</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal: 15
    },
    container:{
        padding:9
    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:9,
        margin:8,
        color:'#00000',
        elevation: 4,
        shadowOffset:{
            width:1,
            height:9,
        },
        shadowColor:'#EF5354',
        shadowOpacity: 0.9,
        shadowRadius:2
    },
    cardElevated:{
        backgroundColor:'#CAD5E2',
    }
})
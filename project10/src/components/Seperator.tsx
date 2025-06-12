import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Seperator = () => {
  return (
    <View style={styles.seperator}>
    </View>
  )
}

const styles = StyleSheet.create({
    seperator: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
        height: 1,
        backgroundColor: '#CAD5E2',
    }
})

export default Seperator

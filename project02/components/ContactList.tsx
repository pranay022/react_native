import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: "John Doe",
            status: "Currently working on a project.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYbP-248zDkKcJG_swsx0pK2Hhe8hwE0fHQ&s",
          },
          {
            uid: 2,
            name: "Jane Smith",
            status: "On vacation until next week.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYbP-248zDkKcJG_swsx0pK2Hhe8hwE0fHQ&s",
          },
          {
            uid: 3,
            name: "Michael Brown",
            status: "Available for new assignments.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYbP-248zDkKcJG_swsx0pK2Hhe8hwE0fHQ&s",
          },
          {
            uid: 4,
            name: "Emily Davis",
            status: "Attending a conference today.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYbP-248zDkKcJG_swsx0pK2Hhe8hwE0fHQ&s",
          }
          
    ]
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map( ({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri:imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:12
    },
    container:{
        paddingHorizontal:16,
        marginBottom:6,
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#FF6666',
        borderRadius:13,
        margin:9,
        padding:9,
    },
    userImage:{
        height:100,
        width:60,
        borderRadius:60/2,
        marginRight:15,
    },
    userName:{
        fontSize:16,
        fontWeight:600,
        color:'#FFF'
    },
    userStatus:{
        fontSize: 12,

    },
})
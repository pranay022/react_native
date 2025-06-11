import { View, Text, StyleSheet } from 'react-native'
import React, { PropsWithChildren } from 'react';
import {Track} from 'react-native-track-player';
import { setupPlayer } from '../../musicPlayerServices';



type SongInfoProps = PropsWithChildren<{
  track: Track | null | undefined
}>

const SongInfo = ({track}: SongInfoProps) => {
  return (
    <View style={styels.container}>
      <View>
        <Text style={styels.name}>
            {track?.title}
        </Text>
        <Text style={styels.artist}>
            {track?.artist} .  {track?.album}
        </Text>
      </View>
    </View>
  )
}

const styels = StyleSheet.create({
    container: {
        width: '90%',
        marginTop: 18,
    
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
      },
      name: {
        marginBottom: 8,
        textAlign: 'center',
    
        color: '#fff',
        fontSize: 24,
        fontWeight: '800',
      },
      artist: {
        color: '#d9d9d9',
        textAlign: 'center',
      },
})

export default SongInfo
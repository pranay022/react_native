import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import PlayerControls from '../components/PlayerControls'
import MusicPlayerService from '../services/MusicPlayerService'
import { State } from 'react-native-track-player'

const HomeScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    initializePlayer();
  }, []);

  const initializePlayer = async () => {
    await MusicPlayerService.initialize();
    // Add a sample track (you'll need to replace this with your actual music file)
    await MusicPlayerService.addTrack({
      id: '1',
      url: 'https://example.com/sample.mp3', // Replace with actual music URL
      title: 'Sample Track',
      artist: 'Sample Artist',
      artwork: 'https://example.com/artwork.jpg'
    });
  };

  const handlePlayPause = async () => {
    const state = await MusicPlayerService.getState();
    if (state === State.Playing) {
      await MusicPlayerService.pause();
      setIsPlaying(false);
    } else {
      await MusicPlayerService.play();
      setIsPlaying(true);
    }
  };

  const handleNext = async () => {
    await MusicPlayerService.skipToNext();
  };

  const handlePrevious = async () => {
    await MusicPlayerService.skipToPrevious();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <TextInput 
          style={[styles.textColor, styles.searchBar]}
          placeholder='Search'
          placeholderTextColor="#ffffff80"
        />
      </View>

      <View style={styles.playerContainer}>
        <Text style={[styles.textColor, styles.nowPlaying]}>Now Playing</Text>
        <Text style={[styles.textColor, styles.trackInfo]}>Sample Track - Sample Artist</Text>
        
        <PlayerControls
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1f223cde',
    opacity: 5,
  },
  innerContainer: {
    margin: 25
  },
  textColor: {
    color: "#ffffff"
  },
  searchBar: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    fontSize: 20,
    backgroundColor: 'rgba(214, 202, 202, 0.5)',
    borderRadius: 9,
  },
  playerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  nowPlaying: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  trackInfo: {
    fontSize: 18,
    marginBottom: 30,
  },
})
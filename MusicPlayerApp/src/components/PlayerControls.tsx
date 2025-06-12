import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const PlayerControls: React.FC<PlayerControlsProps> = ({
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPrevious} style={styles.controlButton}>
        <Icon name="skip-previous" type="material" color="#ffffff" size={32} />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={onPlayPause} style={styles.playButton}>
        <Icon 
          name={isPlaying ? "pause" : "play-arrow"} 
          type="material" 
          color="#ffffff" 
          size={40} 
        />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={onNext} style={styles.controlButton}>
        <Icon name="skip-next" type="material" color="#ffffff" size={32} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  controlButton: {
    padding: 10,
  },
  playButton: {
    padding: 15,
    marginHorizontal: 20,
  },
});

export default PlayerControls; 
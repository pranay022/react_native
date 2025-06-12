import TrackPlayer, { Event, State } from 'react-native-track-player';

class MusicPlayerService {
  private static instance: MusicPlayerService;
  private isInitialized: boolean = false;

  private constructor() {}

  static getInstance(): MusicPlayerService {
    if (!MusicPlayerService.instance) {
      MusicPlayerService.instance = new MusicPlayerService();
    }
    return MusicPlayerService.instance;
  }

  async initialize() {
    if (this.isInitialized) return;

    try {
      await TrackPlayer.setupPlayer();
      this.isInitialized = true;
    } catch (error) {
      console.error('Error initializing player:', error);
    }
  }

  async addTrack(track: {
    id: string;
    url: string;
    title: string;
    artist: string;
    artwork?: string;
  }) {
    try {
      await TrackPlayer.add(track);
    } catch (error) {
      console.error('Error adding track:', error);
    }
  }

  async play() {
    try {
      await TrackPlayer.play();
    } catch (error) {
      console.error('Error playing track:', error);
    }
  }

  async pause() {
    try {
      await TrackPlayer.pause();
    } catch (error) {
      console.error('Error pausing track:', error);
    }
  }

  async skipToNext() {
    try {
      await TrackPlayer.skipToNext();
    } catch (error) {
      console.error('Error skipping to next track:', error);
    }
  }

  async skipToPrevious() {
    try {
      await TrackPlayer.skipToPrevious();
    } catch (error) {
      console.error('Error skipping to previous track:', error);
    }
  }

  async getState(): Promise<State> {
    try {
      return await TrackPlayer.getState();
    } catch (error) {
      console.error('Error getting player state:', error);
      return State.None;
    }
  }
}

export default MusicPlayerService.getInstance(); 
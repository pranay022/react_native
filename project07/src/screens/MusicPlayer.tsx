import { View, Text, Dimensions, Image, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { playListData } from '../constants'
import TrackPlayer, {
    Event,
    Track,
    useTrackPlayerEvents
} from 'react-native-track-player'
import SongInfo from '../components/SongInfo'
import SongSlider from '../components/SongSlider'
import ControlCenter from '../components/ControlCenter'

const { width } = Dimensions.get('window')

const MusicPlayer = () => {
    const [track, setTrack] = useState<Track | null>(null);

    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
        console.log('Track change event:', event); // Debugging log

        // Ensure that event.track is a valid number before using it
        if (typeof event.track === 'number') {
            const playingTrack = await TrackPlayer.getTrack(event.track);
            if (playingTrack) {
                setTrack(playingTrack);
            }
        }
    });

    const renderArtWork = () => {
        return (
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {track?.artwork && (
                        <Image
                            style={styles.albumArtImg}
                            source={{ uri: track?.artwork?.toString() }}
                        />
                    )}
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={playListData}
                renderItem={renderArtWork}
                keyExtractor={song => song.id.toString()}
            />
            <SongInfo track={track} />
            <SongSlider />
            <ControlCenter />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001d23',
    },
    listArtWrapper: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    albumContainer: {
        width: 300,
        height: 300,
    },
    albumArtImg: {
        height: '100%',
        borderRadius: 4,
    },
});

export default MusicPlayer;

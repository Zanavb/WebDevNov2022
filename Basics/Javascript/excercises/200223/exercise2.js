// OOP - Exercise 2

// music player

// Create a class MusicPlayer that has the following properties: playlist<arraylist>, volume as default 0, isPlaying as default false, currentTrack as default 0

// Create the following methods:
// play() - sets isPlaying to true
// pause() - sets isPlaying to false
// next() - sets currentTrack to the next track
// previous() - sets currentTrack to the previous track
// setVolume(volume) - sets the volume to the given value
// status() - displays the current track, volume and isPlaying in the console

// Create a new instance of MusicPlayer and test the methods
// Expected output:
// Current track: song1, volume: 0, is playing: true
// Current track: song2, volume: 0, is playing: true
// Current track: song2, volume: 10, is playing: false
// const musicPlayer = new MusicPlayer(['song1','song2'], 50);

class MusicPlayer {

    playlist = [''];
    volume = 0;
    isPlaying = false;
    currentTrack = 0;

    constructor(playlist, volume){
        this.playlist = playlist,
        this.volume = volume
    }

    play() {
        this.isPlaying = true;
    }

    pause() {
        this.isPlaying = false;
    }

    next() {
        this.currentTrack ++
    }

    previous() {
        this.currentTrack --
    }

    setVolume(volume) {
        this.volume = volume
    }

    status() {
        const obj = {
          currentTrack: this.playlist[this.currentTrack.valueOf()],
          volume: this.volume,
          isPlaying: this.isPlaying
        }
        return obj;
    }
}

const Ipod = new MusicPlayer(['messy in heaven', 'rolling paper', 'me gabber'], 50);

Ipod.play();
Ipod.next();
Ipod.next();
Ipod.setVolume(30);
Ipod.pause();
console.log(Ipod.status())
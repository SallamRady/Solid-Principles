/**
// !This interface have a problem with Interface Segregation Principle
interface MediaPlayer {
  playAudio(): void;
  recordAudio(): void;
  playVideo(): void;
}
*/

// * Solution is to divide interface to small interfaces accodring there responsibilities.

interface AudioPlayer {
  playAudio(): void;
  recordAudio(): void;
}

interface VideoPlayer {
  playVideo(): void;
}

interface MediaPlayer extends AudioPlayer, VideoPlayer {}

class MediaDevice implements MediaPlayer {
  playAudio() {
    console.log("playAudio method");
  }

  recordAudio() {
    console.log("recordAudio method");
  }

  playVideo() {
    console.log("playVideo method");
  }
}

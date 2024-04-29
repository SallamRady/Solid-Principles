/**
// !This interface have a problem with Interface Segregation Principle
interface MediaPlayer {
  playAudio(): void;
  recordAudio(): void;
  playVideo(): void;
}
*/
var MediaDevice = /** @class */ (function () {
    function MediaDevice() {
    }
    MediaDevice.prototype.playAudio = function () {
        console.log("playAudio method");
    };
    MediaDevice.prototype.recordAudio = function () {
        console.log("recordAudio method");
    };
    MediaDevice.prototype.playVideo = function () {
        console.log("playVideo method");
    };
    return MediaDevice;
}());

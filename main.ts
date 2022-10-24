input.onPinPressed(TouchPin.P2, function () {
    if (sound <= 65) {
        sound = 260
    }
    sound = sound - 35
    music.playTone(sound, music.beat(BeatFraction.Half))
})
input.onPinPressed(TouchPin.P1, function () {
    if (sound >= 2093) {
        sound = 260
    }
    sound = sound + 110
    music.playTone(sound, music.beat(BeatFraction.Half))
})
let sound = 0
sound = 260

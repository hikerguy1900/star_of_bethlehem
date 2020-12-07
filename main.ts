input.onLoudSound(function () {
	
})
function light_control () {
    if (button_count == 1) {
        light.showRing(
        `black black black pink pink black black black black black`
        )
    } else if (button_count == 2) {
        light.showRing(
        `pink pink black pink pink black black black black black`
        )
    } else if (button_count == 3) {
        light.showRing(
        `pink pink black pink pink black black black purple purple`
        )
    } else if (button_count == 4) {
        light.showRing(
        `pink pink black pink pink pink pink black purple purple`
        )
    } else if (button_count == 5) {
        light.showAnimationFrame(light.sparkleAnimation)
        pause(500)
        light.setAll(0xffff00)
    } else {
        light.clear()
    }
}
function o_little_town_of_bethlehem () {
	
}
input.buttonA.onEvent(ButtonEvent.LongClick, function () {
    silent_night()
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    button_count += 1
    if (button_count >= 6) {
        button_count = 0
    }
})
function silent_night () {
    music.setTempo(104)
    music.setVolume(255)
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(440, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Double))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Sixteenth))
}
let button_count = 0
button_count = 0
music.stopAllSounds()
music.setVolume(0)
forever(function () {
    light_control()
})

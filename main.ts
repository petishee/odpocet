let cislo = 0
let odpocet = 0
function odpočet_1 () {
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
}
function odpočet_2 () {
    cislo = 3
    for (let index = 0; index < 3; index++) {
        basic.showNumber(cislo)
        cislo += -1
    }
}
input.onButtonPressed(Button.A, function () {
    odpočet_3()
    animace()
})
function odpočet_3 () {
    odpocet = 3
    cislo = odpocet
    for (let index = 0; index < odpocet; index++) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.showNumber(cislo)
        basic.pause(1000)
        cislo += -1
    }
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
}
function animace () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
}

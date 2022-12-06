input.onButtonPressed(Button.A, function () {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 255)
})
input.onButtonPressed(Button.B, function () {
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
})
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})

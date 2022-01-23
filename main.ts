let direction = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
})
basic.forever(function () {
    direction = input.compassHeading()
    if (direction > 337.5 && direction < 22.5) {
        basic.showString("N")
    }
    if (direction > 22.5 && direction < 67.5) {
        basic.showString("NE")
    }
    if (direction > 67.5 && direction < 112.5) {
        basic.showString("E")
    }
    if (direction > 112.5 && direction < 157.5) {
        basic.showString("SE")
    }
    if (direction > 157.5 && direction < 202.5) {
        basic.showString("S")
    }
    if (direction > 202.5 && direction < 247.5) {
        basic.showString("SW")
    }
    if (direction > 247.5 && direction < 292.5) {
        basic.showString("W")
    }
    if (direction > 292.5 && direction < 337.5) {
        basic.showString("NW")
    }
})

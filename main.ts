let direction = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.compassHeading()))
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    direction = input.compassHeading()
    if (direction == 0) {
        basic.showString("N")
    }
    if (direction == 90) {
        basic.showString("E")
    }
    if (direction == 180) {
        basic.showString("S")
    }
    if (direction == 270) {
        basic.showString("W")
    }
})

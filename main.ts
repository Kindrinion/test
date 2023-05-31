input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("b")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("l")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("f")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "f") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("r")
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("s")
})
radio.setGroup(616)
basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)

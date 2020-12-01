input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
})
pins.servoWritePin(AnalogPin.P4, 30)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P4, 30)
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P4, 49)
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P4, 68)
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P4, 87)
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P4, 110)
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P4, 130)
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P4, 145)
        basic.pause(5000)
    }
})

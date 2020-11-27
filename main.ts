input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    pins.servoWritePin(AnalogPin.P8, 102)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.servoWritePin(AnalogPin.P8, 0)
})
basic.forever(function () {
	
})

dfplayermini.connect(SerialPin.P13, SerialPin.P14)
dfplayermini.playFileInFolder(1, 1, dfplayermini.isRepeat.No)
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})

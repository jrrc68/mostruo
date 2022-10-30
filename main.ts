function SECUENCIA (letra: string, carpeta: number, archivo: number, key: number) {
    if (analogic_key == key) {
        secuencia = "" + secuencia + letra
        dfplayermini.playFileInFolder(carpeta, archivo, dfplayermini.isRepeat.No)
        basic.showNumber(analogic_key)
    }
}
let analogic_key = 0
let secuencia = ""
secuencia = ""
dfplayermini.connect(SerialPin.P13, SerialPin.P14)
dfplayermini.press(dfplayermini.playType.Stop)
basic.forever(function () {
    analogic_key = Math.trunc(pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    7
    ))
    SECUENCIA("a", 1, 1, 1)
    SECUENCIA("b", 1, 3, 2)
    SECUENCIA("c", 1, 5, 3)
    SECUENCIA("d", 2, 2, 4)
    SECUENCIA("e", 2, 4, 5)
    SECUENCIA("f", 2, 4, 6)
    if (secuencia.length >= 6) {
        if (secuencia == "abcdef") {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        } else {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
        dfplayermini.press(dfplayermini.playType.Stop)
        basic.pause(1000)
        secuencia = ""
        basic.clearScreen()
    }
})

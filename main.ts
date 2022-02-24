input.onButtonPressed(Button.A, function () {
    Valg = 1
    basic.showNumber(1)
    basic.pause(50)
})
input.onButtonPressed(Button.AB, function () {
    Valg = 3
    basic.showNumber(3)
    basic.pause(50)
})
input.onButtonPressed(Button.B, function () {
    Valg = 2
    basic.showNumber(2)
    basic.pause(50)
})
let Valg = 0
Valg = 0
let colorbit_51bit = colorbit.initColorBit(DigitalPin.P0, BitColorMode.RGB)
let range = colorbit_51bit.range(0, 8)
colorbit_51bit.clear()
colorbit_51bit.showRainbow(1, 360)
basic.forever(function () {
    while (Valg == 1) {
        colorbit_51bit.rotate(8)
        colorbit_51bit.show()
        basic.pause(200)
    }
    while (Valg == 2) {
        colorbit_51bit.rotate(1)
        colorbit_51bit.show()
        basic.pause(500)
    }
    while (Valg == 3) {
        colorbit_51bit.rotate(4)
        colorbit_51bit.show()
        basic.pause(1000)
    }
})

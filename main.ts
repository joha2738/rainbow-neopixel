let colorbit_51bit = colorbit.initColorBit(DigitalPin.P0, BitColorMode.RGB)
let range = colorbit_51bit.range(0, 8)
colorbit_51bit.clear()
colorbit_51bit.showRainbow(1, 360)
basic.forever(function () {
    colorbit_51bit.rotate(1)
    colorbit_51bit.show()
    basic.pause(100)
})

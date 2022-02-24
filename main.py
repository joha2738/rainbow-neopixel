colorbit_51bit = colorbit.init_color_bit(DigitalPin.P0, BitColorMode.RGB)
range2 = colorbit_51bit.range(0, 8)
colorbit_51bit.clear()
colorbit_51bit.show_rainbow(1, 360)

def on_forever():
    colorbit_51bit.rotate(1)
    colorbit_51bit.show()
    basic.pause(100)
basic.forever(on_forever)

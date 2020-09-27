basic.forever(function () {
    basic.showNumber(1)
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= y; x++) {
            led.plot(x, y)
            basic.pause(100)
        }
    }
    basic.pause(1000)
    basic.clearScreen()
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= y; x++) {
            led.plot(x, 4 - y)
            basic.pause(100)
        }
    }
    basic.pause(1000)
    basic.clearScreen()
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= y; x++) {
            led.plot(4 - x, y)
            basic.pause(100)
        }
    }
    basic.pause(1000)
    basic.clearScreen()
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= y; x++) {
            led.plot(4 - x, 4 - y)
            basic.pause(100)
        }
    }
    basic.pause(1000)
    basic.clearScreen()
})

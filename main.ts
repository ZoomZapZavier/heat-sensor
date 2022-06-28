loops.everyInterval(10000, function () {
    if (input.temperature() >= 6) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    }
    if (input.temperature() >= 8) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            `)
    }
    if (input.temperature() >= 10) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # . .
            `)
    }
    if (input.temperature() >= 12) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # . .
            `)
    }
    if (input.temperature() >= 14) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # .
            `)
    }
    if (input.temperature() >= 16) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    }
    if (input.temperature() >= 18) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            # # # # #
            `)
    }
    if (input.temperature() >= 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            # # # # #
            `)
    }
    if (input.temperature() >= 22) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # . .
            # # # # #
            `)
    }
    if (input.temperature() >= 24) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # .
            # # # # #
            `)
    }
    if (input.temperature() >= 26) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    }
    if (input.temperature() >= 28) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # # # # #
            # # # # #
            `)
    }
    if (input.temperature() >= 30) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . . .
            # # # # #
            # # # # #
            `)
    }
    if (input.temperature() >= 32) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            # # # # #
            # # # # #
            `)
    }
    if (input.temperature() >= 34) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # .
            # # # # #
            # # # # #
            `)
    }
    if (input.temperature() >= 36) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (input.temperature() >= 38) {
        basic.showLeds(`
            . . . . .
            # . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (input.temperature() >= 40) {
        basic.showLeds(`
            . . . . .
            # # . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (input.temperature() >= 42) {
        basic.showLeds(`
            . . . . .
            # # # . .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (input.temperature() >= 44) {
        basic.showLeds(`
            . . . . .
            # # # # .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (input.temperature() >= 46) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (input.temperature() >= 48) {
        basic.showLeds(`
            # . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (input.temperature() >= 50) {
        basic.showLeds(`
            # # . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (input.temperature() >= 52) {
        basic.showLeds(`
            # # # . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (input.temperature() >= 54) {
        basic.showLeds(`
            # # # # .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (input.temperature() >= 56) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})

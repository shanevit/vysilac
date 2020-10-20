radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 8) {
        sila = sila - 1
        if (sila < 2) {
            sila = 1
        }
        radio.sendNumber(sila)
        basic.showArrow(ArrowNames.South)
        basic.pause(500)
    } else if (receivedNumber == 9) {
        sila = sila + 1
        if (sila > 6) {
            sila = 7
        }
        radio.sendNumber(sila)
        basic.showArrow(ArrowNames.North)
        basic.pause(500)
    } else {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(500)
    }
})
let sila = 0
basic.showIcon(IconNames.Pitchfork)
radio.setGroup(1)
sila = 7
radio.setTransmitPower(sila)
basic.forever(function () {
    radio.sendNumber(0)
    basic.pause(500)
    basic.showIcon(IconNames.Pitchfork)
})

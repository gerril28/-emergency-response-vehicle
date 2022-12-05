radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
radio.setGroup(39)
basic.forever(function () {
	
})

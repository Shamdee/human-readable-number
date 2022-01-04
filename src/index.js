module.exports = function toReadable(number) {
    let words = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
    let result = ''
    let tens = ''
    let firstNumber = ''
    let hundred = ''
    if (number < 100) {
        tens = number
    } else {
        firstNumber = String(number).slice(0, 1)
        tens = String(number).slice(1)
        hundred = words[firstNumber] + ' hundred '
    }

    if (tens <= 20) {
        result = (words[+tens])
    } else if (tens >= 20 && tens < 30) {
        result = ('twenty ' + words[tens - 20])
    } else if (tens >= 30 && tens < 40) {
        result = ('thirty ' + words[tens - 30])
    } else if (tens >= 40 && tens < 50) {
        result = ('forty ' + words[tens - 40])
    } else if (tens >= 50 && tens < 60) {
        result = ('fifty ' + words[tens - 50])
    } else if (tens >= 60 && tens < 70) {
        result = ('sixty ' + words[tens - 60])
    } else if (tens >= 70 && tens < 80) {
        result = ('seventy ' + words[tens - 70])
    } else if (tens >= 80 && tens < 90) {
        result = ('eighty ' + words[tens - 80])
    } else if (tens >= 90 && tens < 100) {
        result = ('ninety ' + words[tens - 90])
    }

    result = result.trim()
    if ((result === '')) {
        hundred = hundred.slice(0, -1)
    }

    if (number === 0) {
        return 'zero'
    }

    return (hundred + result.trim())
}
/**
 * rgb to hex
 * rgb(255, 210, 2)
 * 255/16 = 15.9375
 * 16 is because there are 16 characters for hexa
 * the quotian will be 15 => convert 15 to hexa which is F
 * #F
 * remainder 0.9375 * 16 = 15
 * and 15 is hexa F
 * #FF
 */

function rgb(r, g, b) {
    const result = generateLetters(r) + generateLetters(g) + generateLetters(b);
    return result;
}

function generateLetters(num) {
    let result = "";
    const hex = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
    ];
    if (num < 0) {
        return "00";
    }
    if (num > 255) {
        return "FF";
    }
    const arr = (num / 16).toString().split(".");
    result = hex[arr[0]];
    if (arr.length === 1) {
        result += "0";
    } else {
        result += hex[`0.${arr[1]}` * 16];
    }
    return result;
}

console.log(rgb(0, 0, 0));

module.exports = rgb;

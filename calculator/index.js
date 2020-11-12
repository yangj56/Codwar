const Calculator = function () {
    this.evaluate = string => {
        console.log(string);
    }
};

const cal = new Calculator();
const test = cal.evaluate("1 + 1");
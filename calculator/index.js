const Calculator = function () {
    this.performMath = (op1, op2, operator) => {
        const val1 = parseFloat(op1);
        const val2 = parseFloat(op2);
        switch (operator) {
            case '*':
                return val1 * val2;
            case '/':
                return val1 / val2;
            case '+':
                return val1 + val2;
            case '-':
                return val1 - val2;
            default:
                console.log('error here');
                return 0;
        }
    };
    this.evaluate = (string) => {
        console.log(string);
        const input = string.split(' ');
        const isDivideOperator = (val) => '/'.includes(val);
        const isSecondOperator = (val) => '+-'.includes(val);
        const isLast = (size) => size + 1 === input.length;
        const operandStack = [];
        const operatorStack = [];
        for (let i = 0; i < input.length; i++) {
            let currentVal = input[i];
            if (!isNaN(currentVal)) {
                if (isDivideOperator(input[i - 1])) {
                    currentVal = 1 / currentVal;
                }
                operandStack.push(currentVal);
                if (isSecondOperator(input[i + 1]) || isLast(i)) {
                    while (operatorStack.length !== 0) {
                        const currentVal2 = operandStack.pop();
                        const currentVal3 = operandStack.pop();
                        const currentOperator = operatorStack.pop();
                        const res = this.performMath(currentVal3, currentVal2, currentOperator);
                        operandStack.push(res);
                    }
                }
            } else {
                if (isDivideOperator(currentVal)) {
                    operatorStack.push('*');
                } else {
                    operatorStack.push(currentVal);
                }
            }
        }
        while (operandStack.length !== 1) {
            const currentVal2 = operandStack.pop();
            const currentOperator = operatorStack.pop();
            const currentVal3 = operandStack.pop();
            operandStack.push(this.performMath(currentVal3, currentVal2, currentOperator));
        }
        return operandStack[0];
    };
};

const cal = new Calculator();
const test = cal.evaluate('2 + 3 * 4 / 3 - 6 / 3 * 3 + 8');
console.log(test);

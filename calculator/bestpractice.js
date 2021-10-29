const Calculator = function () {
    this.operation = (a, b, operator) => {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
        }
    };

    this.evaluate = (str) => {
        const args = str.split(' ');
        ['/', '*', '-', '+'].forEach((op) => {
            while ((i = args.indexOf(op)) !== -1) {
                args[i - 1] = this.operation(+args[i - 1], +args[i + 1], op);
                args.splice(i, 2);
            }
        });
        return +args[0];
    };
};

function getDivisors(n: number) {
    const arr = [];
    let newN = n;
    let startNum = 1;
    while (newN !== startNum) {
        if (newN % startNum === 0) {
            arr.push(startNum);
        }
        startNum++;
    }
    return arr;
}

// 50 = 2 x 25 = 5 x 5
// 80 = 2 * 40 = 2 * 20 = 2 * 
console.log(getDivisors(220));
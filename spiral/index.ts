function spiralTraverse(array) {
    // Write your code here.
    const height = array.length;
    const width = array[0].length;
    height;
    width;
    const resultArr = [];
    let round = 0;
    while (resultArr.length < height * width) {
        // go left
        for (let l = 0 + round; l < width - round; l++) {
            resultArr.push(array[round][l]);
        }
        if (resultArr.length === height * width) {
            break;
        }
        // go down
        for (let d = 1 + round; d < height - round; d++) {
            resultArr.push(array[d][width - 1 - round]);
        }
        if (resultArr.length === height * width) {
            break;
        }
        // go right
        for (let r = width - 2 - round; r >= 0 + round; r--) {
            resultArr.push(array[height - round - 1][r]);
        }
        if (resultArr.length === height * width) {
            break;
        }
        // go up
        for (let u = height - 2 - round; u > 0 + round; u--) {
            resultArr.push(array[u][round]);
        }
        if (resultArr.length === height * width) {
            break;
        }
        round++;
    }
    return resultArr;
}

console.log(
    spiralTraverse([
        [1, 2, 3, 4],
        [10, 11, 12, 5],
        [9, 8, 7, 6],
    ])
);

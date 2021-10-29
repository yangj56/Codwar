snail = (array) => {
    console.log(array.length < 0);
    if (!array || array.length === 0 || array[0].length === 0) {
        return [];
    }
    console.log("Testing");
    const answer = [];
    let round = 0;
    let arrLength = array.length;
    for (m = 0; m < Math.ceil(arrLength / 2); m++) {
        // right
        for (i = round; i < arrLength - round; i++) {
            answer.push(array[round][i]);
        }
        round += 1;
        // down
        for (j = round; j <= arrLength - round; j++) {
            answer.push(array[j][arrLength - round]);
        }

        // left
        for (h = arrLength - round - 1; h >= round - 1; h--) {
            answer.push(array[arrLength - round][h]);
        }

        // up
        for (k = arrLength - round - 1; k >= round; k--) {
            answer.push(array[k][round - 1]);
        }
    }
    return answer;
};

module.exports = snail;

const asd = [2, 3, 5, 45];
console.log(asd.shift());
console.log(asd);
console.log(asd.pop());
console.log(asd);
console.log(snail([[]]));

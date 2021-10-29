/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const message: string = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
const charArr = message.split(" ").join("").split('');

const aeiou = 'aeiouyAEIOUY';
const vols = [];
const adds = charArr.filter((curr) => {
    if (aeiou.includes(curr)) {
        vols.push(curr);
        return false;
    }
    return true
});
console.log(vols.join(''))
console.log(adds.join(''));

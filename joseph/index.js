josephus = (items, k) => {
    let i = 0;
    let nextpoint = (k - 1) % items.length;
    let answer = [];
    while (items.length > 0) {
        answer.push(items.splice(nextpoint, 1)[0]);
        nextpoint = (nextpoint + k - 1) % items.length;
        i++;
    }
    return answer;
};

console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3));

module.exports = josephus;

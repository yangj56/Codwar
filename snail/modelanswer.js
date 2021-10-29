snail = function (array) {
    var result;
    while (array.length) {
        // Steal the first row.
        result = result ? result.concat(array.shift()) : array.shift();
        console.log(result);
        // Steal the right items.
        for (var i = 0; i < array.length; i++) result.push(array[i].pop());
        // Steal the bottom row.
        result = result.concat((array.pop() || []).reverse());
        // Steal the left items.
        for (var i = array.length - 1; i >= 0; i--)
            result.push(array[i].shift());
    }
    return result;
};

console.log(
    snail([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
);

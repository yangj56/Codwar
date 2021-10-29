function moveElementToEnd(array, toMove) {
    // Write your code here.
    let start = 0;
    let end = array.length - 1;
    while (start < end) {
        const cur = array[start];
        const curEnd = array[end];
        if (curEnd === toMove) {
            end--;
        } else {
            if (cur === toMove) {
                array[start] = array[end];
                array[end] = toMove;
            }
            start++;
        }
    }
    return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));

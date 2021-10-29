function findDuplicate(array: number[]) {
    for (const val of array) {
        const abs = Math.abs(val);
        abs;
        console.log(array[abs - 1]);
        if (array[abs - 1] < 0) {
            abs;
            console.log(array);
            return abs;
        }
        array[abs - 1] *= -1;
    }
    return -1;
}

console.log(findDuplicate([7, 2, 4, 1, 2]));

console.log(6 % 1);

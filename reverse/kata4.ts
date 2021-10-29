const arr = [1, 2, 3, 4, 5, []];


function reverseee<T>(arr: T[]): T[] {
    const a = [];
    arr.forEach((x, y) => a[arr.length - y - 1] = x);
    return a;
}

const weirdReverse = a => {
    const b = [];
    a.forEach((x, y) => b[a.length - y - 1] = x);
    return b;
}

const weirdReverse2 = a => a.sort(x => {
    console.log(x);
})

console.log(weirdReverse2(arr));
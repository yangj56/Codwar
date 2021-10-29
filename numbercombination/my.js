let parts = 0;
function part(n) {
    // your code
    n;
    n -= 1;
    if (n !== 0) {
        parts + 1;
        part(n);
    }

    return parts;
}

console.log(part(5)); // enum(5) -> [[5],[4,1],[3,2],[3,1,1],[2,2,1],[2,1,1,1],[1,1,1,1,1]].

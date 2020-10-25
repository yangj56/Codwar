function nextSmaller(n) {
    const nString = n.toString();
    const arr = nString.split('');
    arr.sort((a, b) => parseInt(a) - parseInt(b));
    const arrSize = arr.length;
    arrSize
    if (arrSize > 1) {
        let prev = 0;
        for (let pointA = 0; pointA < arrSize; pointA++) {
            for (let pointB = 0; pointB < arrSize; pointB++) {
                const newArr = [...arr];
                const tmp = newArr[pointA];
                newArr[pointA] = newArr[pointB];
                newArr[pointB] = tmp;
                const res = parseInt(newArr.join(''));
                if (res === n) {
                    if (prev === 0) {
                        return n;
                    } else {
                        return prev;
                    }
                }
                prev = res;
            }
        }
    }
    return n;
}

console.log(nextSmaller(2134));
function isSolved(board) {
    let gotEmpty = false;
    //check horizontal easiest
    for (i = 0; i < 3; i++) {
        const ha = board[i][0];
        const hb = board[i][1];
        const hc = board[i][2];
        if (ha === 0 || hb === 0 || hc === 0) {
            gotEmpty = true;
        }
        if (ha !== 0 && ha === hb && hb === hc) {
            return ha;
        }
    }

    //check vertically
    const va = board[0];
    const vb = board[1];
    const vc = board[2];

    for (j = 0; j < 3; j++) {
        if (va[j] === 0 || vb[j] === 0 || vc[j] === 0) {
            gotEmpty = true;
        }
        if (va[j] !== 0 && va[j] === vb[j] && vb[j] === vc[j]) {
            return va[j];
        }
    }
    for (m = 0; m < board.length; m++) {
        if (
            m + 2 <= board.length &&
            va[m] !== 0 &&
            va[m] === vb[m + 1] &&
            vb[m + 1] === vc[m + 2]
        ) {
            console.log("test");
            return va[m];
        }
    }

    for (k = board.length - 1; k >= 0; k--) {
        if (
            k - 2 >= 0 &&
            va[k] !== 0 &&
            va[k] === vb[k - 1] &&
            vb[k - 1] === vc[k - 2]
        ) {
            return va[k];
        }
    }
    if (gotEmpty) {
        return -1;
    }
    return 0;
}

console.log(
    isSolved([
        [0, 1, 1],
        [2, 0, 2],
        [2, 1, 0],
    ])
);

function validateBattlefield(field) {
    // write your magic here
    const arrSkips = [];
    const ships = {
        battleship: 0, // max 1, size 4
        cruiser: 0, // max 2, size 3
        destroyer: 0, // max 3, size 2
        submarine: 0 // max 4, size 1
    }
    let res = false;
    let check = false;
    for (let i = 0; i < field.length; i++) {
        if (check === true) {
            break;
        }
        for (let j = 0; j < field.length; j++) {
            const currentVal = field[i][j];
            let stepright = 0;
            let stepdown = 0;
            if (currentVal === 1) {
                // start checking
                const checkDig = checkDiagonal();
                if (checkDig) {
                    res = false;
                    check = true;
                    break;
                }
                // if true we go right
                const goRight = checkRight();

                // if true we go left
                const goBottom = checkDown();

                if (goBottom && goRight) {
                    res = false;
                    check = true;
                    break;
                } else if (goRight) {
                    while (checkRight() && !checkDown() && !checkDiagonal()) {

                    }
                } else if (goBottom) {

                }
            }
        }
    }
    return res;
}

function checkNumberOfShips() {

}

function checkRight() {

}

function checkDown() {

}

function checkDiagonal() {

}









console.log(validateBattlefield(
    [
        [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
));
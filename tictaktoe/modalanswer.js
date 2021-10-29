const horizontal = (player) => (board) =>
    board.some((row) => row.every((spot) => spot == player));

const vertical = (player) => (board) =>
    board.some((row, i) => board.every((row) => row[i] == player));

const diagonals = (player) => (board) =>
    board.every((row, i) => row[i] == player) ||
    board.every((row, i) => row[3 - 1 - i] == player);

const player = (number) => ({
    wins: (board) =>
        [horizontal, vertical, diagonals].some((full) => full(number)(board)),
});

const unfinished = (board) => board.some((row) => row.some((spot) => !spot));

const DRAW = 0;

const isSolved = (board) => {
    switch (true) {
        case player(1).wins(board):
            return 1;

        case player(2).wins(board):
            return 2;

        case unfinished(board):
            return -1;

        default:
            return DRAW;
    }
};

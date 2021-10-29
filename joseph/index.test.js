const josephus = require("./index");

describe("Test rgb", function () {
    it("Testing base", function () {
        expect(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)).toEqual([
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
        ]);
    });
    it("Testing base", function () {
        expect(josephus([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
            3,
            6,
            2,
            7,
            5,
            1,
            4,
        ]);
    });
    it("Testing base", function () {
        expect(josephus(["C", "o", "d", "e", "W", "a", "r", "s"], 4)).toEqual([
            "e",
            "s",
            "W",
            "o",
            "C",
            "d",
            "r",
            "a",
        ]);
    });
});

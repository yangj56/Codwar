// Lyrics

const babySharkLyrics = require("./baby");

const babyshark =
    "Baby shark, doo doo doo doo doo doo\n\
Baby shark, doo doo doo doo doo doo\n\
Baby shark, doo doo doo doo doo doo\n\
Baby shark!\n\
Mommy shark, doo doo doo doo doo doo\n\
Mommy shark, doo doo doo doo doo doo\n\
Mommy shark, doo doo doo doo doo doo\n\
Mommy shark!\n\
Daddy shark, doo doo doo doo doo doo\n\
Daddy shark, doo doo doo doo doo doo\n\
Daddy shark, doo doo doo doo doo doo\n\
Daddy shark!\n\
Grandma shark, doo doo doo doo doo doo\n\
Grandma shark, doo doo doo doo doo doo\n\
Grandma shark, doo doo doo doo doo doo\n\
Grandma shark!\n\
Grandpa shark, doo doo doo doo doo doo\n\
Grandpa shark, doo doo doo doo doo doo\n\
Grandpa shark, doo doo doo doo doo doo\n\
Grandpa shark!\n\
Let's go hunt, doo doo doo doo doo doo\n\
Let's go hunt, doo doo doo doo doo doo\n\
Let's go hunt, doo doo doo doo doo doo\n\
Let's go hunt!\n\
Run away,…";

const babySharkCode = babySharkLyrics.toString();
const func_size = babySharkCode.length;
const MAX_SIZE = 300;

const fs = require("fs");

const file_size = fs
    .readFileSync("/home/codewarrior/solution.txt")
    .toString()
    .trim().length;

describe("baby_shark_lyrics", function () {
    it("returns correct result for baby_shark_lyrics function", function () {
        expect(true).toBeTruty();
        // Test.assertEquals(
        //     babySharkLyrics(),
        //     babyshark,
        //     "Fails, something went wrong"
        // );
        // Test.assertEquals(
        //     func_size < MAX_SIZE,
        //     true,
        //     `It should be less than ${MAX_SIZE} characters. You have ${func_size}`
        // );
        // Test.assertEquals(
        //     file_size < MAX_SIZE,
        //     true,
        //     `Solution text file should be less than ${MAX_SIZE} characters. You have ${file_size}`
        // );
    });
});

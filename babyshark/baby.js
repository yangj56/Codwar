function generateLyrics() {
    return (
        ["Baby", "Mommy", "Daddy", "Grandma", "Grandpa"]
            .map((x) => x + " shark")
            .concat(["Let's go hunt"])
            .map((x) => `${`${x},${" doo".repeat(6)}\n`.repeat(3)}${x}!\n`)
            .join("") + "Run away,…"
    );
}

function babySharkLyrics() {
    const arr = ["Baby", "Mommy", "Daddy", "Grandma", "Grandpa"];
    const sd = arr.map(item => item + " shark");
    const as = sd.concat(["Let's go hunt"]);
    const test = as.map(item => `${item} do do do do do do do\n`.repeat(3));
    return test;
}

console.log(babySharkLyrics())

module.exports = babySharkLyrics;

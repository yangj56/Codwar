function babySharkLyrics() {
    return (
        ["Baby", "Mommy", "Daddy", "Grandma", "Grandpa"]
            .map((x) => x + " shark")
            .concat(["Let's go hunt"])
            .map((x) => `${`${x},${" doo".repeat(6)}\n`.repeat(3)}${x}!\n`)
            .join("") + "Run away,…"
    );
}

module.exports = babySharkLyrics;

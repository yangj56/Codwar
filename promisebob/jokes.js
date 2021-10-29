async function sayJoke(apiUrl, jokeId) {
    // use mocked `fetch(url)`
    const result = await fetch(apiUrl);
    const answer = result.jokes.find((item) => item.id === jokeId);
    if (!answer) {
        throw new Error("No jokes found id: {jokeId}");
    }
    return answer;
}

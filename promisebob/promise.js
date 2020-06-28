function promiseHelloWorld() {
    let promise = new Promise(function (resolve) {
        resolve("Hello World!");
    });
    const output = promise.then((result) => result);
    return output;
}

async function getSd() {
    const result = await promiseHelloWorld();
    console.log(result);
    return result;
}

console.log(getSd());

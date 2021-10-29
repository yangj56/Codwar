function identity<T>(arg: T): number {
    const asd = arg as unknown;
    return asd as number;
}

const value = identity(8);


function identityGeneric<T>(arg: T): T {
    return arg;
}

let output = identityGeneric<string>("myString");


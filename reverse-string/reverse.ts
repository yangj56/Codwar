function reverseString(input: string){
    const sizeOfString = input.length;
    if(sizeOfString === 1){
        return input;
    }
    let resultStr ="";
    for(let i = sizeOfString-1; i >= 0; i --){
        resultStr = resultStr + input[i]
    }
    return resultStr
}

console.log(reverseString("hello world!"));
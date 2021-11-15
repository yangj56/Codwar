function betterCompression(s) {
  // Write your code here
  const stringMap = new Map();

  const stringArr = s.split(/(\d+)/);

  for (let i = 0; i < stringArr.length; i += 2) {
    const curString = stringArr[i];
    const curNum = parseInt(stringArr[i + 1]);
    i;
    if (stringMap.has(curString)) {
      const cur = stringMap.get(curString);
      stringMap.set(curString, cur + curNum);
    } else {
      if (!!curString) {
        stringMap.set(curString, curNum);
      }
    }
  }
  let result = "";
  const sortedMap = new Map([...stringMap.entries()].sort());
  for (const [key, value] of sortedMap.entries()) {
    console.log(key, value);
    result = `${result}${key}${value}`;
  }
  return result;
}

console.log(betterCompression("a12c23d23a12b2"));

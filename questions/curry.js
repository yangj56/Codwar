const createBase = (number) => {
  number;
  return (number2) => {
    return number + number2;
  };
};

const addSix = createBase(6);
const addSix2 = createBase(8);

console.log(addSix2(32));

console.log("########## COMPLETE ##########");

const infiniteCurry = (fn) => {
  const next = (...args) => {
    return (x) => {
      if (!x) {
        return args.reduce((acc, a) => {
          return fn.call(fn, acc, a);
        }, 0);
      }
      return next(...args, x);
    };
  };
  return next();
};

const iSum = infiniteCurry((x, y) => x + y);

console.log(iSum(1)(32)(4)(2)());

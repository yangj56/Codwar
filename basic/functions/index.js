// An Object Method and dont need the keyword "new"
// In a nested object, this refers to the current object scope of the method.
const america = {
  name: "The United States of America",
  yearFounded: 1776,

  describe() {
    console.log(`${this.name} was founded in ${this.yearFounded}.`);
  },
};

america.describe();

function doAmerica(input) {
  const america = {
    name: "The United States of America",
    yearFounded: 1776,

    // both describes are the same with the ability to access "this"
    describe: function (year) {
      return `${this.name} was founded in ${this.yearFounded}. ${year} ${input}`;
    },

    describe2(year) {
      return `${this.name} was founded in ${this.yearFounded}. ${year} ${input}`;
    },
  };
  return america;
}

const myAmerica = doAmerica("testing");
console.log(myAmerica.describe(1992));

const myNewAmerica = new doAmerica("ass");
console.log(myNewAmerica.describe(1992));

// how come function can add new?
function Country(name, yearFounded) {
  this.name = name;
  this.yearFounded = yearFounded;

  this.describe = function () {
    return `${this.name} was founded in ${this.yearFounded}.`;
  };
}

//when we add a "new", this function becomes a new instance where you can have this scope to the function
const myNewCountry = new Country("The United States of America", 1776);

console.log(myNewCountry.describe());

// in contrast to a function with new
function printThis() {
  return this;
}

console.log(printThis());
console.log(new printThis());

// the above we can see that "this" is actually refer to a different scope

// A class method with the need to use new
class CountryClass {
  constructor(name, yearFounded) {
    this.name = name;
    this.yearFounded = yearFounded;
  }

  describe() {
    return `${this.name} was founded in ${this.yearFounded}.`;
  }
}

const myNewCountryClass = new CountryClass(
  "The United States of America",
  1776
);

console.log(myNewCountryClass.describe());

// So is the difference between class and function constructor
// https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript

// TLDR: they are almost the same just the syntax is different where function contructor is ES5 and class contructor is ES6, class = function with call

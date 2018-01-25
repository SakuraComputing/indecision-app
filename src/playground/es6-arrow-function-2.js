// arguments object is no longer bound
const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55,1, 1001));

// this keyword is no longer bound with arrow functions

const user = {
    name: 'Ewan',
    cities: ['London','Manchester','Leeds'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

// Challenge Area

const multiplier = {
  // numbers - array of numbers
    numbers: [10,20,30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply())




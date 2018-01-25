
// setup constructor to take name and age (default = 0)
// New method get description - return string dep on age
//


class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` Their major is probably ${this.major}`;
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name, location) {
        super(name);
        this.location = location;
    }
    homeLocation() {
        return !!this.location
    }
    getGreeting() {
        let location = super.getGreeting();
        if(this.homeLocation()) {
            location += ` I'm visiting from ${this.location}`;
        }
        return location;
    }
}

const me = new Traveller('Ewan Bauld', 'Manchester');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());
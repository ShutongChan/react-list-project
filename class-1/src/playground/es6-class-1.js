class Person {
    constructor(name = 'anonymous', location = 'Beijing', age = 0) {
        this.name = name;
        //this.location = location;
        this.age = age;
    }

    getGreeting() {
        return `Hi ${this.name}!`;
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

    hasMajor() {
        return !!this.major
    }

    getDescription() {
        let description = super.getDescription();

        if(!!this.hasMajor()) {
            description += `their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name,age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(!!this.hasHomeLocation()) {
            greeting += `I'm visiting from ${this.homeLocation}`;
        }

        return greeting;
    }
}

const me = new Student('Planti', 24, 'computer science');
console.log(me.getDescription());

const sid = new Traveler('Sid', 36, '');
console.log(sid.getGreeting());
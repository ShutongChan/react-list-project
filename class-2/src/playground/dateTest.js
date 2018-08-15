class MyDate extends Date {
    constructor() {
        super();
    }

    getTest = () => {
        return 'hello';
    }
}

const myDate = new MyDate();
console.log(myDate.getTest());
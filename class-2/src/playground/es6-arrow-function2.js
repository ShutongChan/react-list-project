// function add(a, b) {
//     console.log(arguments);
//     return a + b;
// }

// console.log(add(55, 1));

// const user = {
//     name:'planti',
//     cities:['beijing','shenzhen','xinjiang'],
//     printPlacesLived: function() {
//         console.log(this.name);
//         console.log(this.cities)

//         //const that = this;
//         this.cities.forEach((city) => {           
//             console.log(this.name + ' has lived in ' + city)
//         })
//     }
// };

// user.printPlacesLived();

const multiplier = {
    numbers: [1, 2, 3, 4, 5, 6],
    multiplyBy: 2,
    multiply: function() {
        return this.numbers.map((item) => item * this.multiplyBy);
    }
};

console.log(multiplier.multiply());

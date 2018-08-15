// const person = {
//     name: 'planti',
//     age : 24,
//     location: {
//         city: 'beijing',
//         temp: 10000
//     }
// };

// const { name: name = 'sid', age } = person;
// console.log(`${name} is ${age}`);

// const book = {
//     title: 'weicheng',
//     author: 'qianzhongshu',
//     publisher: {
//         //name: 'changjiang'
//     }
// }

// const {name: publisherName = 'self-published'} = book.publisher;

// console.log(publisherName);


const address = ['1299', 'beijing', 'xinjiang', '1234'];

const [street, city, state, zip] = address;

console.log(`you are in ${street}`);


const item = ['coffee (hot)', '24', '32', '48'];

const [type,,mediumPrice] = item;

console.log(`A medium ${type} charge ${mediumPrice} RMB`);




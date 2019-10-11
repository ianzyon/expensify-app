// console.log('test');
// // object destructuring
// const person = {
//     name: 'ian',
//     age: 28,
//     location: {
//         city: 'brasilia',
//         temp: 36
//     }
// }
// const {name, age} = person;


// console.log(`${name} is ${age}`);

// const {city, temp: temperature} = person.location;

// if (city && temperature) {
//     console.log(`Its ${temperature}C° in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: undefined
//     }
// }
// const {name: publisherName = 'self-published'} = book.publisher

// console.log(publisherName);

// array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state = 'New York'] = address
console.log(`You are in ${city} ${state}.`);

const itens = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];
const [hot = 'Milk', ,fee] = itens;

console.log(`A medium ${hot} costs ${fee}`)
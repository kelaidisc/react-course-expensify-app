// Object destructuring
// const person = {
//     name: 'Chris',
//     age: 28,
//     location: {
//         city: 'Corinth',
//         temp: 29
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { temp: temperature, city } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Harry Potter and the Prisoner of Azkaban',
//     author: 'J.K.Rowling',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName); //Penguin, Self-Published

// Array destructuring

// const address = ['1299 S', 'Corinth', , '15772'];

// const [, city, state = 'New York'] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];

const [itemName, , mediumPrice] = item;
console.log(`A medium  ${itemName} costs ${mediumPrice}`);
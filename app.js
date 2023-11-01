const strings = ['dog', 'by', 'cat', 'camping', 'large', 'flower', 'rabbit'];
const newStrings = strings.filter(str => str.length >= 5);
console.log(newStrings);


const numbers = ['45', '55', '65', '75', '85'];
const squares = numbers.map(num => num * num);
console.log(squares);

const alphabets = ['K', 'a', 'l', 'v', 'i', 'u', 'm'];
const concatenatedString = alphabets.reduce((acc, current) => acc + current, '');
console.log(concatenatedString);

const number = [1, 2, 3, 4, 5];
const firstEven = number.find(num => num % 2 === 0);
console.log(firstEven);

const ranks = [1, 5, 7, 8, 10, 7];
const firstIndex = ranks.findIndex(num => num === 7);
console.log(firstIndex);

const num = [2, 4, 6, 8];
num.forEach((value, index) => {
  console.log(`${index}:${value}`);
});

const marks = [35, 66, 25, 85, 75, 45];
const LessThan45 = marks.some(mark => mark < 45);
console.log(LessThan45);

const positive = [2, 3, 4, -1];
const areAllPositive = positive.every(num => num > 0);
console.log(areAllPositive);

const cars = [
  {
    name: 'Audi',
    color: ['black', 'red', 'grey'],
    capacity: 5,
  },
  {
    name: 'Hyundai',
    color: ['white', 'grey', 'black'],
    capacity: 5,
  },
  {
    name: 'Toyota',
    color: ['red', 'white', 'black'],
    capacity: 7,
  },
  {
    name: 'Renault',
    color: ['blue', 'silver', 'red'],
    capacity: 6,
  },
];

cars.forEach((car, index) => {
  console.log(`${index + 1}. "${car.name}"${car.color ? ` ${car.color.join(' ')}` : ''} ${car.capacity}`);
});

const person = {
  name: 'Ajay Kumar',
  age: 27,
  vehicles: {
    car: 'limousine',
    bike: 'ktm-duke',
    plane: 'lufthansa',
  },
  email: 'ajay@gmail.com',
  phoneno: 9978425555,
};

delete person.phoneno;

console.log(person.hasOwnProperty('bike')); 
console.log(person.hasOwnProperty('house'));

console.log(`${person.name} travels by ${person.vehicles['plane']} called ${person.vehicles.plane}`);

person.email = 'ajaykumar@gmail.com';

const keys = Object.keys(person);
console.log(keys);





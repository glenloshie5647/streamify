/*
Filename: SophisticatedCode.js
Content: A complex and elaborate code showcasing various advanced JavaScript concepts and techniques.
*/

// Class representing a Animal
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }

  eat(food) {
    console.log(`${this.name} eats ${food}.`);
  }
}

// Class representing a Dog
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }

  wagTail() {
    console.log(`${this.name} wags its tail.`);
  }
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Function to generate Fibonacci series up to a given number of terms
function generateFibonacciSeries(n) {
  const series = [0, 1];

  while (series.length < n) {
    const next = series[series.length - 1] + series[series.length - 2];
    series.push(next);
  }

  return series;
}

// Function to convert a binary string to decimal
function binaryToDecimal(binary) {
  let decimal = 0;
  let power = 0;

  for (let i = binary.length - 1; i >= 0; i--) {
    decimal += parseInt(binary[i]) * Math.pow(2, power);
    power++;
  }

  return decimal;
}

// Object representing a car
const car = {
  brand: 'Tesla',
  model: 'Model S',
  year: 2022,
  color: 'black',
  price: 80000,
  drive() {
    console.log(`Driving the ${this.brand} ${this.model}...`);
  },
  stop() {
    console.log(`Stopping the ${this.brand} ${this.model}...`);
  },
};

// Array of colors
const colors = ['red', 'green', 'blue', 'yellow'];

// Higher-order function to filter even numbers from an array
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// Example usage of the code

const max = 5;
console.log(`Prime numbers up to ${max}:`);
for (let i = 1; i <= max; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

console.log(`Fibonacci series with 10 terms: ${generateFibonacciSeries(10)}`);

console.log(`Binary 1010 in decimal: ${binaryToDecimal('1010')}`);

console.log(`Car: ${car.brand} ${car.model} ${car.color}`);
car.drive();
car.stop();

console.log(`Even numbers in the array [1, 2, 3, 4, 5]: ${filterEvenNumbers([1, 2, 3, 4, 5])}`);

const dog = new Dog('Buddy', 3, 'Retriever');
dog.speak();
dog.eat('bones');
dog.wagTail();

// ... and many more lines of sophisticated and creative code!
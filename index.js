//Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older)

const isEligibleToVote = (age) => {
    const result = age >= 18 ? 'Eligible to vote' : 'Not eligible to vote'
    return result
}

console.log(isEligibleToVote(20)) // Eligible to vote
console.log(isEligibleToVote(18)) // Eligible to vote
console.log(isEligibleToVote(17)) // Not eligible to vote

//function that takes two numbers as input and determines which one is greater.

const isGreater = (num1, num2) => {
    return num1 > num2 ? `${num1} is greater than ${num2}` : `${num2} is greater than ${num1}`
}

console.log(isGreater(2, 5)) // 5 is greater than 2
console.log(isGreater(10, 5)) // 10 is greater than 5

//Function that takes a number as input and determines if it is positive or negative.

const checkNum = (num) => {
    return num <= 0 ? 'Negative Number' : 'Positive Number'
}
console.log(checkNum(9)) // Positive Number
console.log(checkNum(-8)) // Negative Number
console.log(checkNum(22)) // Positive Number

//function that takes a number as input and determines if it is even or odd.

const isEvenOdd = (num) => {
    return (num % 2) === 0 ? 'Even Number' : 'Odd Number'
}

console.log(isEvenOdd(5)) // Odd Number
console.log(isEvenOdd(8)) // Even Number
console.log(isEvenOdd(10)) // Even Number

//function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

const checkForAlphabetA = (str)=> {
    return str.toLowerCase().includes('a') ? 'Includes a' : 'Does not include a'
}

console.log(checkForAlphabetA("Tanay")) // Includes a 
console.log(checkForAlphabetA("Jeep")) // Does not include a 
console.log(checkForAlphabetA("Jane")) // Includes a 

//function that takes a string as input and determines if it is longer than 5 characters.

const checkLength = (str) => {
    return str.length > 5 ? 'more than 5 characters' : 'less than 5 characters'
}

console.log(checkLength("Programming")) // more than 5 characters 
console.log(checkLength("Jeep")) // less than 5 characters 

//function that takes a number as input and determines if it is between 1 and 10.

const isBetweenOneAndTen = (num) => {
    return (num > 1 && num < 10) ? true : false
}

console.log(isBetweenOneAndTen(5)); // true
console.log(isBetweenOneAndTen(11)); // false

//function that takes a string as input and determines if it contains the word "hello".

const isHelloPresent = (str) => {
    return str.toLowerCase().includes('hello') ? true : false
}

console.log(isHelloPresent("Hello World")) // true
console.log(isHelloPresent("World")) // false

//function that takes a number as input and determines if it is a multiple of 3.

const isMultipleOfThree = (num) => {
    return num % 3 === 0 ? true : false
}

console.log(isMultipleOfThree(5)); // false
console.log(isMultipleOfThree(9)); // true

//function which takes in a number as input and returns it after multiplying by 10.

const multiplyByTen = (num) => {
    return num * 10
}

console.log(multiplyByTen(20)) // 200
console.log(multiplyByTen(40)) // 400


//Console individual values of the product object using object destructuring.

const product = {
    title: "iPhone",
    price: 5999,
    description: "The iPhone is a smartphone developed by Apple"
  }
  
const {title, price, description} = {...product}

console.log(title); // iPhone
console.log(price); // 5999
console.log(description); // The iPhone is a smartphone developed by Apple

// Create a function getBookDetails that takes a book object as a parameter and returns true if the book has more than 100 pages.

const book ={
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180
  };

const book2 = {
    title: "1984",
    author: "George Orwell",
    pages: 100
  };

const getBookDetails = (book) => {
    return book.pages > 100 ? true : false
}

console.log(getBookDetails(book)) // logs 'true' if the pages are above 100
console.log(getBookDetails(book2))//ogs 'false' if the pages are 100 or below

//function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.

const person = {
    name: 'Amit',
    age: 25,
    occupation: 'Software Engineer'
}
const changeOccupation = (obj, position) => {
    obj.occupation = position
}

console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to the console
changeOccupation(person, 'Product Manager');
console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Product Manager' } to the console

// Use array destructuring to log each number to the console.

const numbers = [1, 2, 3];
const [a, b, c] = numbers

console.log(a); // logs 1 to the console
console.log(b); // logs 2 to the console
console.log(c); // logs 3 to the console

//Convert the given function into ES6 with least amount of characters.

function defaultParamsFunc(a, b, c) {
    if (c === undefined) {
        c = 4;
    }
    return a * b * c;
    };

const es6Func = (a, b, c = 4) =>  a * b * c
 console.log(defaultParamsFunc(3, 1)); // 12
    console.log(defaultParamsFunc(3, 10)); // 120


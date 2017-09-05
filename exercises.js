/*
   Sometimes you want to run the same code over and over again, each time with a different value.
   It can be done with loops. There are different kinds of loops. One of them is called "for" loop.
   The for loop has the following syntax:
   for (statement 1; statement 2; statement 3) {
      code block to be executed
   }
   Statement 1 is executed before the loop (the code block) starts.
   Statement 2 defines the condition for running the loop (the code block).
   Statement 3 is executed each time after the loop (the code block) has been executed.

   &&(and), ||(or), !(not) are logical operators.
   ||(or) works as follows - if at least one of the arguments is true, it returns true, otherwise - false
   &&(and) - returns true if both arguments are true, otherwise false
   !(not) - first, converts the argument to the logical type true / false, then returns the opposite value

   An array is a special variable, which can hold more than one value at a time.
   An array can hold many values under a single name, and you can access the values by referring to an index number.
   JavaScript does not support arrays with named indexes. In JavaScript, arrays always use numbered indexes.
   You should use arrays when you want the element names to be numbers.
   Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
   To recognize an array ECMAScript 5 defines a method Array.isArray(x) or x.constructor.toString().indexOf("Array") > -1.

   Git (Version Control System) is software to facilitate work with changing information. ( Git is a command-line tool)
   The version control system allows you to store multiple versions of the same document,
   if necessary, go back to earlier versions, determine who made the change and when, and much more.
   Such systems are most widely used in the development of software to store the source code of the program being developed.
   This allows developers to easily collaborate, as they can download a new version of the software, make changes,
   and upload the newest revision. Every developer can see these new changes, download them, and contribute.

   GitHub.com is a website, where developers can store their projects and network with likeminded people using Git.
   GitHub stores repositories. A repository is a location where all the files for a particular project are stored,
   usually abbreviated to "repo." Each project will have its own repo, and can be accessed by a unique URL.
*/

// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  return x > y ? x : y;
}

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  switch (language) {
    case 'German': return 'Guten Tag!';
    case 'English': return 'Hello!';
    case 'Spanish': return 'Hola!';
    default: return 'Hello!';
  }
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
  return num === 10 || num === 5;
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  return num > 20 && num < 50;
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  return num % 1 === 0;
  // or  num === parseInt(num, 10) or experimental Number.isInteger(num)
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  var fB = '';
  if(num % 3 === 0){ fB += 'fizz'; }
  if(num % 5 === 0){ fB += 'buzz'; }
  if(fB === ''){ return num; }
  return fB;
}

function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if(num < 2){ return false; }
  if(num === 2){ return true; } // to make shorter "if" condition inside of for loop
  for(var i = 2; i < num; i++){
         if(num % i === 0){ return false; }
      }
  return true;
}

function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length-1];
}

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers
  // increase each integer by one
  // return the array
  return arr.map(function(i){ return i += 1; });
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(item);
  return arr;
  // or arr.concat(item);
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  return words.join(' ');
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  return arr.indexOf(item) !== -1;
  // or arr.includes(item);
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  var sum = 0;
  for(var i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
  // or numbers.reduce(function(c,n){ return c + n; }, 0);
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  return addNumbers(testScores) / testScores.length;
  // or var sum = 0;
  // for(var i = 0; i < testScores.length; i++){
  //   sum += testScores[i];
  // }
  // return sum / testScores.length;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  return Math.max.apply(null, numbers);
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};

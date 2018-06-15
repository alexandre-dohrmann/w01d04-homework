//------------------------------------------------------------------------------
//  Functions (Verbal Questions):
//------------------------------------------------------------------------------

// 1. Create a file called solutions.js. Write your answers in this file.
	// Done.

// 2.  What is the difference between a parameter and an argument?

	// Answer:
	// A parameter is a variable in a method definition. 
	// When a method is called, the arguments are the data you pass into the method's parameters. 
	// Parameter is variable in the declaration of function. 
	// Argument is the actual value of this variable that gets passed to function.

// 3.  What is the difference between a parameter and an argument?

	// Answer:
	// console.log() outputs a "log" in the console and is only meant for the 
	// user to see and check code. It also exports in string-format.
	// return is a command that belongs-to, and only works within functions. 
	// return exports data from a function to the outside world. return exports data
	// in it's raw format.

//------------------------------------------------------------------------------
//  Palindrome:
//------------------------------------------------------------------------------

// 1. Write a function checkPalindrome that accepts a single argument, a string. 
// The function should return true (Boolean) if the string is a palindrome, false if it is not. 
// Make sure your function will give the correct answer for words with capital letters.
		
	// Answer: 
	// const checkPalindrome = (string) => {
	// 	 let lowerCase = string.toLowerCase();
	// 	 let reverseString = lowerCase.split('').reverse('').join('');
	// 	 if (lowerCase === reverseString) {
	// 	 	return true
	// 	 } else {
	// 	 	return false
	// 	 }
	// 	}
	// 	console.log(checkPalindrome("Race car"));
	// 	console.log(checkPalindrome("NiTiN"));
	// 	console.log(checkPalindrome("I love burritos"));

	// const checkPalindrome = (word) => {
	// 	word = word.toLowerCase();
	// 	for (let i = 0; i < word.length / 2; i++) {
	// 	if (word[i] !== word[word.length - 1 - i]) {
	// 		return false;
	// 	}
	// 	// const temp = word[i];
	// 	// word[i] = word[word.length - 1 - i];
	// 	// word[word.length - 1 - i] = temp;
	// 	}
	// 	return true;
	// }

	// 	console.log(checkPalindrome("Racecar"));
	// 	console.log(checkPalindrome("NiTiN"));
	// 	console.log(checkPalindrome("I love burritos"));

//------------------------------------------------------------------------------
//  Digit Sum:
//------------------------------------------------------------------------------

// 1. Write a function sumDigits that accepts a number and returns the sum of its digits.
	
	// Answer:
	// const sumDigits = (number) => {
	// 	let total = 0;
	// 	numPlus = number.toString().split('');
	// 		for (let i = 0; i < numPlus.length; i++) {
	// 			let converted = parseInt(numPlus[i]);
	// 			total += converted;
	// 	}
	// 	return total;
	// }
	// console.log(sumDigits(810));


//------------------------------------------------------------------------------
//  Pythagoras:
//------------------------------------------------------------------------------

// Write a function calculateSide that takes two arguments: sideA and sideB, and 
// returns the solution for sideC using the Pythagorean theorem.

// hint: discover the Pythagorean Theorem on a website called google.com
// hint: checkout the Math methods in javascript

	// Answer:
	// const calculateSide = (sideA, sideB) => {
	// 	let sideC = Math.hypot(sideA, sideB);
	// 	let cSquared = sideC * sideC;
	// 		if (cSquared = (sideA * sideA) + (sideB * sideB)) {
	// 			return [true, sideC]
	// 		} else {
	// 		return [false, sideC]
	// 	}
	// }
	// console.log(calculateSide(8, 6));

//------------------------------------------------------------------------------
//  Sum Array:
//------------------------------------------------------------------------------

// Write a function sumArray that takes an array as an argument. 
// The array should contain numbers. 
// The function should return the sum of the numbers in the array. 
// Use a for loop within the function to iterate over the array and sum the contents. 
// Use a variable such as: 
	// let sum = 0;
	// that will accumulate value within the loop. Expected result:

	// console.log(sumArray([1, 2, 3, 4, 5, 6]));
	// => 21

	// Answer:
		// const sumArray = (arr) => {
		// 	let sum = 0;
		// 	for (let i = 0; i < arr.length; i++) {
		// 		sum += arr[i];
		// 	}
		// 	return sum;
		// }
		// console.log(sumArray([3, 5, 6, 7]));

//------------------------------------------------------------------------------
//  Prime Numbers:
//------------------------------------------------------------------------------

// A Prime number is a number that is not evenly divisible by another number except 1 and itself. 
// If you want to read more deeply about it, go here. 
// To test whether a number is Prime, you only need to test as far as the square root of that number. 
// This is advisable for optimization and testing large numbers.

	// Step One
	// Write a function called checkPrime that will test whether a number is Prime. 
	// The function will return true (Boolean) if Prime, false if not. 
	// Hint: Check every number up to the square root. To do this, try a for loop.

	// 	// Answer:
	// 	const checkPrime = (num) => {
	// 	  for (let i = 2; i < Math.sqrt(num); i++) {
	// 	    if (num % i === 0) {
	// 	      return false
	// 	    }
	// 	  }
	// 	  return true
	// 	}
	// 	console.log(checkPrime(3));	

	// // Step Two
	// // Write another function called printPrimes that will print (console log) all the 
	// // // Primes up to an arbitrary limit. 
	// // For example, if you invoke your function with printPrimes(97), 
	// // it will print all the Prime numbers up to and including 97. 
	// // This function can call on the previous checkPrime function.

	// 	// Answer:
	// 	const printPrimes = (primes) => {
	// 		for (let x = 2; x <= primes; x++) {
	// 			if (checkPrime(x) === true) {
	// 			console.log(x);
	// 			}
	// 		}
	// 	}
	// 	printPrimes(12);

//------------------------------------------------------------------------------
//  Insert Dash:
//------------------------------------------------------------------------------

	// Write a function insertDash that accepts a number as a parameter and returns a 
	// string with a dash inserted between any consecutive odd numbers. 
	// There should not be a dash at the end, it goes only between numbers.

		// Answer:
			const insertDash = (num) => {
				const numDash = num.toString().split('');
				for (let i = 0; i < numDash.length; i++) {
  				  if ((numDash[i] % 2 === 1) && ((numDash[i + 1]) % 2 === 1)) { 
						// numDash[i] = numDash[i] + '-'; 
						numDash[i] = numDash[i] + '-';
  	  				}
  				}
  				const numDashFinal = numDash.join('');
  				return numDashFinal;
  				}
  				console.log(insertDash(23572877));



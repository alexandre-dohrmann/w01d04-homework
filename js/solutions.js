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
	const calculateSide = (sideA, sideB) => {
		let sideC = Math.hypot(sideA, sideB);
		let cSquared = sideC * sideC;
			if (cSquared = (sideA * sideA) + (sideB * sideB)) {
				return [true, sideC]
			} else {
			return [false, sideC]
		}
	}
	console.log(calculateSide(8, 6));


// Frequency Counter is used to compare arrays or strings to each other quickly by
// first creating objects and then comparing the objects because it is fast to
// compare objects

// good to use when you need to compare multiple data sets
// see if 2 things consist of the same thing
// anagrams/if #'s have same digits/ if 2nd array is square of first

// Check if 2nd array is square of first
// This is the basic way to solve it by using loops but this is O(n2) complexity

// const same = (arr1, arr2) => {
// 	if (arr1.length !== arr2.length) {
// 		return false;
// 	}
// 	for (let i = 0; i < arr1.length; i++) {
// 		let correctIndex = arr2.indexOf(arr1[i] ** 2);
// 		if (correctIndex === -1) {
// 			return false;
// 		}
// 		arr2.splice(correctIndex, 1);
// 	}
// 	return true;
// };

// Refactored into the Object and O(n) way to solve it

// const same = (arr1, arr2) => {
// 	if (arr1.length !== arr2.length) {
// 		return false;
// 	}
// 	let frequencyCounter1 = {};
// 	let frequencyCounter2 = {};
// 	for (let val of arr1) {
// 		frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
// 	}
// 	for (let val of arr2) {
// 		frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
// 	}
// 	for (let key in frequencyCounter1) {
// 		if (!(key ** 2 in frequencyCounter2)) {
// 			return false;
// 		}
// 		if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
// 			return false;
// 		}
// 	}
// 	console.log(frequencyCounter1);
// 	console.log(frequencyCounter2);
// 	return true;
// };

// console.log(same([1, 2, 3], [9, 4, 1]));

// ANNAGRAM EXAMPLE

// Given two strings, write a function to determine if the second string is an
// anagram of the first. An anagram is a word, phrase or name formed by rearranging
// the letters of another, such as cinema, formed from iceman.

// const validAnagram = (first, second) => {
// 	if (first.length !== second.length) {
// 		return false;
// 	}

// 	const lookup = {};

// 	for (let i = 0; i < first.length; i++) {
// 		let letter = first[i];

// 		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
// 	}
// 	console.log(lookUp);

// 	for (let i = 0; i < second.length; i++) {
// 		let letter = second[i];

// 		if (!lookup[letter]) {
// 			return false;
// 		} else {
// 			lookup[letter] -= 1;
// 		}
// 	}

// 	return true;
// };

// console.log(validAnagram('anagrams', 'nagaramm'));

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution Must have teh following complexities:
// Time : O(N)

// sample input:
// sameFrequency(182, 281) // true
// (34, 14) //false
// (3589578, 5879385) // true
// (22, 222) // false

// const sameFrequency = (num1, num2) => {
// 	// change numbers to strings so the length can be counted
// 	let strNum1 = num1.toString();
// 	let strNum2 = num2.toString();
// 	//check length because if length is not equal they cant be the same frequency
// 	if (strNum1.length !== strNum2.length) return false;

// 	// make 2 objects to hold the values of each string to then compare
// 	const countNum1 = {};
// 	const countNum2 = {};

// 	// put values from strings into objects
// 	for (let i = 0; i < strNum1.length; i++) {
// 		countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
// 	}

// 	for (let j = 0; j < strNum1.length; j++) {
// 		countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
// 	}

// 	// check values in objects against each other to see if they are equal
// 	for (let key in countNum1) {
// 		if (countNum1[key] !== countNum2[key]) return false;
// 	}

// 	return true;
// };

// console.log(sameFrequency(182, 281));

// Implement a function called areThereDuplicates which accepts a variable number of arguments and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

const areThereDuplicates = () => {
	// make object to count the number of values given
	let collection = {};
	// count number of values in the function in an object
	for (let val in arguments) {
		collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
	}
	// check to see if there are more than 1 in any of the key value pairs
	for (let key in collection) {
		if (collection[key] > 1) return true;
	}
	return false;
};

console.log(areThereDuplicates(1, 2, 3, 4));

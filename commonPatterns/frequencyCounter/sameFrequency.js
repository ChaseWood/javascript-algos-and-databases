// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

const sameFrequency = (num1, num2) => {
	let strNum1 = num1.toString();
	let strNum2 = num2.toString();

	if (strNum1.length !== strNum2.length) return false;

	let countStrNum1 = {};
	let countStrNum2 = {};

	for (let i = 0; i < strNum1.length; i++) {
		countStrNum1[strNum1[i]] = (countStrNum1[strNum1[i]] || 0) + 1;
	}
	for (let j = 0; j < strNum2.length; j++) {
		countStrNum2[strNum2[j]] = (countStrNum2[strNum2[j]] || 0) + 1;
	}

	for (let key in countStrNum1) {
		if (countStrNum1[key] !== countStrNum2[key]) return false;
	}
	return true;
};

console.log(sameFrequency(34, 14));

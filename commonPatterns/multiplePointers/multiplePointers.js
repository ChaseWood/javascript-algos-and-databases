// Write a function called sumZero which accepts a sorted array
// of integers. The function should find the first pair where the
// sum is 0. Return an array that includes both values that sum
// to zero or undefined inf a pair does not exist1

// sliding window?

// Naive Solution
// nested loop checks over all of the array
// time complexity O(n^2)

const sumZero = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === 0) {
				return arr[i], arr[j];
			}
		}
	}
};

// time complexity O(n)

const sumZero2 = (arr) => {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
};

// only looping once so O(n) Time
// j is looping over the entire array and moving i along the index
// and comparing the two together

const countUniqueValues = (array) => {
	if (array.length === 0) return 0;
	let i = 0;
	for (var j = 1; j < array.length; j++) {
		if (array[i] !== array[j]) {
			i++;
			array[i] = array[j];
		}
	}
	return i + 1;
};

console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 7, 8, 8, 8]));

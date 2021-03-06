// Divide and Conquer - Binary Search
// Only works on sorted arrays
// takes the midpoint and looks if desired input is left or right of midpoint
// then only looks at the left or right after it decides which it needs
// left pointer at 0 right pointer at end of array

// BIG O
// Time Complexity
// Worst - O(log n) - Best O(1) if lucky with middle

const binarySearch = (arr, elem) => {
	let start = 0;
	let end = arr.length - 1;
	let middle = Math.floor((start + end) / 2);
	while (arr[middle] !== elem && start <= end) {
		if (elem < arr[middle]) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
		middle = Math.floor((start + end) / 2);
	}
	if (arr[middle] == elem) {
		return middle;
	} else return -1;
};

// cleaned up shorter version ONE LINERS
const binarySearch = (arr, elem) => {
	let start = 0;
	let end = arr.length - 1;
	let middle = Math.floor((start + end) / 2);
	while (arr[middle] !== elem && start <= end) {
		if (elem < arr[middle]) end = middle - 1;
		else start = middle + 1;
		middle = Math.floor((start + end) / 2);
	}
	return arr[middle] === elem ? middle : -1;
};

console.log(binarySearch([2, 3, 5, 6, 9, 13, 15, 28], 9));

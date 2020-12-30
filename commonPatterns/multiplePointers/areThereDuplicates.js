// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

function areThereDuplicates(...args) {
	// first sorted the ...args array so that the multiplePointers will work
	let sortedArgs = args.sort((a, b) => a - b);
	console.log(sortedArgs);

	// made start and next so that there are variables to be added to
	let start = 0;
	let next = 1;

	// while function that will run the entire array
	while (next < args.length) {
		if (args[start] === args[next]) {
			return true;
		}

		// this moves the pointers along the array by adding to the counters
		start++;
		next++;
	}
	return false;
}

console.log(areThereDuplicates(1, 3, 2));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));

// works with numbers not letters for some reason

// Basic Linear Search
// O(n) as the length of the array grows so does the amount of time
// This is what .indexOf, .includes, .find, .findIndex use in javascript

const linearSearch = (array, num) => {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === num) return i;
	}
	return -1;
};

console.log(linearSearch([1, 2, 3], 4));

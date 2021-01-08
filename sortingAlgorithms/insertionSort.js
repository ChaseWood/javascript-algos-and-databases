// Insertion Sort
// Big 0(n2)
// unless ALMOST all sorted then only a couple times through
// worst case is reversing data
// good at receiving new data online live because it is keeping one side sorted and inserting into appropriate place it works well for incoming streaming data

// builds up sort by creating a larger left half of array which is sorted
// inserts 1 item at a time in the correct place

// Start by picking the second element in the array
// now compare the second element with the one before it and swap if necessary
// continue to the next element and if it is in hte incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
// repeat until the array is sorted

const insertionSort = (arr) => {
	4;
	for (var i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentVal;
	}
	return arr;
};

console.log(insertionSort([2, 1, 8, 39, 3, 4, 20]));

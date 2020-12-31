// count the number of times a smaller string appears in a larger string
// define function that takes 2 strings

const naiveSearch = (long, short) => {
	let count = 0;
	for (let i = 0; i < long.length; i++) {
		for (let j = 0; j < short.length; j++) {
			console.log(short[j], long[i + j]);
			if (short[j] !== long[i + j]) {
				console.log('BREAK!');
				break;
			}
			if (j === short.length - 1) {
				console.log('FOUND ONE!');
				count++;
			}
		}
	}
	return count;
};

// short version on single line if statements
const naiveSearch = (long, short) => {
	let count = 0;
	for (let i = 0; i < long.length; i++) {
		for (let j = 0; j < short.length; j++) {
			if (short[j] !== long[i + j]) break;
			if (j === short.length - 1) count++;
		}
	}
	return count;
};

console.log(naiveSearch('lorie loled', 'lo'));

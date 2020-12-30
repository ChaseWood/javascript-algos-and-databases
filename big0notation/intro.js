const { performance } = require('perf_hooks');

// const addUpto = (n) => {
// 	let total = 0;
// 	for (let i = 1; i <= n; i++) {
// 		total += i;
// 	}
// 	return total;
// };

// const t1 = performance.now();
// console.log(addUpto(1000000000));
// const t2 = performance.now();
// console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);

const addUpto2 = (n) => {
	return (n * (n + 1)) / 2;
};

const t3 = performance.now();
console.log(addUpto2(1000000000));
const t4 = performance.now();
console.log(`Time elapsed: ${(t4 - t3) / 1000} seconds.`);

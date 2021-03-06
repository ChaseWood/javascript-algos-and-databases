// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

const singleNumber = (nums) => {
	let collection = {};
	for (let i = 0; i < nums.length; i++) {
		if (!collection[nums[i]]) {
			collection[nums[i]] = 1;
		} else {
			collection[nums[i]]++;
		}
	}
	for (let key in collection) {
		if (collection[key] === 1) {
			return key;
		}
	}
};

console.log(singleNumber([1, 1, 3, 3, 2, 2, 5]));

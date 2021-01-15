// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 2 * 104
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

const rotate = (nums, k) => {
	let collect = [];
	let counter = nums.length - 1;
	for (let i = nums.length - 1; i >= nums.length - k; i--) {
		collect.unshift(nums[i]);
	}
	for (let j = nums.length - 1 - k; j >= 0; j--) {
		nums[counter] = nums[j];
		counter--;
	}
	for (let k = 0; k < collect.length; k++) {
		nums[k] = collect[k];
	}
	return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

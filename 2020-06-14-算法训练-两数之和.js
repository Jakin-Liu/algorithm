/** 两数之和 **/
/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
          if (nums[i] + nums[j] === target && i !== j) {
            return [i, j]
          }
      }
  }
};
const start = new Date().getTime()
const res = twoSum([2, 11, 7, 18, 23], 9)
const end = new Date().getTime()
console.log(`algorithm use time == ${end - start}`)
console.log(res)
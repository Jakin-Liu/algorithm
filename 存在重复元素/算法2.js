const containsDuplicate = function (nums) {
  nums = nums.sort((a, b) => a - b)
  console.log(nums)
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i+1]) {
      return true
    }
  }
  return false
}

console.log(containsDuplicate([90, 12, 1, 2, 6, 8, 9, 1]))
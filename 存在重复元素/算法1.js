const containsDuplicate = function (nums) {
  const set = new Set()
  for (const num of nums) {
    if (set.has(num)) {
      return true
    }
    set.add(num)
  }
  return false
}

console.log(containsDuplicate([1, 2, 6, 8, 9, 1]))
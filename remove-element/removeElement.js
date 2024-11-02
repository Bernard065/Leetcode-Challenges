/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
};

const nums1 = [3, 2, 2, 3];
const val1 = 3;
console.log(removeElement(nums1, val1));
console.log(nums1);

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
const val2 = 2;
console.log(removeElement(nums2, val2)); // Output: 5
console.log(nums2); 
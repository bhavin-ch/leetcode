/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
    nums = [...nums.slice(-1*k), ...nums.slice(0,nums.length - k)];
    console.log(nums);
};
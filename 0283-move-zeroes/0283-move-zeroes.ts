/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let leftPtr: number = 0;
    let rightPtr: number = 1;

    for (rightPtr = 1; rightPtr < nums.length; rightPtr++)  {
        if (nums[rightPtr] != 0 && nums[leftPtr] == 0)  {
            // swap
            [nums[leftPtr], nums[rightPtr]] = [nums[rightPtr], nums[leftPtr]];
            leftPtr++;
        } else if (nums[leftPtr] != 0)  {
            leftPtr++;
        }
    }
};
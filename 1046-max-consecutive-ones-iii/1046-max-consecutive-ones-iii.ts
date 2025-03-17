function longestOnes(nums: number[], k: number): number {
    let leftPtr: number = 0;
    let rightPtr: number = 0;

    let max: number = 0;
    let num_zeros: number = 0;

    for (rightPtr = 0; rightPtr < nums.length; rightPtr++)  {
        if (nums[rightPtr] == 0)    {
            num_zeros++;
        }

        if (num_zeros > k)  {   // contract the window
            while (nums[leftPtr] != 0)  {
                leftPtr++;
            }
            num_zeros--;
            leftPtr++;
        }
        max = Math.max(max, rightPtr - leftPtr + 1);
    }

    return max;
};
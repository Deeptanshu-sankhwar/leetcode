function longestSubarray(nums: number[]): number {
    let leftPtr: number = 0;
    let rightPtr: number = 0;

    let max: number = 0;
    let num_del: number = 0;

    for (rightPtr = 0; rightPtr < nums.length; rightPtr++)  {
        if (nums[rightPtr] == 0)    {
            num_del++;
        }

        if (num_del > 1)    {
            while (nums[leftPtr] != 0)  {
                leftPtr++;
            }
            num_del--;
            leftPtr++;
        }
        max = Math.max(max, rightPtr - leftPtr);
    }

    return max;
};
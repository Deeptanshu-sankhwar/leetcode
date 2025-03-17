function maxOperations(nums: number[], k: number): number {
    let result: number = 0;

    let leftPtr: number = 0;
    let rightPtr: number = nums.length - 1;

    nums.sort((a, b) => a - b);

    while (rightPtr > leftPtr)  {
        if (nums[rightPtr] + nums[leftPtr] == k)    {
            result++;
            rightPtr--;
            leftPtr++;
        } else if (nums[rightPtr] + nums[leftPtr] < k)  {
            leftPtr++;
        } else {
            rightPtr--;
        }
    }

    return result;
};
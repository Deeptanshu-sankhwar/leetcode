// Kadene's algorithm

function maxSubArray(nums: number[]): number {
    let currentSum: number = 0;
    let max: number = nums[0];

    for (let i = 0; i < nums.length; i++)   {
        currentSum = Math.max(nums[i], currentSum + nums[i]);   // deciding whether to start fresh or continue
        max = Math.max(max, currentSum);
    }

    return max;
};
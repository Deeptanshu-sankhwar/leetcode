function findMaxAverage(nums: number[], k: number): number {
    let maxAvg: number = -Infinity;
    let windowSum: number = 0;

    let leftPtr: number = 0;

    for (let rightPtr = 0; rightPtr < nums.length; rightPtr++)   {
        windowSum += nums[rightPtr];

        if (rightPtr - leftPtr + 1 == k)    {
            let avg: number = windowSum/k;
            maxAvg = Math.max(avg, maxAvg);
            windowSum -= nums[leftPtr];
            leftPtr++;
        }
    }

    return maxAvg;
};
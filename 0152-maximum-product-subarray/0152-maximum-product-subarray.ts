// Kadene's algorithm

function maxProduct(nums: number[]): number {
    let currentProduct: number = 1;
    let max: number = nums[0];
    let min: number = nums[0];

    let result: number = nums[0];

    for (let i = 1; i < nums.length; i++)   {
        if (nums[i] < 0)    {
            let temp: number = max;
            max = min;
            min = temp;
        }

        max = Math.max(nums[i], max * nums[i]);
        min = Math.min(nums[i], min * nums[i]);

        result = Math.max(result, max);
    }

    return result;
};
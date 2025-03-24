function threeSum(nums: number[]): number[][] {
    // sort the array, and apply two pointer

    let results: number[][] = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let leftPtr: number = i + 1;
        let rightPtr: number = nums.length - 1;

        while (leftPtr < rightPtr) {
            if (nums[i] + nums[leftPtr] + nums[rightPtr] < 0) {
                leftPtr++;
            } else if (nums[i] + nums[leftPtr] + nums[rightPtr] > 0)    {
                rightPtr--;
            } else {
                results.push([nums[i], nums[leftPtr], nums[rightPtr]]);

                // Skip duplicates for left
                while (leftPtr < rightPtr && nums[leftPtr] === nums[leftPtr + 1]) leftPtr++;
                // Skip duplicates for right
                while (leftPtr < rightPtr && nums[rightPtr] === nums[rightPtr - 1]) rightPtr--;
            }
        }
    }

    return results;
};
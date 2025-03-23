function findMin(nums: number[]): number {
    let low: number = 0;
    let high: number = nums.length - 1;

    let mid: number = Math.floor((low + high) / 2);
    
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (nums[mid] < nums[0]) {
            // go till the least
            let k: number = mid;
            while(nums[--k] < nums[mid])    {
                // do nothing
            }
            return nums[k+1];
        } else {
            low = mid + 1;
        }
    }

    return nums[0];
};
function findPeakElement(nums: number[]): number {
    let low: number = 0;
    let high: number = nums.length;

    if (nums.length == 0 || nums.length == 1)   {
        return 0;
    }

    if (nums.length == 2)   {
        return (nums[0] > nums[1]) ? 0 : 1;
    }

    while (low <= high) {
        let mid: number = Math.floor((low + high) / 2);

        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1] || mid == nums.length - 1 && nums[mid] > nums[mid - 1]) {
            return mid;
        } else if (nums[mid] < nums[mid + 1])   {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return 0;
};
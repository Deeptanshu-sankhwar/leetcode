function searchRange(nums: number[], target: number): number[] {
    let low: number = 0;
    let high: number = nums.length - 1;

    let begin: number = 0;
    let end: number = 0;

    while (low <= high) {
        let mid: number = Math.floor((low + high) / 2);

        if (nums[mid] < target) {
            low = mid + 1;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            begin = mid;
            end = mid;
            while (nums[begin] == target || nums[end] == target)    {
                if (nums[begin] == target)  {
                    begin--;
                }
                if (nums[end] == target)    {
                    end++;
                }
            }
            return [begin + 1, end - 1];
        }
    }

    return [-1, -1];
};
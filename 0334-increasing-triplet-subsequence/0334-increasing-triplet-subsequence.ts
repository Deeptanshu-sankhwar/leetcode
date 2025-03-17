function increasingTriplet(nums: number[]): boolean {
    let first: number = Infinity; // first smallest number
    let second: number = Infinity; // second smallest number

    // if a third smallest number exists -> true

    for (let i = 0; i < nums.length; i++)   {
        if (first >= nums[i])   {
            first = nums[i];
        } else if (second >= nums[i])   {
            second = nums[i];
        } else {
            return true;
        }
    }
    return false;
};
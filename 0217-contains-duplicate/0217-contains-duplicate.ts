function containsDuplicate(nums: number[]): boolean {
    let hash = new Map<number, boolean>();

    for (let i = 0; i < nums.length; i++)   {
        if (hash.get(nums[i]))  {
            return true;
        }
        hash.set(nums[i], true)
    }
    return false;
};
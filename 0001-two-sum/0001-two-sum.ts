function twoSum(nums: number[], target: number): number[] {
    let hash = new Map<number, number[]>();

    for (let i = 0; i < nums.length; i++)   {
        if (hash.get(target - nums[i])) {
            return [i, hash.get(target - nums[i])[0]];
        }

        hash.set(nums[i], [i, target - nums[i]]);
    }
    
    return [0, 0];
};
function longestConsecutive(nums: number[]): number {
    let hashMap = new Map<number, boolean>();

    if (nums.length === 0)  {
        return 0;
    }

    if (nums.length === 1)  {
        return 1;
    }

    // complete the hashmap
    for (let i = 0; i < nums.length; i++)   {
        hashMap.set(nums[i], true);
    }

    let result: number = 0;

    for (const [k, v] of hashMap)   {
        if (hashMap.get(k-1) && !hashMap.get(k+1))   {  // reach last element of this consecutive sequence
            let itr: number = k;
            let counter: number = 0;
            while (hashMap.get(itr--))    {
                counter++;
            }
            result = Math.max(result, counter);
        }
    }

    if (result === 0)   {
        return 1;
    }

    return result;
};
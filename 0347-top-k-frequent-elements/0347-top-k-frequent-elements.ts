function topKFrequent(nums: number[], k: number): number[] {
    const hashMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1);
    }

    // Map frequency -> list of elements with that frequency (bucket)
    const bucket: number[][] = Array(nums.length + 1).fill(null).map(() => []);

    for (const [num, freq] of hashMap.entries()) {
        bucket[freq].push(num);
    }

    const result: number[] = [];

    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        for (const num of bucket[i]) {
            result.push(num);
            if (result.length === k) break;
        }
    }

    return result;
}

function findDifference(nums1: number[], nums2: number[]): number[][] {
    let set1 = new Set<number>([...nums1]);
    let set2 = new Set<number>([...nums2]);

    let diff1 = [...set1].filter((e) => !set2.has(e));
    let diff2 = [...set2].filter((e) => !set1.has(e));

    return [diff1, diff2];
};
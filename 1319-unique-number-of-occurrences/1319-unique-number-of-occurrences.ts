function uniqueOccurrences(arr: number[]): boolean {
    // map frequency then insert in a set
    let frequency = new Map<number, number>();

    for (let i = 0; i < arr.length; i++)    {
        frequency.set(arr[i], (frequency.get(arr[i]) || 0) + 1);
    }

    let set = new Set<number>();

    for (const [k, v] of frequency.entries())   {
        if (set.has(v)) {
            return false;
        }
        set.add(v);
    }

    return true;
};
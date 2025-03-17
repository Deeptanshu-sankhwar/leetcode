function closeStrings(word1: string, word2: string): boolean {
    // true if -> same length, same characters & same frequency

    let set1 = new Set<string>(word1.split(""));
    let set2 = new Set<string>(word2.split(""));

    if (word1.length != word2.length)   {
        return false;
    }

    for (const item of set1) {
        if (!set2.has(item)) {
            return false;
        }
    }

    let freq1 = new Map<string, number>();
    let freq2 = new Map<string, number>();

    for (let i = 0; i < word1.length; i++)  {
        freq1.set(word1[i], (freq1.get(word1[i]) || 0) + 1);
        freq2.set(word2[i], (freq2.get(word2[i]) || 0) + 1);
    }

    let values1 = [...freq1.values()].sort((a, b) => a - b);
    let values2 = [...freq2.values()].sort((a, b) => a - b);

    return (values1.join() === values2.join());
};
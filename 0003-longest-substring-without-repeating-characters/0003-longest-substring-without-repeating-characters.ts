function lengthOfLongestSubstring(s: string): number {
    let windowHash = new Map<string, number>();

    let max: number = 0;

    let start: number = 0;
    let end: number = start;

    while (end < s.length)  {
        if (windowHash.get(s[end])) {
            windowHash.set(s[start], windowHash.get(s[start]) - 1);
            start++;
        } else {
            windowHash.set(s[end], (windowHash.get(s[end]) || 0) + 1);
            end++;
        }

        max = Math.max(max, end - start);
    }

    return max;
};
function characterReplacement(s: string, k: number): number {
    let max: number = 0;

    let hashMap = new Map<string, number>();
    let maxFrequency: number = 0;

    // create the hash map of every english alphabet and assign it to 0
    const characters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U',
        'V', 'W', 'X', 'Y', 'Z'
    ];
    for (let i = 0; i < 26; i++) {
        hashMap.set(characters[i], 0);
    }

    let left: number = 0;

    for (let right = left; right < s.length; right++) {
        hashMap.set(s[right], (hashMap.get(s[right]) | 0) + 1);
        maxFrequency = Math.max(maxFrequency, hashMap.get(s[right]));
        if (right - left + 1 - maxFrequency <= k) {
            max = Math.max(max, right - left + 1);
        } else {
            hashMap.set(s[left], hashMap.get(s[left]) - 1);
            left++;
        }
    }

    return max;
};
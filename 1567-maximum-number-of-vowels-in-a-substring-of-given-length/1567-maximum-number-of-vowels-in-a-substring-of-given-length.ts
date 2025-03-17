function maxVowels(s: string, k: number): number {
    let vowels = new Set<string>(['a', 'e', 'i', 'o', 'u']);

    let leftPtr: number = 0;
    let rightPtr: number = 0;

    let max: number = 0;
    let counter: number = 0;

    for (rightPtr = 0; rightPtr < s.length; rightPtr++) {
        if (vowels.has(s[rightPtr]))    {
            counter++;
        }    
        if (rightPtr - leftPtr + 1 == k)    {
            max = Math.max(max, counter);
            if (vowels.has(s[leftPtr])) {
                counter--;
            }
            leftPtr++;
        }
    }

    return max;
};
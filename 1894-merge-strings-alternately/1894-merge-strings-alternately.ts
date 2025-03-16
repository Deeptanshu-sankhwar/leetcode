function mergeAlternately(word1: string, word2: string): string {
    let result: string = "";
    let maxLen: number = Math.max(word1.length, word2.length);

    for (let i = 0; i < (maxLen); i++) {
        if (i < word1.length)   result += word1[i];
        if (i < word2.length)   result += word2[i];
    }
    return result;
};
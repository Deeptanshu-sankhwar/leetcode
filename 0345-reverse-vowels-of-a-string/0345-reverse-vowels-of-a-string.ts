function reverseVowels(s: string): string {
    let vowels: string[] = [];

    for (let i = 0; i < s.length; i++)  {
        if (s[i].toLowerCase() == 'a' || s[i].toLowerCase() == 'e' || s[i].toLowerCase() == 'i' || s[i].toLowerCase() == 'o' || s[i].toLowerCase() == 'u')    {
            vowels.push(s[i]);
        }
    }

    let result: string[] = [...s];

    let k: number = vowels.length - 1;
    for (let i = 0; i < s.length; i++)  {
        if (s[i].toLowerCase() == 'a' || s[i].toLowerCase() == 'e' || s[i].toLowerCase() == 'i' || s[i].toLowerCase() == 'o' || s[i].toLowerCase() == 'u')    {
            result[i] = vowels[k--];
        }    
    }

    return result.join("");
};
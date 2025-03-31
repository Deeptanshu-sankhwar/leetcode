function isPalindrome(s: string): boolean {
    s = s.toLowerCase();

    const alphanumeric: string[] = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];

    let s1 = s.split("");

    s1 = s1.filter((e) => alphanumeric.includes(e))

    let s2 = [...s1];

    if (s1.reverse().join("") === s2.join(""))  {
        return true
    }

    return false;
};
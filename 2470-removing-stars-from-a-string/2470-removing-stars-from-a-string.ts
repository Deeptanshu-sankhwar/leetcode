function removeStars(s: string): string {
    // array push, pop for stack LIFO
    let stack: string[] = [];

    const length = s.length

    for (let i = 0; i < length; i++)    {
        if (s[i] !== "*") {
            stack.push(s[i]);
        } else {
            stack.pop();
        }
    }

    return stack.join("");
};
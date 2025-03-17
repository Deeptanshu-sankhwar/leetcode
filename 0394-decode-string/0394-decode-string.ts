function decodeString(s: string): string {
    let stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "]") {
            stack.push(s[i]); 
        } else {
            // Extract substring inside [ ]
            let substr = "";
            while (stack.length > 0 && stack[stack.length - 1] !== "[") {
                substr = stack.pop()! + substr; 
            }
            stack.pop();

            // Extract the repeat count (number before [)
            let num = "";
            while (stack.length > 0 && /\d/.test(stack[stack.length - 1])) {
                num = stack.pop()! + num;
            }

            // Repeat substring and push back to stack
            let repeatedStr = substr.repeat(parseInt(num));
            stack.push(repeatedStr);
        }
    }

    return stack.join("");
}
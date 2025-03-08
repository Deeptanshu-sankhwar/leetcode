function compress(chars: string[]): number {
    let write = 0;
    let read = 0;

    while (read < chars.length) {
        let char = chars[read];
        let count = 0;

        while (read < chars.length && chars[read] === char) {
            read++;
            count++;
        }

        chars[write++] = char;

        if (count > 1) {
            for (let digit of count.toString()) {
                chars[write++] = digit;
            }
        }
    }

    return write;
}
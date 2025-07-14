function lengthLongestPath(input: string): number {
    const lines = input.split('\n');
    const pathStack: number[] = [];
    let maxLen = 0;

    for (const line of lines) {
        const depth = line.lastIndexOf('\t') + 1;
        const name = line.slice(depth);

        // Trim stack to current depth
        pathStack.length = depth;

        const currLen = (pathStack[depth - 1] || 0) + name.length + (depth > 0 ? 1 : 0);
        pathStack[depth] = currLen;

        if (name.includes('.')) {
            maxLen = Math.max(maxLen, currLen);
        }
    }

    return maxLen;
}

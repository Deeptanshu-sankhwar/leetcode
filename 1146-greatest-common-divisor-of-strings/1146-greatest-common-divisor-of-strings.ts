function isDivisor(x: string, y: string): boolean {
    if (x.length % y.length !== 0) return false;
    return x === y.repeat(x.length / y.length);
}

function gcdOfStrings(str1: string, str2: string): string {
    let minStr: string = (str1.length > str2.length) ? str2 : str1;
    let window: number = minStr.length;

    while (window >= 0) {
        if (str1.length % window == 0 && str2.length % window == 0) {
            let candidate: string = minStr.substring(0, window)
            if (isDivisor(str1, candidate) && isDivisor(str2, candidate)) {
                return candidate;
            }
        }
        window--;
    }
    return "";
};
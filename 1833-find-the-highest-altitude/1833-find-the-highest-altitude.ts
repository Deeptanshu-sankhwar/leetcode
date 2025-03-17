function largestAltitude(gain: number[]): number {
    let result: number = 0;
    let max: number = 0;

    for (let i = 0; i < gain.length; i++)   {
        result += gain[i];
        max = Math.max(max, result)
    }

    return max;
};
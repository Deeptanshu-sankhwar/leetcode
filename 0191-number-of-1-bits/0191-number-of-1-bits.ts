function hammingWeight(n: number): number {
    let counter: number = 0;

    while (n > 0)   {
        let bit: number = n % 2;
        if (bit == 1)   {
            counter++;
        }
        n = Math.floor(n / 2);
    }
    

    return counter;
};
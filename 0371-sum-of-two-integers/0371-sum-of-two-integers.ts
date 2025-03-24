function getSum(a: number, b: number): number {
    // use xor and and
    while (b != 0)  {
        let carry: number = (a & b) << 1; // shift it by one place
        a = a ^ b;
        b = carry;
    }    

    return a;
};
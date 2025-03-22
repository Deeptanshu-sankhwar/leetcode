function originalDigits(s: string): string {
    // zero -> z -> 0
    // one -> hash(o) - n(0) - n(2) - n(4)
    // two -> w -> 2
    // three -> hash(r) - n(0) - n(4)
    // four -> u -> 4
    // five -> hash(f) - n(4)
    // six -> x -> 6
    // seven -> hash(s) - n(6)
    // eight -> g -> 8
    // nine -> h(i) - n(8) - n(6) - n(5)

    // no of occurances of 0 = number of occurances of z & so on

    let hash = new Map<string, number>();
    let result: string = "";

    // construct the hash function
    for (let i = 0; i < s.length; i++) {
        hash.set(s[i], ((hash.get(s[i]) | 0) + 1));
    }

    let count: number[] = new Array(10).fill(0);

    count[0] = hash.get('z') | 0;
    count[2] = hash.get('w') | 0;
    count[4] = hash.get('u') | 0;
    count[6] = hash.get('x') | 0;
    count[8] = hash.get('g') | 0;
    count[1] = hash.get('o') - count[0] - count[2] - count[4] | 0;
    count[3] = hash.get('r') - count[0] - count[4] | 0;
    count[5] = hash.get('f') - count[4] | 0;
    count[7] = hash.get('s') - count[6] | 0;
    count[9] = hash.get('i') - count[8] - count[6] - count[5] | 0;

    for (let i = 0; i <= 9; i++)    {
        result += i.toString().repeat(count[i]);
    }

    return result;
};
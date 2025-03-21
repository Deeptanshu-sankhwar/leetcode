function countHours(piles: number[], k: number): number {
    let result: number = 0;

    for (let i = 0; i < piles.length; i++)  {
        result += Math.ceil(piles[i] / k);
    }

    return result;
}

function minEatingSpeed(piles: number[], h: number): number {
    // k will be between 1 and max(piles)
    let low: number = 1;
    let high: number = Math.max(...piles);

    while (low <= high) {
        let mid: number = Math.floor((low + high) / 2);

        if (countHours(piles, mid) > h) {
            low = mid + 1;
        } else  {   // solution(k) <= h
            high = mid - 1;
        }
    }
    return low;
};
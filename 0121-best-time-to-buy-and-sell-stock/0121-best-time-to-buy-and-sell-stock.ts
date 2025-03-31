function maxProfit(prices: number[]): number {
    let left: number = 0;
    let right: number = left + 1;

    let max: number = 0;

    while (left <= right && right < prices.length) {
        max = Math.max(max, prices[right] - prices[left]);
        
        if (prices[right] < prices[left]) {
            left++;
        } else {
            right++;
        }
    }

    return max;
};
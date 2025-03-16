function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let maxCandy: number = Math.max(...candies);

    let results: boolean[] = [];

    for (let i = 0; i < candies.length; i++)    {
        if ((candies[i] - maxCandy + extraCandies) >= 0)    {
            results.push(true);
        } else {
            results.push(false);
        }
    }
    return results;
};
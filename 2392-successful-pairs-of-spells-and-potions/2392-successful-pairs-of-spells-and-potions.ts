function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    // sort the potions array
    potions.sort((a, b) => a - b);
    let potionsLength: number = potions.length;

    let results: number[] = [];

    // loop over spells array
    for (let i = 0; i < spells.length; i++) {
        let index = potionsLength;

        let low = 0;
        let high = potionsLength - 1;

        while (low <= high) {
            let midVal = potions[Math.floor((low + high) / 2)] * spells[i];
            let mid = Math.floor((low + high) / 2);

            if (midVal > success)  {
                high = mid - 1;
                index = mid;
            } else if (midVal < success)   {
                low = mid + 1;
            } else {
                index = mid;
                high = mid - 1;
            }
        }
        results.push(potionsLength - index);
    }

    return results;
};
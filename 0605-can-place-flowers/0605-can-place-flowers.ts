function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    // we need either 0 triplet in the middle, or 0 pair on the sides
    let length: number = flowerbed.length;

    for (let i = 0; i < length; i++)    {
        if (
            flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) &&
            (i === length - 1 || flowerbed[i + 1] === 0)
        ) {
            flowerbed[i] = 1; 
            n--;
        }
    }

    return (n <= 0);
};
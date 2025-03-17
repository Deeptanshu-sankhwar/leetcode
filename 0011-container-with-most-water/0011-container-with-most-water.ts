function maxArea(height: number[]): number {
    let leftPtr: number = 0;
    let rightPtr: number = height.length - 1;

    let maxArea: number = 0;

    while (rightPtr > leftPtr)    {
        let area: number = (rightPtr - leftPtr) * Math.min(height[leftPtr], height[rightPtr]);
        
        if (area > maxArea) {
            maxArea = area;
        }

        if (height[leftPtr] < height[rightPtr]) {
            leftPtr++;
        } else {
            rightPtr--;
        }
    }

    return maxArea;
};
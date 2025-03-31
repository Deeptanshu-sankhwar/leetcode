function twoSum(numbers: number[], target: number): number[] {
    let start: number = 0;
    let end: number = numbers.length - 1;

    while (start < end) {
        if (numbers[start] + numbers[end] === target)   {
            return [start + 1, end + 1]
        } else if (numbers[start] + numbers[end] < target)  {
            start++;
        } else {
            end--;
        }
    }

    return [-1, -1]
};
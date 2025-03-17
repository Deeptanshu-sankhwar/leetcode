function pivotIndex(nums: number[]): number {
    // index where prefix[i] = postfix[i]
    let prefix: number[] = [...nums];
    let postfix: number[] = [...nums];

    let prefixSum: number = 0;
    let postfixSum: number = 0;

    // prefix run
    for (let i = 0; i < nums.length; i++)   {
        prefixSum += nums[i];
        prefix[i] = prefixSum;
    }

    // postfix run
    for (let i = nums.length - 1; i >= 0; i--)   {
        postfixSum += nums[i];
        postfix[i] = postfixSum;
    }

    // final run
    for (let i = 0; i < nums.length; i++)   {
        if (prefix[i] == postfix[i])    {
            return i;
        }
    }

    return -1;
};
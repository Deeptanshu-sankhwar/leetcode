function productExceptSelf(nums: number[]): number[] {
    let prefix: number[] = [];
    let postfix: number[] = [];

    let prefixProduct: number = 1;
    let postfixProduct: number = 1;

    for (let i = 0; i < nums.length; i++)   {
        prefix[i] = prefixProduct * nums[i]
        prefixProduct = prefix[i];
    }

    for (let i = nums.length - 1; i >= 0; i--)   {
        postfix[i] = postfixProduct * nums[i]
        postfixProduct = postfix[i];
    }

    let result: number[] = [];

    for (let i = 0; i < nums.length; i++)   {
        if (i == 0) {
            result.push(1 * postfix[i+1]);
        } else if (i == nums.length - 1)    {
            result.push(prefix[i - 1] * 1);
        } else {
            result.push(prefix[i - 1] * postfix[i + 1]);
        }
    }

    return result;
};
function productExceptSelf(nums: number[]): number[] {
    // make 2 runs -> prefix, postfix
    let prefix: number[] = [...nums];
    let postfix: number[] = [...nums];

    let prefixProduct: number = 1;
    let postfixProduct: number = 1;

    // prefix run
    for (let i = 0; i < nums.length; i++)   {
        prefixProduct *= prefix[i];
        prefix[i] = prefixProduct; 
    }

    // postfix run
    for (let i = nums.length - 1; i >= 0; i--)   {
        postfixProduct *= postfix[i];
        postfix[i] = postfixProduct; 
    }

    let results: number[] = [];
    // final run to multiply postfix & prefix
    for (let i = 0; i < nums.length; i++)   {
        if (i == 0) {
            results.push(1 * postfix[i + 1]);
        } else if (i == nums.length - 1)    {
            results.push(prefix[i - 1] * 1);
        } else {
            results.push(prefix[i - 1] * postfix[i + 1]);
        }
    }

    return results;
};
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let left: number = 1;
    let right: number = n;

    while (left <= right)   {
        let mid: number = Math.floor((left + right)/2);

        if (guess(mid) == -1)    {
            right = mid - 1;
        } else if (guess(mid) == 1) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
};
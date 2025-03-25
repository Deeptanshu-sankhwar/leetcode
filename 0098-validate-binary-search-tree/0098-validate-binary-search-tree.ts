/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function checkBST(root: TreeNode | null, min: number, max: number): boolean {
    if (!root) {
        return true;
    }

    if (root && (root.val <= min || root.val >= max))   {
        return false;
    }  

    return checkBST(root.left, min, root.val) && checkBST(root.right, root.val, max);
}

function isValidBST(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }

    let min: number = -Infinity;
    let max: number = Infinity;

    return checkBST(root, min, max);
};
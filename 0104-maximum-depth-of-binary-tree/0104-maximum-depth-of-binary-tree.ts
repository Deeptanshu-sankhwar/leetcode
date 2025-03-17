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

function maxDepth(root: TreeNode | null): number {
    let current: TreeNode = root;

    if (!current)   {
        return 0;
    }

    if (!current.left && !current.right)    {
        return 1;
    }

    return 1 + Math.max(maxDepth(current.left), maxDepth(current.right))
};
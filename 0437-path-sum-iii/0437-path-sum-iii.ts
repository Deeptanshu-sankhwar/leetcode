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

// Count paths starting from the current node
function findPaths(root: TreeNode | null, targetSum: number): number {
    if (!root) return 0;

    let count = 0;
    if (root.val === targetSum) {
        count += 1;
    }

    count += findPaths(root.left, targetSum - root.val);
    count += findPaths(root.right, targetSum - root.val);

    return count;
}

function pathSum(root: TreeNode | null, targetSum: number): number {
    if (!root)  {
        return 0;
    }

    return findPaths(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
};
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

function zigzag(root: TreeNode | null, direction: string, depth: number): number {
    if (!root)  {
        return depth;
    }

    if (direction === "right")  {
        return Math.max(depth, zigzag(root.right, "left", depth + 1), zigzag(root.left, "right", 0));
    }

    if (direction === "left")  {
        return Math.max(depth, zigzag(root.left, "right", depth + 1), zigzag(root.right, "left", 0));
    }

    return depth;
}

function longestZigZag(root: TreeNode | null): number {
    if (!root)  {
        return 0;
    }

    return Math.max(zigzag(root.left, "right", 0), zigzag(root.right, "left", 0));
};
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


function dfs (node: TreeNode, rootVal: number): number {
    if (!node)  {
        return 0;
    }

    if (node.val >= rootVal) {
        rootVal = node.val;
        return 1 + dfs(node.left, rootVal) + dfs(node.right, rootVal);
    } else {
        return dfs(node.left, rootVal) + dfs(node.right, rootVal);
    }
}

function goodNodes(root: TreeNode | null): number {
    if (!root)  {
        return 0;
    }

    if (!root.left && !root.right)  {
        return 1;
    }

    return 1 + dfs(root.left, root.val) + dfs(root.right, root.val);
};
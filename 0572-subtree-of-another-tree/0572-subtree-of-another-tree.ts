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

function isSameTree(root1: TreeNode | null, root2: TreeNode | null): boolean {
    if (!root1 && !root2)   {
        return true;
    }

    if (!root1 || !root2 || (root1.val !== root2.val))    {
        return false;
    }

    return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!subRoot)   {
        return true;
    }
    
    if (!root)  {
        return false;
    }

    if (isSameTree(root, subRoot))  {
        return true;
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
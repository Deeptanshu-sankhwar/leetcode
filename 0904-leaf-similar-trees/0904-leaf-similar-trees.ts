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

function traverse(root: TreeNode | null): string    {
    if (!root)  {
        return ''
    }

    if (!root.left && !root.right)  {
        return root.val + ',';
    }

    return traverse(root.left) + traverse(root.right);
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    let seq1: string = traverse(root1);
    let seq2: string = traverse(root2);

    if (seq1 === seq2)  {
        return true;
    }  
    return false;
};
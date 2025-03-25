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

function kthSmallest(root: TreeNode | null, k: number): number {
    // perform inorder traversal and return kth element in array

    let result: number[] = [];

    function inOrderTraversal(root: TreeNode | null): void  {
        if (!root)  {
            return;
        }
        
        inOrderTraversal(root.left);
        result.push(root.val);
        inOrderTraversal(root.right);
    }

    inOrderTraversal(root);

    return result[k - 1];
};
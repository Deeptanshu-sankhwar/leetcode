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
// basic dfs implementation
function levelOrder(root: TreeNode | null): number[][] {
    let result: number[][] = [];

    if (!root) return result;

    let queue: TreeNode[] = [root];

    while (queue.length > 0)    {
        let currentLevel: number[] = [];
        let levelSize: number = queue.length;

        for (let i = 0; i < levelSize; i++)  {
            const node: TreeNode = queue.shift();
            currentLevel.push(node.val);

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.push(currentLevel);
    }

    return result;
};
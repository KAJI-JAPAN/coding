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

function levelOrder(root: TreeNode | null): number[][] {
	if (root === null) return []
	let res: number[][]  = []
	let q: TreeNode[] = [root]

	while(q.length > 0) {
		const levelSize: number  = q.length
		const level: number[] = []

		for(let i=0; i < levelSize; i++) {
			const node = q.shift()
			level.push(node.val)

			if(node.left) q.push(node.left)
			if(node.right) q.push(node.right)
		}

		res.push(level)
	}

	return res
};

// 完全二叉树中节点个数，时间复杂度低于O(n)
// 遍历二叉树左节点，找到二叉树的高度h
// 找到二叉树右节点下的最左节点所在的层数，如果和高度相同，那么
// 意味着二叉树左树是满的左树的节点个数为2^h - 1
// 然后递归右子树 
// 如果右子树下最左节点的层数小于高度，那么意味着二叉树右树是满的
// 可以使用公式求得节点个数
// 然后递归左子树

// console.log(1 << 3)


class BinaryNode {
    val: number
    left: BinaryNode
    right: BinaryNode

    constructor(val) {
        this.val = val
    }

    nodeNum(head: BinaryNode): number {
        if (!head) return 0

        return this.bs(head, 1, this.mostLeftLevel(head, 1))
    }

    bs(node: BinaryNode, l: number, h: number): number {
        if (l === h) {
            return 1
        }

        // 如果右树的高度等于二叉树的高度，说明左树是满二叉树
        if (this.mostLeftLevel(node.right, l + 1) === h) {
            return (1 << (h - l)) + this.bs(node.right, l + 1, h)
        } else {
            return (1 << (h - l - 1)) + this.bs(node.left, l + 1, h)
        }
    }

    mostLeftLevel(node: BinaryNode, l: number) {
        while(node) {
            l++
            node = node.left
        }
        return l - 1
    }
}
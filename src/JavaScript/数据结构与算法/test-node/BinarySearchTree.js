/**树   每个节点都有一个父节点(除了顶部的第一个节点)以及零个或多个子节点
 *
 * 二叉搜索树
 *
 */
function BinarySearch() {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    var root = null
    // 向树中插入一个新的键
    this.insert = function (key) {
        var insertNode = function (node, newNode) {
            if (newNode.key < node.key) {
                if (node.left === null) {
                    node.left = newNode
                } else {
                    insertNode(node.left, newNode)
                }
            } else {
                if (node.right === null) {
                    node.right = newNode
                } else {
                    insertNode(node.right, newNode)
                }
            }
        }
        var newNode = new Node(key)

        if (root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }
    // 在树中查找一个键，如果节点存在，则返回true;如果不存在，则返回false
    this.search = function (key) {

    }
    // 通过中序遍历方式遍历所有节点
    this.inOrderTraverse = function () {

    }
    // 通过先序遍历方式遍历所有节点
    this.preOrderTraverse = function () {

    }
    // 通过后序遍历方式遍历所有节点
    this.postOrderTraverse = function () {

    }
    // 返回树中最小的键/值
    this.min = function () {

    }
    // 返回树中最大的键/值
    this.max = function () {

    }
    // 从树种移除某个键
    this.remove = function (key) {

    }
}
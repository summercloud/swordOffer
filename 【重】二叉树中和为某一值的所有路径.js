/* 
输入一颗二叉树的根节点和一个整数，
按字典序打印出二叉树中结点值的和为输入整数的所有路径。
路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
let path, pathArray;
function isSum(node, exp){
    path.push(node.val);
    if(node.val == exp && node.left == null && node.right == null){
        pathArray.push(path.slice());
    } else {
        if(node.left != null) isSum(node.left, exp-node.val)
        if(node.right != null) isSum(node.right, exp-node.val)
    }
    path.pop();
}
function FindPath(root, expectNumber)
{
    path = [];
    pathArray = [];
    if(root == null) return [];
    isSum(root, expectNumber);
    return pathArray;
}
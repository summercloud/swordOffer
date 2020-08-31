/* 
题目描述: 
输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
*/
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSub(root, sub){
    if( root.val != sub.val ){
        return false;
    }
    let left = false;
    if(root.left && sub.left) {
        left = isSub(root.left, sub.left);
    } else if (!sub.left){
        left = true;
    }
    let right = false;
    if(root.right && sub.right) {
        right = isSub(root.right, sub.right);
    } else if (!sub.right){
        right = true;
    }
    return left && right; 
}
function HasSubtree(pRoot1, pRoot2)
{
    if(!pRoot1 || !pRoot2){
        return false;
    } 
    if(isSub(pRoot1,pRoot2)){
        return true;
    }
    return HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2);
}
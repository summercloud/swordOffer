/* 
请实现一个函数，用来判断一棵二叉树是不是对称的。
注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。 
*/
function isSymmetrical(pRoot)
{
    let same = true;
    function isSame(left, right)
    {
        if((!left && right ) || (left && !right)) {
            same=false;
            return;
        }
        if(!left && !right) return;
        if(left.val != right.val) {
            same=false;
            return;
        }
        isSame(left.left, right.right)
        isSame(left.right, right.left);

    }
    if(!pRoot) return true;
    isSame(pRoot.left, pRoot.right);
    return same;
}
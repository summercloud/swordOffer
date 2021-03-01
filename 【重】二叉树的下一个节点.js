/* 
给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。
注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。

解析： 
如果当前节点有右子树，则返回以右子树为树的第一个中序便利的节点；
如果当前节点没有右子树，则返回第一个左侧父节点；
否则返回null；
*/
function GetNext(pNode)
{
    function getFirst (node) {
        if(node.left)  return getFirst(node.left);
        else return node;
    }
    function getLeftNext (node) {
        if(!node.next) return null;
        if(node.next.left == node){
            return node.next;
        } else {
            return getLeftNext(node.next);
        }
    }
    if(pNode.right) {
        return getFirst(pNode.right);
    } else if(pNode.next) {
        return getLeftNext(pNode)
    } else {
        return null
    }
}
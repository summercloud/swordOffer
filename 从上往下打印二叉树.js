/* 
从上往下打印出二叉树的每个节点，同层节点从左至右打印。
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    let arr = [root];
    let currentNode = 0;
    let resArr = [];
    while(arr[currentNode]){
        resArr.push(arr[currentNode].val);
        if(arr[currentNode].left){
            arr.push(arr[currentNode].left)
        }
        if(arr[currentNode].right){
            arr.push(arr[currentNode].right)
        }
        currentNode++;
    }
    return resArr;
}
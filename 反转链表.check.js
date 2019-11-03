/* 
题目描述：
输入一个链表，反转链表后，输出新链表的表头。
*/
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    if(!pHead){
        return false;
    }
    let pre = null,
        next = null;
        current = pHead;
    while(current){
        next = current.next;
        current.next = pre;
        
        pre = current;
        current = next;
    }
    return pre;
}
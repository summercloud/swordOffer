/* 
题目描述
在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 
例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
*/

function deleteDuplication(pHead)
{
    if(!pHead || !pHead.next) return pHead;
    let pre = {};
    pre.next = pHead;
    let init = pre;
    let current = pHead, last = current.next;
    while(last){
        if(current.val === last.val){
            while(last && current.val == last.val){
                last = last.next;
                current.next = last;
            }
            last = last ? last.next : null;
            current = current.next;
            pre.next = current;
        } else {
            pre = pre.next;
            current = current.next;
            last = last.next;
        } 
    }
    return init.next;
}
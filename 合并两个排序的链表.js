/* 
题目描述:

输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
*/
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    if(!pHead1 && !pHead2){
        return false;
    }
    if(!pHead1 && pHead2){
        return pHead2;
    }
    if(pHead1 && !pHead2){
        return pHead1;
    }
    let head;
    if(pHead1.val <= pHead2.val) {
        head = pHead1;
        pHead1 = pHead1.next;
    }else {
        head = pHead2;
        pHead2 = pHead2.next;
    }
    let p = head;
    while(pHead1 && pHead2){
        if(pHead1.val <= pHead2.val){
            p.next = pHead1;
            pHead1 = pHead1.next;
            p = p.next;
        }else{
            p.next = pHead2;
            pHead2 = pHead2.next;
            p = p.next;
        }
    }
    if(pHead1){
        p.next = pHead1;
    }
    if(pHead2){
        p.next = pHead2;
    }
    return head;
}
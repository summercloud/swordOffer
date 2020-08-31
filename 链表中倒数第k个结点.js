/* 
题目描述: 
输入一个链表，输出该链表中倒数第k个结点。

两个指针，相隔k个节点，当第一个指针为尾的时候，第一个指针为第k个
*/
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
/* 方法一 */
/* function FindKthToTail(head, k)
{
    let nodeList = [];
    while(head){
        let temp = head;
        nodeList.push(temp);
        head = head.next;
    }
    const length = nodeList.length;
    return nodeList[length-k];
} */
/* 方法二 */
function FindKthToTail(head, k)
{
    let p1 = head;
    let p2;
    let temp = 1;
    while(p1.next){
        temp++;
        if(temp == k) {
            p2=head;
        }
        if(temp > k) {
            p2 = p2.next
        }
        p1 = p1.next;
    }
    return p2;
}
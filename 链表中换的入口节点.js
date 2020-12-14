/* 
题目描述:
给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。

解：
红蓝指针，红指针每次走一步，蓝指针每次走两步
红蓝指针相遇的时候，蓝指针比红指针多一圈
此时红指针为环的长度，链表总长-红指针步数 = 环入口
*/
function EntryNodeOfLoop(pHead)
{
    let p1 = pHead, p2 = pHead;
    let count = 0;
    let loopCount = 0;

    p1.visit = true;
    p1 = p1.next;
    p2 = p2.next ? p2.next.next : undefined;
    count++;

    while(p1 && p2 && p1 != p2){
        p1.visit = true;
        p1 = p1.next;
        p2 = p2.next ? p2.next.next : undefined;
        count++;
    }
    if(!p1 || !p2){
        return null;
    }
    loopCount = count;
    while(p1 && !p1.visit){
        p1.visit = true;
        p1 = p1.next;
        count++
    }
    let entranceCount = count - loopCount;
    let p = pHead;
    while(entranceCount){
        p = p.next;
        entranceCount --;
    }
    return p;
}

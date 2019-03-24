/* 
题目描述：

用两个栈来实现一个队列，
完成队列的Push和Pop操作。 
队列中的元素为int类型。
*/
let stack1 = [];
let stack2 = []; 
function push(node)
{
    stack1.push(node);
}
function pop()
{
    while(stack1.length > 0){
        stack2.push(stack1.pop());
    }
    let re = stack2.pop();
    while (stack2.length > 0) {
        stack1.push(stack2.pop());
    }
    return re;
}
/* 
题目描述: 
输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

*补充知识：负数的补码则是将其对应正数按位取反再加1
*/
function NumberOf1(n)
{
    let count = 0;
    while(n){
        if(n & 1 == 1){
            count++;
        }
        n>>>=1;
    }
    return count;
}

/* 
题目描述：
大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
n<=39 
*/
function Fibonacci(n)
{
    if(n==0) return 0;
    if(n==1) return 1;
    let f = [0, 1];
    let i = 2;
    while(i <= n ){
        f[i] = f[i-2] + f[i-1];
        i++;
    }
    return f[n];
}
/* 
题目描述
我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，
总共有多少种方法？

n种覆盖法 = n+1种覆盖法+一块矩形 + n+2种覆盖法+2竖状块矩形
*/
function rectCover(number)
{
    let dp = [0, 1, 2];
    let i = 2;
    while(i <= number ){
        dp[i] = dp[i-2] + dp[i-1];
        i++;
    }
    return dp[number];
}
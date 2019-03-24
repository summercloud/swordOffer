/* 
题目描述：
一只青蛙一次可以跳上1级台阶，
也可以跳上2级。
求该青蛙跳上一个n级的台阶总共有多少种跳法
（先后次序不同算不同的结果） */
function jumpFloor(number)
{
    let dp = [0, 1, 2];
    var i = 3;
    while(i<=number){
        dp[i] = dp[i-1] + dp[i-2];
        i++;
    }
    return dp[number];
}
/* 
题目描述
一只青蛙一次可以跳上1级台阶，
也可以跳上2级……它也可以跳上n级。
求该青蛙跳上一个n级的台阶总共有多少种跳法。

解法：n级台阶的跳法个数 = 从n级之前的所有台阶直接跳到n级 + 1
*/
function jumpFloorII(number)
{
    let dp = [0, 1, 2];
    var i = 3;
    while(i<=number){
        let temp = 0;
        for(let n=1; n<i; n++){
            temp = temp + dp[n];
        }
        dp[i] = temp+1;
        i++;
    }
    return dp[number];
}
/* 使用reduce函数 */
getSum = (total, num) => total+num;
function jumpFloorII(number)
{
    let dp = [0, 1, 2];
    var i = 3;
    while(i<=number){
        let temp = 0;
        dp[i] = dp.reduce(getSum) + 1;
        i++;
    }
    return dp[number];
}
/* 
求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？
为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,但是对于后面问题他就没辙了。
ACMer希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。

解：
将数字分为高位、第i位、低位，high cur low三位，digit表示10的i次方，i从0开始
当 cur < 1时 次数 = high*digit
当 cur = 1时 次数 = high*digit + low + 1
当 cur > 1时 次数 = (high+1) * digit
*/
function NumberOf1Between1AndN_Solution(n)
{
    let digit = 1, cur = n%10;
    let high = parseInt(n/10);
    let low = 0;
    let count = 0;
    while(high!=0 || cur!=0){
        if(cur < 1){
            count = count + (high * digit);
        } else if (cur == 1){
            count = count + (high*digit + low + 1)
        } else {
            count = count + (high+1)*digit
        }
        digit = digit * 10;
        cur = parseInt((n%(digit*10))/(digit));
        high = parseInt(n/(digit*10));
        low = parseInt(n%digit);
    }
    return count;
}
/*
    把只包含质因子2、3和5的数称作丑数（Ugly Number）。
    例如6、8都是丑数，但14不是，因为它包含质因子7。 
    习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。

    解法：初始化一个uglyList=[1]的数组，定义三个指针分别代表乘2，3，5，每乘一次对应的指针前移一位


*/
function GetUglyNumber_Solution(index)
{
    if(!index) return 0;
    let uglyList = [1];
    let p2 = 0, p3 = 0, p5 = 0;
    let currentIndex = 0;
    let temp = null;
    while (currentIndex != index-1) {
        temp = Math.min( uglyList[p2] * 2, uglyList[p3] * 3, uglyList[p5] * 5);
        uglyList.push(temp);
        currentIndex++;
        if(temp % 2 === 0) p2++;
        if(temp % 3 === 0) p3++;
        if(temp % 5 === 0) p5++;
    }
    return uglyList[currentIndex]
}
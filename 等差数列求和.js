/* 
求1+2+3+...+n，
要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
*/
function Sum_Solution(n)
{
    let res = Math.pow(n, 2) + n;
    return res>>1;
}
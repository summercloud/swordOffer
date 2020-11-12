/* 
写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。
*/

//正确解法
function Add(num1, num2)
{
    while(num2){
        let res = (num1 ^ num2) & 0xffffffff;
        let next = ((num1 & num2)<<1) & 0xffffffff;
        num1 = res;
        num2 = next;
    }
    return num1;
}

//解法复杂，无法进行负数相加
function Add(num1, num2)
{
    let str1 = num1.toString(2).split('').reverse().join(''), 
        str2 = num2.toString(2).split('').reverse().join('');
    let next = 0, i=0;
    let sum = '';
    while(i<=str1.length || i<=str2.length){
        if(!str1[i]) str1[i] = 0;
        if(!str2[i]) str2[i] = 0;
        let temp = str1[i] ^ str2[i] ^ next;
        sum = sum.concat(temp);
        let a = str1[i],
            b=str2[i], 
            c=next;
        next = ((a|b)&c) | ((a|c)&b) | ((b|c)&a);
        i++;
    }
    sum = sum.concat(next);
    let res = sum.split('').reverse().join('');
    return parseInt(res, 2);  
}
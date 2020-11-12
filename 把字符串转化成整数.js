/* 
将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0

//输入描述:
输入一个字符串,包括数字字母符号,可以为空
//返回值描述:
如果是合法的数值表达则返回该数字，否则返回0
*/
function StrToInt(str)
{
    if(!str) return 0;
    let reg = /[\+\-0-9]/;
    if(!reg.test(str[0])) return 0;

    function getNumber(s){
        let dic = {
            '0': 0,
            '1': 1,
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9
        }
        return dic[s]
    }

    let isNumber = true;
    let f = 1;
    if(str[0] == '-' || str[0] == '+' ) {
        f = str[0] == '-' ? -1 : 1; 
        str = str.substring(1);
    };
    let count = 1;
    let res = 0;
    for(let i=str.length-1 ; i>=0; i--){
        if(!reg.test(str[i])){
            isNumber = false;
            break;
        }
        let temp = getNumber(str[i]);
        res = res + temp*count;
        count = count*10;
    }
    if(!isNumber) return 0;
    return res*f;
}
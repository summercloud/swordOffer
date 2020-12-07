/* 
请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 
但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。 
*/
function isNumeric(s)
{
    function isInt(str){
        if(!str) return true;
        let match = str.match(/[0-9]+/);
        return str == match[0];
    }
    function isNumber(str){
        let a = str.split('.');
        if(a.length > 2) return false;
        if(a.length == 1) return isInt(a[0]);
        return (isInt(a[0]) && isInt(a[1]));
    }
    if(['-', '+'].indexOf(s[0]) != -1){
        s = s.substring(1);
    }
    let arr = s.split(/[eE]/);
    if(arr.length == 1) return isNumber(arr[0]);
    if(arr.length == 2) {
        if(['-', '+'].indexOf(arr[1][0]) != -1){
            arr[1] = arr[1].substring(1);
        }
        return (arr[1] && isNumber(arr[0]) && isInt(arr[1]));
    }
    return false;
}
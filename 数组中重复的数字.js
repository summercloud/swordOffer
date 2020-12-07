/* 
在一个长度为n的数组里的所有数字都在0到n-1的范围内。
 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。
 请找出数组中第一个重复的数字。 
 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。
返回描述：
如果数组中有重复的数字，函数返回true，否则返回false。
如果数组中有重复的数字，把重复的数字放到参数duplication[0]中。（ps:duplication已经初始化，可以直接赋值使用。）
*/
function duplicate(numbers, duplication)
{
    let length = numbers.length;
    let obj = {}, res = false;
    for(let i=0; i<length; i++){
        obj[numbers[i]] = obj[numbers[i]] ? ++obj[numbers[i]] : 1;
        if(obj[numbers[i]] > 1){
            duplication[0] = numbers[i];
            res = true;
            break;
        }
    }
    return res;
}
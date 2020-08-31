/* 
题目描述：
输入一个整数数组，
实现一个函数来调整该数组中数字的顺序，
使得所有的奇数位于数组的前半部分，
所有的偶数位于数组的后半部分，
并保证奇数和奇数，
偶数和偶数之间的相对位置不变。

解法：指针记录当前访问位，若为偶数则splice出并压至数组末尾，若基数则下一位，直至数据数据全部被处理过
*/
function reOrderArray(array)
{
    let n = array.length;
    let index = 0;
    let visited = 0;
    while(visited < n){
        visited++;
        if((array[index] & 1) == 0){
            array.push(array.splice(index, 1)[0]);
            continue;
        }
        index++;
    }
    return array;
}
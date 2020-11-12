/* 
输入一个递增排序的数组和一个数字S，
在数组中查找两个数，
使得他们的和正好是S，
如果有多对数字的和等于S，
输出两个数的乘积最小的。
*/
function FindNumbersWithSum(array, sum)
{
    let i = 0, j = array.length-1;
    let ixj = null, resi = null, resj = null;
    while ( i < j ) {
        if(array[i] + array[j] == sum){
            if(!ixj || ixj>(array[i]*array[j])){
                ixj = array[i]*array[j];
                resi = array[i];
                resj = array[j];
            }
            j--;
        } else if(array[i] + array[j] > sum){
            j--;
        } else {
            i++;
        }
    }
    if(resi){
        return [resi, resj];
    }
    return [];
}
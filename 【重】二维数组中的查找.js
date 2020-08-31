/* 题目描述: 
在一个二维数组中（每个一维数组的长度相同），
每一行都按照从左到右递增的顺序排序，
每一列都按照从上到下递增的顺序排序。
请完成一个函数，
输入这样的一个二维数组和一个整数，
判断数组中是否含有该整数。 */
function Find(target, array){
    function Find(target, array){
        let n = 0;
        let m = array.length-1;
        while(n < array[0].length && m >= 0){
            if(target > array[m][n]){
                n++;
            }else if (target < array[m][n]){
                m--;
            }else {
                return true;
            }
        }
        return false;
    }
}
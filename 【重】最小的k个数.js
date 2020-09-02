/*
输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4。

使用快速排序先排序，再输出
*/
// 快排解法
function quickSort(input, begin, end, k){
    if(begin >= end) return;
    let i = begin+1,j = end;
    while (true){
        while (input[i] < input[begin]) { i++ }
        while (input[j] > input[begin]) { j-- }
        if (i < j) {
            let tem1 = input[i]
            input[i] = input[j]
            input[j] = tem1
        } else {
            break
        }
    }
    let tem = input[j]
    input[j] = input[begin]
    input[begin] = tem

    quickSort(input, begin, j-1, k);
    quickSort(input, j+1, end, k);
}
function GetLeastNumbers_Solution(input, k){
    quickSort(input, 0, input.length - 1, k);
    let res = [];
    for(let i in input){
        if(i<k){
            res.push(input[i])
        }
    }
    if(input.length<k){
        return []
    }else{
        return res
    }
}

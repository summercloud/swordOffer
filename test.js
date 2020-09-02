/* 
从上往下打印出二叉树的每个节点，同层节点从左至右打印。
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
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
const root = {
    val: 10,
    left: {
        val: 5,
        left: {
            val: 4
        },
        right: {
            val: 7
        }
    },
    right: {
        val: 12
    }
};
const array = [8,5,7,9,10,2,4];
console.log(GetLeastNumbers_Solution(array, 4));

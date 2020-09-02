/* 
从上往下打印出二叉树的每个节点，同层节点从左至右打印。
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isLarge(n, m){
    return (n+''+m) > (m+''+n);
}
function PrintMinNumber(numbers)
{
    let res = '';
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            if(isLarge(numbers[i], numbers[j])){
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
        res = res + numbers[i];
    }
    return res
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
const array = [3,321,3214,3211,2];
console.log(PrintMinNumber(array));

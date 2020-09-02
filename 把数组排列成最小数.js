/* 
从上往下打印出二叉树的每个节点，同层节点从左至右打印。
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// 快排解法
function isLarge(n, m){
    return (n+''+m) > (m+''+n);
}
function PrintMinNumber(numbers)
{
    function quickSort(i, j){
        if(i>=j) return;
        let begin = i, end = j;
        let temp = numbers[begin];
        ++i;
        while (true) {
            while (isLarge(temp, numbers[i])) i++;
            while (isLarge(numbers[j], temp)) j--;
            if(i >= j){
                break;
            }
            let num = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = num; 
        }
        numbers[begin] = numbers[j];
        numbers[j] = temp; 
        
        quickSort(begin, j-1);
        quickSort(j+1, end);
    }
    quickSort(0, numbers.length-1);
    return numbers.join('');
}
//冒泡排序解法
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
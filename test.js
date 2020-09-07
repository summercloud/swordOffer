/* 
从上往下打印出二叉树的每个节点，同层节点从左至右打印。
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function FindNumsAppearOnce(array)
{
    let res = [];
    let count = {};
    for(let i = 0; i<array.length; i++){
        count[array[i]] = count[array[i]] ? ++count[array[i]] : 1;
    }
    for(let key in count){
       if(count[key] == 1) res.push(key); 
    }
    return res;
}
const root = {
    val: 10,
    left: {
        val: 5,
        left: {
            val: 4
        },
        right: {
            val: 7,
            right: {
                val: 7,
                right: {
                    val: 7
                }
            }
        }
    },
    right: {
        val: 12
    }
};
const array = [1,2,3,4,5,6,7,0];
console.log(FindNumsAppearOnce(array));
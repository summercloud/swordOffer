/* 
从上往下打印出二叉树的每个节点，同层节点从左至右打印。
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function InversePairs(data)
{
    function merge(start, end){
        let mid =  parseInt((end+start)/2);
        temp++;
        if(start == end){
            return;
        } if ( end - start == 1){
            if(data[start] > data[end]){
                count++;
                let temp = data[start];
                data[start] = data[end];
                data[end] = temp;
            }
            return;
        }
        merge(start, mid);
        merge(mid+1, end);
    
        let arr = [];
        let l = mid, r = end;

        while( l >= start && r >mid ) {
            if(data[l] > data[r]){
                count = (count + (r-mid))%1000000007;
                arr.unshift(data[l]);
                l--;
            } else {
                arr.unshift(data[r]);
                r--;
            }
        }
        if(l >= start){
            arr = [...(data.slice(start, l+1)), ...arr];
        }
        if(r > mid){
            arr = [...(data.slice(mid+1, r+1)), ...arr];
        }
        data.splice(start, end-start+1, ...arr);
    }

    let count = 0;
    let temp = 0;
    merge(0, data.length-1);
    return count;
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
const array = [1,2,3,4,5,6,7,0];
console.log(InversePairs(array));
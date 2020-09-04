/* 
在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
输入一个数组,求出这个数组中的逆序对的总数P。
并将P对1000000007取模的结果输出。 即输出P%1000000007

解法：将数组二分并排序，每次排序时记录逆对，
排序时指针为l，r,分别从left数组和right数组的最后一位向前遍历
当left[l] > right[r] 时 cunt = (count + r + 1), 数字记录至新的数组,l指针前移动
当left[l] <= right[r] 时 记录数组, r指针前移动
*/
function InversePairs(data)
{
    function merge(left, right){
        if(right.length == 0 && right.length == 0){
            return []
        }
        if(left.length == 0){
            return right
        } 
        if(right.length == 0) {
            return left
        }
    
        let leftBegin = left.slice(0,parseInt(left.length/2)), leftEnd = left.slice(parseInt(left.length/2), left.length);
        let lfArr = merge(leftBegin, leftEnd);
    
        let rightBegin = right.slice(0,parseInt(right.length/2)), rightEnd = right.slice(parseInt(right.length/2), right.length);
        let rgArr = merge(rightBegin, rightEnd);
    
        let arr = [];
    
        let l = lfArr.length-1, r = rgArr.length-1;
        while( l >= 0 && r >=0 ) {
            if(lfArr[l] > rgArr[r]){
                count = (count + r + 1)%1000000007;
                arr.unshift(lfArr[l]);
                l--;
            } else {
                arr.unshift(rgArr[r]);
                r--;
            }
        }
        if(l >= 0){
            arr = [...(lfArr.slice(0, l+1)), ...arr];
        }
        if(r >= 0){
            arr = [...(rgArr.slice(0, r+1)), ...arr];
        }
        return arr 
    }

    let left = data.slice(0,parseInt(data.length/2)), right=data.slice(parseInt(data.length/2), data.length);
    let count = 0;
    merge(left, right);
    return count;
}
// 改进版
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
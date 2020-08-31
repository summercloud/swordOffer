/* 
题目描述: 
把一个数组最开始的若干个元素搬到数组的末尾，
我们称之为数组的旋转。 
输入一个非减排序的数组的一个旋转，
输出旋转数组的最小元素。 
例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，
该数组的最小值为1。 
NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
*/
/* 从后向前遍历求解：小于首元素的第一个元素即为最小元素*/
function minNumberInRotateArray(rotateArray)
{   
    if(rotateArray.length == 0){
        return 0;
    }
    let head = rotateArray[0];
    let endIndex = rotateArray.length - 1;
    if(head < end){
        return head;
    }
    temp = rotateArray[endIndex];
    while(head > rotateArray[endIndex] && endIndex > 0){
        temp = rotateArray[endIndex];
        endIndex++;
    }
    return temp;
}
/* 二分遍历求解：二分，如果分别单调递减则比较两个数组的第一位；如果不单调递减则将非单调递减的数组二分再比较 */
function minNumberInRotateArray(rotateArray)
{   
    let length = rotateArray.length;
    if(length == 0){
        return 0;
    }
    if(rotateArray[0] < rotateArray[length -1] || length == 1){
        return rotateArray[0];
    }
    let preList = rotateArray.slice(0, parseInt(length/2));
    let endList = rotateArray.slice(parseInt(length/2));
    if(preList[0] <= preList[preList.length-1] && endList[0] <= endList[endList.length-1]){
        return Math.min(preList[0], endList[0]);
    }
    if(preList[0] > preList[preList.length-1]){
        return minNumberInRotateArray(preList);
    }
    if(endList[0] > endList[endList.length-1]){
        return minNumberInRotateArray(endList);
    }
}
/*
一个整型数组里除了两个数字之外，其他的数字都出现了两次。
请写程序找出这两个只出现一次的数字。
*/
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
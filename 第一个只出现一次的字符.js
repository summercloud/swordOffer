/*
在一个字符串(0<=字符串长度<=10000，
全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 
如果没有则返回 -1（需要区分大小写）.（从0开始计数）
*/
// 遍历解法
function FirstNotRepeatingChar(str)
{
    if(str.length == 0) return -1;
    let array = str.split('');
    // 记录数字出现的次数
    let count = [];
    // 记录count中的数字在str中的位置
    let position = [];
    let first = 0;
    for( let i = 0; i<array.length; i++){
        let p = -1;
        count.forEach((item, index) => {
            if(item.indexOf(array[i]) != -1){
                p = index;
                return;
            }
        })
        if(p == -1){
            count.push(array[i]);
            position.push(i);
        } else {
            count[p] = count[p] + array[i];
        }
        while (count[first] && count[first].length > 1) {
            first++;
        }
    }
    if(count[first]) return position[first];
    else return -1;
}
// hash解法
// 第一遍遍历str用count记录字母出现的次数，第二遍遍历str，哪个字母最先个数是1则返回index，否则返回-1
function FirstNotRepeatingChar(str)
{
    let count = {};
    let p = -1;
    for( let i=0; i<str.length; i++){
        count[str[i]] = !count[str[i]] ? 1 : ++count[str[i]];
    }
    for( let j=0; j<str.length && p==-1; j++){
        if(count[str[j]] == 1) p=j;
    }
    return p;
    
}

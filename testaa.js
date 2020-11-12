let n = 5;
let m = 4;
let array = [10,1,3,5,9];
/* for(let i = 0; i < n; i++){
    let temp = readInt();
    array.push(temp);
} */
let i = 0, j = 0;
let maxlen = 0;
let result = 1, max = array[i], min = array[i];
function searchMax(i, j){
    let tempMax = array[i];
    for(let index = i; index<=j; index++){
        if(array[index] > tempMax) tempMax = array[index];
    }
    return tempMax;
}
function searchMin(i, j){
    let tempMin = array[i];
    for(let index = i; index<=j; index++){
        if(array[index] < tempMin) tempMin = array[index];
    }
    return tempMin
}
while(j<n){
    console.log(max,min,i, j, result); 
    if(array[j] > max && (array[j] - min) <=m){
        max = array[j];
        j++;
    }else if (array[j] < min && (max - array[j]) <= m){
        min = array[j];
        j++;
    }else if ((array[j] > max && (array[j] - min) > m )|| (array[j] < min && (max - array[j]) > m)){
        i++;
        min = searchMin(i,j);
        max = searchMax(i,j);
        continue;
    }else{
        j++;
    }
    if(result < j - i + 1){
        result = j-i;
    }
}
console.log(result);

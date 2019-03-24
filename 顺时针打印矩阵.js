/* 
 题目描述：
 输入一个矩阵，
 按照从外向里以顺时针的顺序依次打印出每一个数字，
 例如，如果输入如下4 X 4矩阵： 
 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 
 则依次打印出数字：
 1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
*/
function printMatrix(matrix){
    let n = 0;
    let m = 0;
    let round = 0;
    let width = matrix[0].length;
    let height = matrix.length;
    let arr = [];
    let flag = 0;
    while(arr.length < width*height){
        if(m >= round || m <= width-1-round ){
            if(flag%4 == 0){
                if(m == width-1-round){
                    flag++;
                }else{
                    arr.push(matrix[n][m]);
                    m++;
                }
                continue;
            }
            if(flag%4 == 2){
                if(m == round){
                    flag++;
                }else{
                    arr.push(matrix[n][m]);
                    m--;
                }
                continue;
            }
        }
        if(n >= round || n <= height-1-round ){
            if(flag%4 == 1){
                if(n == height-1-round){
                    flag++;
                }else{
                    arr.push(matrix[n][m]);
                    n++;
                }
                continue;
            }
            if(flag%4 == 3){
                if(n == round+1){
                    flag++;
                    round++;
                }else{
                    arr.push(matrix[n][m]);
                    n--;
                }
                continue;
            }
        }
    }
    return arr;
}
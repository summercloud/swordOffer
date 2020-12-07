/* 
给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],
其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
（注意：规定B[0] = A[1] * A[2] * ... * A[n-1]，B[n-1] = A[0] * A[1] * ... * A[n-2];）
对于A长度为1的情况，B无意义，故而无法构建，因此该情况不会存在。

解析：可将B看作A组成的矩阵相乘，其中B[n]时使用A[n]=1相乘，因此矩阵分为 上三角 + 1 + 下三角
*/
function multiply(array)
{
    if(array.length <= 1) return false;
    // 先计算下三角：B0=1,B1=B0*A0...,Bn=Bn-1*An-1
    let B = [1];
    for(let i=1; i<array.length; i++){
        B[i] = B[i-1] * array[i-1];
    }
    //再计算上三角：C[n-1]=1; C[n-2]=C[n-1]*A[n-1];C[n-3]=C[n-2]*A[n-2]...;C[0]=C[1]A[1]
    //根据上三角计算结果：B[n-1] = B[n-1]*C[n-1];
    let C = [];
    C[array.length -1] = 1;
    for(let i=array.length-2; i>=0; i--){
        C[i] = C[i+1] * array[i+1];
        B[i] = B[i] * C[i];
    }
    return B;
}
module.exports = {
    multiply : multiply
};
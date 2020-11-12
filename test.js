/* 
和为s的连续正数序列
小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。
但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。
没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。
现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? 
Good Luck!
*/

function PromiseTest (fn){
    self = this;
    state = 'padding';
    successCb = () => {};
    failCb = () => {};
    
    this.then = function(successCb, failCb){
        this.successCb = successCb;
        this.failCb = failCb;
        return this;
    }

    function resolve(data) {
        if(self.state == 'padding') {
            self.state = 'resolved';
            self.successCb(data);
        }
    } 
    function reject(data) {
        if(self.state == 'padding') {
            self.state = 'rejected';
            self.failCb(data);
        }
    }

    fn(resolve.bind(self), reject.bind(self));
}

new PromiseTest((res, rej) => {
    setTimeout(()=>{
        console.log('promise')
        res(3);
    }, 1000)
}).then((data)=>{
    console.log('then:', data)
})

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
//console.log(FindContinuousSequence(10));
/* 
请实现一个函数用来匹配包括'.'和'*'的正则表达式。
模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。
在本题中，匹配是指字符串的所有字符匹配整个模式。
例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配。

解：
【使用递归解法】
如果s和pattern都是0则返回true
如果s不是0，patter是0则返回false
其他情况 
    pattern1不是*的话 判断s0和pattern0 满足则递归s1和pattern1
        否则 return false
    pattern1是*的话 判断s0和pattern0 满足则递归s1和pattern，保存递归结果res1
        不满足则递归s和pattern2，保存递归结果res2。
        返回res1 || res2
*/
function match(s, pattern)
{
    if(s.length == 0 && pattern.length == 0) return true
    if(s.length != 0 && pattern.length == 0) return false
    if(pattern[1] != '*') {
        if(s[0] && (s[0] == pattern[0] || pattern[0] == '.')){
            return match(s.substring(1), pattern.substring(1));
        } else {
            return false;
        }
    } else {
        // 如果pattern1=='*'，
        let res = false;
        if(s.length>0 && (s[0] == pattern[0] || pattern[0] == '.')){
            res = match(s.substring(1), pattern)
        }
        return res || match(s, pattern.substring(2));
    }
}
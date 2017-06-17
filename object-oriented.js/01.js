/*   chapter 1 & 2
1 区分大小写

2 
返回表达式的结果  var a = 1 ;没有返回值 // undefined 
1 + 2 : 控制符是能对一两个输入执行某种操作并返会结果 ; //3

3 
表达式以 ; 结尾。
尽管js有分号自动补全机制。但为了规范。

4 数据类型
基本类型(number[int,float,Infinity,NaN], string, boolean, undefined[变量不存在或者没赋值], null)
非基本类型(object)
	注：typeof [数据类型+function]

5 进制
0开头为八进制  0x开头为16进制
var a = 0377 ; a // 255 

6 指数表示法
1e1==1e+1==1E1==1E+1
4E+3 ; // 4000
3e-2 ; // 0.03

7 Infinity 
数值超出js处理范围 ，或者 除以0 。返回infinity
1e309 ; //Infinity  ---number类型
infinity + 20 // infinity ---与任何数值相加依然返回infinity

8 NaN
运算失败时返回
1 + 'st' // NaN   
1

9 字符串
除加法外，当一个数字字符串用于算数运算中的操作数时，该字符串会在运算中被当做数字类型来使用
数字字符串转化为数字：'10' * 1
数字转化为数字字符串:  1 + ''

10 特殊字符串
`\` `\n` `\r` `\t`[制表符] `\u`[转视为unicode]

11 转化为bool值位false的情况：
空字符''  数字0 null undefined 数字NaN false // false

12 逻辑运算：
优先级：! > && > ||
惰性求值
逻辑表达式遇到一个!bool的操作数，该表达式的返回值就是该操作数
	eg: true && 'not bool but a string' // not bool but a string

13 比较运算符
返回bool
NaN == NaN // false NaN连自己也不等

14 数组
	var a = [1,2]
	a[5] = 6
	a;// [1,2,ndefined,undefined,undefined,6]

	delete a[1]
	a.length // 6
	a //  [1,2,ndefined,ndefined,ndefined,6]
	a[1] // undefiened  说明delete删除的位置只是被留空了而已。

	var b = 'I\'m a loser ';
	b[2] // m 数组方式访问字符串

15 循环
while
	var i = 0;
	while (i < 20){i++};
do-while : 先执行后判断。无论如何都会执行一次。
	var i = 0;
	do{i++}while(i < 20)
for

for-in：遍历数组
	var arr=[1,2,3,4]
	for( var i in arr){
		i + arr[i]; // 34
	}

 */

// for 九九乘法表
var a='\n';
for(let i = 1; i < 10; i++){
	for(let j = 1; j <= i ; j++){
		a += j + '*' + i + '=' + i*j + ' | ';
	}
	a += '\n';
}
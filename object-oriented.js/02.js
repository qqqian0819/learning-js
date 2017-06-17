
/******** 函数
1 参数
	funcion test(a,b){}
	a(1) ：b 默认为undefined
	a(1,2,3,4,):3 4 默认忽略

	arguments：接收所有参数

2 预定义函数
	parseInt('ff');// NaN 遇错返回nan
	parseInt('ff',16) // 255 第二个参数基数,数字类型
	parseInt('123e+1'); // 123
	parseInt(123e+1); // 1230
	
	parseFloat('12.3.sbc') // 12.3
	parseFloat('a3.3') // NaN 
	parseFloat('123e-2') // 1.23 

	isNaN('add') // true 是否不是数字

	isFinity(123) // true 是否即非 NaN 也非 Infinity

	var str='http:// dads.vom?s=2131';
	encodeURI(str); // "http://%20dads.vom?s=2131"
	encodeURIComponent(str); // http%3A%2F%2F%20dads.vom%3Fs%3D2131
	decodeURI decodeURIComponent

	eval('string') // 将string当做js代码执行
	 */

//3 函数变量
var a='aaa';

function test(){
	alert(a);  // undefined 变量提升
	var a='bbb',b; 
	alert(a); // bbb 内部覆盖外部 
}

alert(b); // error 外2部不能访问内部的var

//4 函数类型:函数也是一种数据，可以被赋值拷贝等操作

function test1(){ return 1;}  // 函数声明
var test2=function(){ return 2;} // 匿名函数[函数表达式]

function invokeAdd(a,b){
	return a()+b();
}
invokeAdd(test1,test2); // 回调函数：当函数A传递给函数B，并由B来代替A执行。称A为回调函数。


//5 回调实例

function multiplyByOne(a,b,c,callback){
	var i, ar = [];
	for(i = 0; i < 3; i++ ){
		ar[i] = callback( arguments[i] * 2);
	}
	return ar;
}

multiplyByOne(1,2,3,function(a){ // 匿名回调函数
	return a + 1;
});

//6 立即执行
/*
IIFE[立即执行函数表达式]:
	http://weizhifeng.net/immediately-invoked-function-expression.html
	原理：
		js解释器会在默认的情况下把遇到的function关键字当作是函数声明语句(statement)来进行解释.
		在js中`()`之间只能包含表达式（expression）
		于是：能让JavaScript解释器以「expression」而不是「statement」来处理匿名函数的立即执行就可以了
	eg：
		(functin(){}());
		(functin(){})();
		var i=function(){}();
		true && function(){}();
		!function(){}();
	场景：
		避免重名覆盖重写
		闭包问题
		模拟单例
 */

(function(){return  1;})();

// 8 私有函数：函数内层函数 外部不可访问
function outer(){
	function inner(){
		return 2;
	}
}
inner(); // error


// 9 闭包

// 作用域链
var $global = 1;
(function outer(){
	function inner(){
		var inner_global = 3;
		return $global + outer_global + inner_global;
	}
	var outer_global = 2;
	return inner();
})();

// 闭包突破作用域链

function a(){
	var arr = [], i;
	for(i = 0; i < 4; i++){
		arr[i] = function (){
			return i;
		}
	}

	return arr;
}
var arr = a();
arr[0](); // 4  不是3==============================
/* 原因1：循环结束时i==3
for(i = 0; i < 4; i++)=>
var i = 0;
while(i < 4){
	i++;
}
原因2：闭包
闭包 不会记录值,所拥有的只是相关域在创建时的一个连接(即引用)
当要去获取某个变量时,它会从其所在的域开始逐级寻找那个距离最近的i值。

 */

// 迭代器
function setup(x){
	var i = 0;
	return function(){
		return x[i++];
	}
}

var next = setup([1,2,3,4,5]);
next(); // 1
next(); // 2
next(); // 3


// 10 ==== 练习

(function getRGB(str){
	var r = parseInt(str[1],16) * parseInt(str[2],16)
	var g = parseInt(str[3],16) * parseInt(str[4],16)
	var b = parseInt(str[5],16) * parseInt(str[6],16)
	return [r, g, b];
})("#00ff00");

var a = 1;
function f(){
	function n(){
		return a;
	}
	var a = 2;
	n();
} 

f(); // undefined
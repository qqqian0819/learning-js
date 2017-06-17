/********对象

 */

// 1 访问
var object={
	age:123,
	name:{
		first:qin
		name:wanqian
	}
}

object.name ; object[name] // 属性命名规范且确定 .[]单独混合均可
object.bf; // undefined 访问不存在的属性

var key = first; object.name[key] // 不确定必须用[]代替.

// 2 增删改
object.age = 23; //改
object.job = programmer;// 增 
delete object.name.first;// 删

// 3 全局变量：
var a = 1;
a;  // 直接
window.a; // 宿主为浏览器时
this.a; // 在全局区域

// 4 构造器函数
function Hero(name){
	this.name = name;
	this.say = function(){
		return 'this hero is ' + this.name;
	}
}
var qin = new Hero('qin');
qin.say();

// 5 构造器属性: 指向用于创建该对象的函数
qin.constructor; // function Hero(){...}
var wan = new qin.constructor('wan');
wan.say();

var a = {} // 对象文本表示法创建的对象 ;[] 为数组文本标识法
a.constructor; // function Object() { [native code] }

// 6 instanceof:测试对象是否由某个指定的构造器函数所创建的。
qin instanceof Object; // true

// 7 工厂函数返回对象: 已对象为返回值
function factory(name){
	return {
		name:name
	}
}

var qqqian = factory ('qqqian');
qqqian.name;
qqqian.constructor; // function Object() { [native code] }

// 8 传递对象		
var original = {homoney: 1};
var mycopy = original;
mycopy.homoney = 100;
original.homoney; // 100 并非1
/*
拷贝某个对象或者传递参数时，往往传递的就是对该对象的引用。
在引用上做的改动，都会影响它所引用的元对象
 */

// 9 比较对象：当且仅当两个对象指向对一个对象时才为true
var fido = {breed: 'dog'};
var benji = {breed: 'dog'};
beiji == fido ;// false 两个不一样的对象，尽管属性值一样。
var mydog = benji;
mydog === benji; //true

// 10 Object: js 中所有对象的父级对象
var o = {} ;// <=> var o = new Object(); "空"对象，里面有属性方法，并非真正意义上的空。
o.toString(); // [object Object]
/*
o.toString():返回对象的描述字符串
o.constructor:返回构造器函数的引用
o.valueOf():返回对象的单值描述，通常返回本身对象
	当需要字符串来表示对象的时候，会内部调用toSting
 */

alert(o); // <=>alert(o.toString()): [object Object]
'string ' + o // string [object Object]


// 11 数组 [length,Object继承的方法属性]

var arr1 = new Array(1, 2); // <=> var arr = [1, 2];

var arr2 = new Array(5); // 一个参数时，表示长度
arr2;// [undefined*5]
arr1.toString(); // "1,2"
arr1.length; // 2 length忽略非数字键名的属性。 普通对象没有该属性。数组也属于对象
arr1.length = 3; arr1; // [1,2,undefined] 当length大于当前length时补齐undefined
arr1.length = 1; arr1; // [1] 当length小于当前length时删除

// 12 数组方法

array.push('a') <=> array[array.length] = 'a';
array.pop()  <=> array.length--;
a.push() // 尾部添加。返回操作后的长度
a.pop() // 尾部删除。返回删除的元素
a.sort() // 排序。返回排序后的数组。排序前后数组相等。array === array.sort() // true
a.jion('separator') // 数组->字符串
a.slice(start,end) // 截取数组。返回截取后的数组 ***[start,end)*** 。且原数组不变。
a.splice()  // 截取数组 但是原数组会改变 


// 13 function
function test(a,b,c){return true};
test.length; // 3  返回形参的个数
test.constructor; // function Function() { [native code] }
test.prototype;
test.toString(); // 返回test函数。
parseInt.toString(); // function Function() { [native code] }
/*
函数是一种特殊的数据类型，一种对象。
所有的函数对象都是继承自顶级的Object，
所以 自己创造的函数.toString 拥有Object方法属性，
toString指向函数自身。
但是内建函数[系统自带函数]却不可已查看源码
*/

// 14 call apply：对象去借用另一个对象的方法并为己所用。
var some_obj = {
	name: 'qinwanqian', 
	say: function(){
		return 'I\'m ' +　this.name;
	}
} 

some_obj.say(); // I'm qinwanqian
my_object = {name: 'dog'};
some_obj.say.call(my_object,'a','b'); // this指向当前调用的对象
some_obj.say.apply(my_object,['a','b']); // call和apply不同在于参数传递的形式

// 15 arguments：伪数组

function a(){
	// arguments 没有数组的内建函数,eg reverse,sort....
	// var args = [].slice.call(arguments);// <=> Array.prototype.slice.call(arguments)
	return args.reverse();
}

a(1,2,3,4); // [4,3,2,1]

// 16 区分对象类型

Object.prototype.toString.call({1}); // [object Object]
Object.prototype.toString.call([1]); // [object Array]
Array.prototype.toString.call([1]); // 1

/*
对象，数组的 typeof均返回的是object
不能用Array.toString---因为数组内部的toString已被重写
返回的是所创建对象的内部类名
 */

// 17 boolean:没多大用啦

var b = new Boolean(); // b 是object
typeof b; // object
b.valueof(); // false
typeof b.valueof(); // boolean 

// 18 字符串的操作函数
var str = 'abcdEFGhic';
str.toUpperCase();
str.toLowerCase();
str.charAt(2); // c 返回指定位置的字符串。ru位置不存在，返回空字符
str.indexOf('c'); // 2 返回第一次匹配的索引位置。位置不存在，返回-1。 区分大小写
str.lastIndexOf('c'); // 9 从后匹配
str.slice(1, 3); // bc
str.substring(1, 3); // bc
str.slice(1, -2); // bcdEFGh
str.substring(1, -2); // a 
str.concat('啊啊啊');// abcdEFGhic啊啊啊  合并字符串
...

// 19 工具类对象之 Math
Math.PI; // 3.141592653589793  
Math.SQRT2; // 1.4142135623730951  2的平方根
Math.sqrt(2); // 1.4142135623730951  2的平方根
Math.pow(2,3); // 8  2的3次方
Math.random(); // 返回0 -1 
min max floor ceil round

// 20 Date
new Date(); // Sat Jun 17 2017 12:22:46 GMT+0800 (中国标准时间) 当前时间
+ new Date(); // 1497674053087
Date.now();// 1497673948883 当前时间戳
Date.parse('Jun 17, 2017') // 1497628800000 大天朝时间
Date.UTC(2017, 5, 17); // 1497657600000  格林尼治时间  月份从0开始
new Date(1234567890987); // Sat Feb 14 2009 07:31:30 GMT+0800 (中国标准时间) 时间戳返回时间
var t = new Date();
t.getMonth(); 
getHours,setMonth,setHours,getTime  // 月份从0开始

// 生日计算实例

var birth = new Date(1995, 08, 24); // 月份从0开始 
birth.getDay(); // 返回星期几 从周日0开始

var stats = [0, 0, 0, 0, 0, 0, 0];// 存放生日是对应星期的天数
for(var i = 1995; i < 2095; i++){
	var day = new Date(i, 08, 24).getDay();
	stats[day] ++;
}
stats; // [15, 14, 14, 15, 14, 15, 13] 

// 21 RegExp

var re = new RegExp('j.*t','gmi');
var re = /j.*t /gmi;   
/*
g[global]:找出所有匹配。无g，则在第一个匹配时就会停止。
i[ignoreCase]:忽略大小写
m[multiline]:跨行搜索
 */  
 
// test() return boolean; exec() return 由匹配到的字符串组成的数组
new RegExp('j.*t','gmi').test("Javascript"); // true
new RegExp('j.*t').test("Javascript"); // false

new RegExp('j.*t','gmi').exec("Javascript"); // ["Javascript", index: 0, input: "Javascript"]
new RegExp('j.*t').exec("Javascript"); // null

/*
match():返回一个包含匹配内容的字符串。
search():返回的是第一个匹配内容所在的位置。
replace():该方法能将匹配的文本替换成指定的字符串。
splite():能根据指定的正则表达式将目标字符串分割成若干个数组元素。
 */
var str = "a1b2c4d5A6B7C8D9a0b1c2d";
str.match(/a/gi); //  ["a", "A", "a"]
str.search(/b/); // 2
str.replace(/[0-9]/g,' '); // a b c d A B C D a b c d

// 分了组(即带括号) 可以用$分组来表示匹配分组
var email = 'qqqian0819@gmail.com';
var name = email.replace(/(.*)@(.*)/, "$1"); // qqqian0819
var ext = email.replace(/(.*)@(.*)/, "$2"); // gmail.com"


// 回调式替换
var re = /(.*)@(.*)\.(.*)/;
var $global;
var callRepl = function (){
	$global = arguments;
	return arguments[1] + ' at ' + arguments[2] + ' dot ' + arguments[3]; 
} 
'qqqian0819@gmail.com'.replace(re, callRepl); // qqqian0819 at gmail dot com
$global;
/*
["qqqian0819@gmail.com", "qqqian0819", "gmail", "com", 0, "qqqian0819@gmail.com", 
callee: function, Symbol(Symbol.iterator): function]
 */

var csv = 'one, two , three,four ';
csv.split(','); // ["one", " two ", " three", "four "] 空格也在
csv.split(/\s*,\s*/); // ["one", "two", "three", "four "] `\s*`匹配一个至多个空格


// 22 ERROR对象 

try{
	a;
}catch(e){ // 出错时执行
	alert(e.name + ':' + e.messgae); // ReferenceError:undefined
}finally{ // 不管对错总会执行
	alert('aaa');
}


try{
	var total = mybeyExists();
	if(total === 0){
		throw new Error('division by zero!');
	}else{
		alert(50 / total);
	}
}catch(e){
	alert(e.name + ':' + e.messgae);
}finally{
	alert('finally');
}


// ========练习

// 自定义MyString()构造器函数。
function MyString(str){
	this.length = str.length;
	this.toString = function(){
		return str;
	};
	this.concat = function(ext){
		return str + ext;
	};

}

var s = new MyString('hello');




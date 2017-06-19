// 原型


// 1 利用原型添加属性和方法
function Grade(name, color){
	this.name = name;
	this.color = color;
	this.say = function (){
		return 'I\'m ' + name;
	}
}
// Grade.prototype.price = 100;
Grade.prototype = {
	price: 100,
	rating: 3,
	getInfo: function(){
		return this.rating + this.price; // 103 string
	}
}

// 2 使用原型的方法与属性

var newtoy = new Grade('qinwq', 'purple');
newtoy.getInfo();

// 
Grade.prototype.get = function(what){
	return this[what];
}
newtoy.get('price'); // 100; 原因如下
/*
在JavaScript中，几乎所有的对象都是通过传引用来传递的 。
因此我们所创建的每个对象实体并没有一份属于自己的原型副本。
也就意味着，我们可以随时修改prototype属性。
并且由同一个构造器创建的所有对象的prototype属性也都会同时改变
甚至影响在修改之前已经创建了的对象。

 */

// 3 自身属性与原型属性

newtoy.rating; // 3
newtoy.constructor === Grade; // true
/*
访问对象的属性时，
js引擎会查询该对象的所有自身属性.
找到就返回。如果没找到，接下来
js会去查询创建当前对象的构造器函数的原型[等价于直接访问newtoy.constructor.prototype]

 */

// 4 利用自身属性重写原型属性:自身属性 优先于 原型属性

function Gadget(name){
	this.name = name;
}
Gadget.prototype.name = 'mirror';
var toy = new Gadget('camera');
toy.name; // camera 自身属性 优先级 高于原型属性
toy.hasOwnProperty('name'); // true 判断属性是否是自身属性 是true 
delete toy.name; // true 删除成功 delete` ` 而非delete`.`;
toy.name; // mirror 删除自身属性后，原型属性就会上浮。
toy.hasOwnProperty('name'); // false; 不是自身属性

// 5 枚举属性 之 拼接参数
var params = {
	productid: 666,
	section: 'products'
};
var url = 'http://examp;e.org/page.php?', i, query = [];
for(i in params){ // for循环数组，for-in循环对象 。内建属性是不能循环的.
	query.push('i' + '=' + params[i]); // ["i=666", "i=products"]
}

url += query.join('&'); // http://examp;e.org/page.php?i=666&i=products

// 6 propertyIsEnumerable:对所有原型属性返回false;对所有非内建对象属性返回true。
// 

// 7 isPrototypeOf() // a.isPrototypeOf(b) a是否是b的原型。
 

//  8 Object.getPrototypeOf(a) // 返回a的原型属性

 
//9 __proto__   不等价与 prototype  :proto是某个实例对象的属性。而prototype是属于构造器函数的属性。

a.__proto__;  
a.constructor.prototype;

// 10 扩展内建对象  ============高大上啊哈哈哈哈哈哈哈哈哈哈哈=========
Array.prototype.inArray = function(needle){
	for(var i = 0, len = this.length; i<len; i++){
		if(this[i] === needle){
			return true;
		}
	}
	return false;
}
var colors = ['red', 'green', 'blue'];
colors.inArray('red'); // true
colors.inArray('yellow'); //false
/*
 js中，内建对象的构造器函数(例如 Array,String,Object,Function)都是可以通过原型进行扩展的。
 这就意味着，我们只要往数组原型中添加新的方法，
 就可以使其在所有的数组可用。
 eg Array添加inArray方法，来判断元素是否存在于某个数组中。(valueOf 忽略不计 哈哈哈)
 eg 给字符串对象添加reverse()方法反转字符串。[reverse()存在于数组中]

 注意：在自定义方法扩展原型时请一定要先检验该方法是否已经存在。
 */

if(typeof String.prototype.reverse !=== 'function'){
	String.prototype.reverse = function(){
		return Array.prototype.reverse.apply(this.split('')).join('');
	}
}
'bumbblesasdsa'.reverse();


// 11 原型陷阱：重写对象的prototype时，需要重置响应的constructor属性

function Dog(){
	this.tail = true;
}
beiji = new Dog();
Dog.prototype.say = function (){
	return 'wow';
}

beiji.say(); // wow :即时已经创建的对象，在原型添加新属性和方法也是可以调用的。
beiji.constructor === Dog; // true

Dog.prototype = { // 重写prototype
	paws: 4,
	hair: true
}
var lucy = new Dog;
beiji.paws; // undefined 重写prototype后出错。就对象无法调用新prototype
beiji.say(); // wow 旧对象可调用旧prototype方法。
lucy.say(); // error:say is not a function  新对象无法调用旧原型方法
lucy.paws; // 4 新对象可以调用新原型的方法。

typeof beiji.__proto__.say; // function 
typeof lucy.__proto__.say; // undeined

lucy.constructor; // function Object() { [native code] }  指向Object
beiji.constructor; //function Dog(){this.tail = true;}  指向构造器

// 解决方法：重置相应的constructor属性。
new Dog().constructor === Dog; //false 
 
Dog.prototype.constructor = Dog; // 重置constructor属性
new Dog().constructor === Dog; //true 可调用新prototype的属性方法，不可调用旧prototype的属性方法
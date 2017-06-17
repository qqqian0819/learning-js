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
for(i in params){ // for循环数组，for-in循环对象 。
	query.push('i' + '=' + params[i]); // ["i=666", "i=products"]
}

url += query.join('&'); // http://examp;e.org/page.php?i=666&i=products

// 
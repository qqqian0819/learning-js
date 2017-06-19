// 原型的练习题


 var shape = {
 	type: 'triangle',
 	getType: function(){return this.type;}
 }


 
 function Triangle(a, b, c){
 	this.a = a;
 	this.b = b;
 	this.c = c;
 }



 Triangle.prototype = shape;  // 设置triangle的原型时shape
 Triangle.prototype.constructor = Triangle;   // 重置constructor属性 t.constroctor == Triangle //true


 Object.prototype.getPerieter = function(){
 	return this.a + this.b + this.c;
 };

 var t = new Triangle(1, 2, 3);

 t.constructor === Triangle; // true

 shape.isPrototypeOf(t); // true

 t.getPerieter(); // 6

 t.getType(); // "triangle"

 var group = []; 
 for ( i in t){
 	if(t.hasOwnProperty(i)){
 		group.push(i + t[i]);
 	}
 	
 }


 Array.prototype.shuffle = function(){
 	
 	return Array.prototype.sort.call(this);
 }

 [1,3,1,34,6,4].shuffle();
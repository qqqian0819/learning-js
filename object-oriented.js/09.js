// 浏览器环境
// 


// 1 遍历dom

function walkDom(n){
	do{
		console.log(n);
		if(n.hasChildNodes()){
			walkDom(n.firstChild);
		}
	}while(n = n.nextSibling);
}

walkDom(document.body);

// 2 css选择器选择

document.querySelector('input[type=text]');

// 3 trick功能

function toggle(){
	var str = document.getElementById('jsp').style;
	str.display = (str.display === 'hidden') ? 'visible' : 'hidden';
}

var myint = setInterval(toggle, 1000);
clearInterval(myint);


// 4 弹窗功能
var win = window.open('http://localhost:81/JavaScript/object-oriented.js/01.js',
	'packt','width=300, height=300;resizable=yes');
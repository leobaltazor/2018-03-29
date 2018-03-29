// var a = [[1,2],[3,4],1];

// function log(array,i) {
// 	if (!i) {i=0};
// 	for (var j=0; j < array[i].length; j++) {
// 		console.log(array[i][j]);
	
// 	}
	
// 	// console.log(array[i].length);
	
// 	i++;
// 	if (array.length > i) {
// 		log(array,i);
// 	}
// }
// log(a,);

// console.log("hello world");
// let objj = {
// 	a1:1,
// 	objj2:{
// 		a2:2,
// 		objj3:{
// 			a3:3,
// 		},
// 	},
// }

// console.log(objj);



 //генерация случайного числа от min до max
 function rand(min, max) {
	var res = (min-1) + Math.random() * ((max+1) - (min-1));
	return parseInt(res);
}

// console.log(rand(-10, 10));

function arr_rand(a,b) {
	let min = 0;
	let max = 0;
	min = a < b ? a : b;
	max = a < b ? b : a;
	min = min === max ? -min : min;
	var len = 0;
	v = (a < 0) ? a * -1 : a * 1;
	z = (b < 0) ? b * -1 : b * 1;
	len = v + z;
	let arr = [];
	
	if (a === undefined && b === undefined) {
		console.log("оба не определены");
		min = -1000;
		max = 1000;
		len = rand(10,29)
	} else if (a === undefined) {
		console.log("a uderfined");
		if (b > 0) {
			min = -b;
			max = b;
		} else {
			min = b;
			max = -b;
		}
		len = z * 2;
	} else if (b === undefined) {
		console.log("b uderfined");
		if (a > 0) {
			min = -a;
			max = a;
		} else {
			min = a;
			max = -a;
		}
		len = v * 2;
	}
	// console.log(min);
	// console.log(max);
	for (let i = 0; i < len; i++) {
		arr[i] = rand(min,max);
	}
	return arr;
	
}
var timerun = Date.now()

var aname = arr_rand(0,10000);
if (location.hash == "#asc") {
	aname.sort(function(a,b){return a-b;});
} else if (location.hash == "#desc") {
	aname.sort(function(a,b){return b-a;});
}

console.log(Date.now() - timerun);
var buffer = "";
// console.log(aname)
// document.write(`<div>${name}</div`);
document.write(`<h1>${aname.length}</h1>`);
document.write(`<ol>`);
for (let i = 0; i < aname.length; i++) {
	// console.log(aname[i])
	buffer += '<li> ='+ aname[i]+'</li>';
}
//asc
//desc

document.write(buffer);
document.write(`</ol>`);
console.log(Date.now() - timerun);

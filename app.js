// function --> dahij ashiglah bolimjtoi codnii tsugluulga
function restart(){
	console.log("game restarted");
	console.log("hello");
}
restart();
function hello(name, age){
	console.log("Snu minii neriig " + name);
	console.log("Minii nas " + age);
}
hello("Munkh",11);
hello("Bat",15);
hello("Suvd",45);
function sum(a,b){
	console.log(a+b);
}
sum(15,20);
sum(56,150);
function too(i,d){
	if(i>d){
		console.log(i)
	}else{
		console.log(d)
	}
}
too(32,14);
var body = document.getElementsByTagName('body')[0];
var button = document.getElementsByTagName('button')[0];
console.log(body);
var colors = ['red','orange','yellow','green','blue'];
var i=-1;
function color(){
	random = Math.floor(Math.random()*(colors.length-1));
	i++;
	body.style.backgroundColor = colors[random]
	button.innerText = colors[random]
	if (i>=colors.length-1){
		i=-1
	}
}

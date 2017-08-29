// scripts.js

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName = 'Maja';


if (allNames.indexOf(newName) === -1) {
	var all1Names = allNames.push(newName);
	console.log(allNames);
}

console.log(all1Names);
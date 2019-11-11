document.addEventListener("DOMContentLoaded", function() {
	let btn = getElementById("changeText");
	btn.addEventListener("click", findReplace());
})

//Press any key to highlight and change font
//(window.onkeydown = function ()
//{		highlight();
//changeFontFamily();
//}

//function highlight () {
//	document.getElementById("p1").style.backgroundColor = "#fdff32";
//}

//function changeFontFamily () {
//	document.getElementById("p1").style.font
//	Family = 'Monospace';
//}

function findReplace() {
	//grab the original text
	let txt = document.getElementById("input").innerHTML;

	//grab the words to find/replace
	let findWord = document.getElementById("find").value;

	let replaceValue =
		document.getElementById("replace").value;

	//create a new regex object to use to search for findWord
	//include the g & i modifiers: g is for global i is for case insensitive
	//following is reg expression

	let reg = new RegExp(findWord, "gi");

	//find and replace words in the original text using the regex we created
	let newText = string.replace(reg, replaceValue);

	//output the new text to page

	document.getElementById("input").innerHTML = newText;

	//use codepen.io


	//codeacademy to proactive js


}

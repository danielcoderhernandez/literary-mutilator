//Press any key to highlight and change font
(window.onkeydown = function() {
	highlight();
	changeFontFamily();
});

//document.addEventListener("DOMContentLoaded", function() {
	//let btn = getElementById("highlight");
	//btn.addEventListener("click", highlight());
//});

function highlight() {
	document.getElementById("p1").style.backgroundColor = "#fdff32";
}

function changeFontFamily() {
	document.getElementById("p2").style.fontFamily = 'Monospace';
}


document.addEventListener("DOMContentLoaded", function() {
	let btn = getElementById("changeText");
	btn.addEventListener("click", findReplace());
});

function findReplace() {
	//grab the original text
	let string = document.getElementById("input").innerHTML;
	//grab the words to find/replace
	let findWord = document.getElementById("find").value;
	let replaceValue = document.getElementById("replace").value;
	//create a new regex object to use to search for findWord
	//include the g & i modifiers: g is for global i is for case insensitive
	//following is reg expression
	let reg = new RegExp(findWord, "gi");
	//find and replace words in the original text using the regex we created
	let newText = string.replace(reg, replaceValue);
	//output the new text to page
	document.getElementById("input").innerHTML = newText;
}

function rot1() {
	//alphabet array
	let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
		"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g",
		"h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
		"x", "y", "z"];
	//alphabet rot 1 array
	let alphabet = ["B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
		"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "b", "c", "d", "e", "f", "g",
		"h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
		"x", "y", "z","a"];
}



//$("p").mouseover(function() {
	//$("p").css("background-color", "yellow");
//});


//document.addEventListener("DOMContentLoaded", function() {
//let btn = getElementById("highlight");
//btn.addEventListener("click", highlight());
//});

//.highlight {
//background-color: yellow;
//}

//function highlight(text) {
//var inputText = document.getElementById("inputText");
//var innerHTML = inputText.innerHTML;
//var index = innerHTML.indexOf(text);
//if (index >= 0) {
//innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>"
//+ innerHTML.substring(index,index+text.length) + "</span>"
//+ innerHTML.substring(index + text.length);
//inputText.innerHTML = innerHTML;
//}
//}



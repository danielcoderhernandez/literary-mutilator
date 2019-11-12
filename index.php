<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Events for JS</title>
	<script src="script.js"></script>
</head>
<body>
<a>
	<div>
		<label for="find">Find: </label>
		<input type="text" id="find"/>
	</div>

	<div>
		<label for="replace">Replace: </label>
		<input type="text" id="replace"/>
	</div>

	<div>
		<button id="changeText" onclick="findReplace()">Change Text</button>
	</div>
</a>

<p id="input">I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot.
	We are Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot.
	I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. I am Groot.
	I am Groot. We are Groot. I am Groot.</p>


<a>
	<div>
		<button id="highlight" onclick="highlight()">Highlight</button>
	</div>

</a>

<p id="p1">I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot.
	We are Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot.
	I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. I am Groot.
	I am Groot. We are Groot. I am Groot. </p>


<a>
	<div>
		<button id="changeFontFamily"
				  onclick="changeFontFamily()">changeFontFamily
		</button>
	</div>
</a>

<p id="p2">I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot.
	We are Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot.
	I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. I am Groot.
	I am Groot. We are Groot. I am Groot. </p>


<a>
	<div>
		<button id="rot1" onclick="rot1()">Rot1</button>
	</div>
</a>

<p id="rot1">I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot.
	We are Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot.
	I am Groot. I am Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. I am Groot.
	I am Groot. We are Groot. I am Groot. </p>

</body>
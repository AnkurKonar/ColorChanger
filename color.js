var colors=generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var message=document.getElementById("result");
var resetbutton = document.querySelector("#reset");
var easy=document.getElementById("easy");
var hard=document.getElementById("hard");
var numsquares= 6;

easy.addEventListener("click",function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	numsquares=3;
	
	colors=generateRandomColors(3);
	pickedColor = pickcolor();
	document.getElementById("main").textContent = pickedColor;
	message.textContent = " ";
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	document.querySelector("h1").style.backgroundColor = "steelblue";
	resetbutton.textContent = "New Colours";
	
});

hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	numsquares=6;
	colors=generateRandomColors(6);
	pickedColor = pickcolor();
	document.getElementById("main").textContent = pickedColor;
	message.textContent = " ";
	for(var i=0;i<squares.length;i++)
	{
	//intialize colors
	squares[i].style.display = "block";
	squares[i].style.backgroundColor = colors[i];
	}
	document.querySelector("h1").style.backgroundColor = "steelblue";
	resetbutton.textContent = "New Colours";
});

document.getElementById("main").textContent = pickedColor;

for(var i=0;i<squares.length;i++)
{
	//intialize colors
	squares[i].style.backgroundColor = colors[i];
	
	//events
	squares[i].addEventListener("click",function(){
		
		if(this.style.backgroundColor === pickedColor)
		{
			message.textContent = "Correct!";
			changeColors();
			document.querySelector("h1").style.backgroundColor = pickedColor;
			resetbutton.textContent = "Play again?";
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Incorrect";
		}		
		
		
	});
}

function changeColors(){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = pickedColor;
	}
}

function pickcolor(){
		var m = Math.floor(Math.random() * colors.length);
		return colors[m];
}

function generateRandomColors(num){
		var arr=[];
		
		for(var i=0;i<num;i++)
		{
			arr.push(randomcolor());
		}
		
		return arr;
}

function randomcolor(){
		
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);	
	var b = Math.floor(Math.random() * 256);	
	
	var random= "rgb(" + r + ", " + g + ", " + b +")";
	return random;
}

resetbutton.addEventListener("click",function(){
	colors=generateRandomColors(numsquares);
	pickedColor = pickcolor();
	document.getElementById("main").textContent = pickedColor;
	message.textContent = " ";
	for(var i=0;i<squares.length;i++)
	{
	//intialize colors
	squares[i].style.backgroundColor = colors[i];
	}
	document.querySelector("h1").style.backgroundColor = "steelblue";
	resetbutton.textContent = "New Colours";
});
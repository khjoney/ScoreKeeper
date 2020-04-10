

var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1DisplayScore");
var p2Display = document.querySelector("#p2DisplayScore");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click",function(){
	if (!gameOver) {
		p1Score++;
		if(p1Score === winningScore){
			//p1Display.classlist.add("winner");
			gameOver = true;
			//alert("Player 1 won!");
			
		}
		p1Display.textContent = p1Score;
		//alert("Player 1 won!");
	}
});
	

	//alert("Clicked!");

p2Button.addEventListener("click",function()
{
	//alert("this is a test");
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore)
		{
			//p2Display.classlist.add("winner");
			gameOver = true;
			//alert("Player 2 won!");
			
		}
		p2Display.textContent = p2Score;


	}
	
});

resetButton.addEventListener("click",function()
{
	//console.log("RESET CLICKED");
	p1Score = 0;
	p2Score =0;
	p1DisplayScore.textContent =0;
	p2DisplayScore.textContent = 0;
	gameOver = false;
});


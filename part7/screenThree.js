	  
	  //generate exploration grid
	  //@ represents player location
	  //collum value 0/1: 0 = not visited, 1 = visted 
	  function generateGrid(size){
		const grid = document.getElementById("grid");
			for(let row = 0; row <= size; row++){
				  var nRow = grid.insertRow(row);
				  nRow.id = row;
					for(let col = 0; col <=size; col++)
					{
						 var nCol = nRow.insertCell(col);
						 nCol.id = col;
						 nCol.value = "0"
						 nCol.name = "empty";
						 nCol.innerHTML = "*";
						 nCol.style.opacity = "0";
					}
		}
		//Create points of intrest
		for(let i = 0; i < (35*35)*.24; i++)
		{
			let row = Math.floor(Math.random() * 36);
			let col = Math.floor(Math.random() * 36);
			let x = document.getElementById("grid").rows[row].cells[col];
			if(x.name == "empty")
			{
				x.innerHTML = "?";
				x.name = "planet";
			}
		}
		
		//set start position
		let startRow = Math.floor(Math.random() * 36);
		let startCol = Math.floor(Math.random() * 36);
		document.getElementById("playerPosRow").value = startRow;
		document.getElementById("playerPosCol").value = startCol;
		var x = document.getElementById("grid").rows[startRow].cells[startCol];
		//reveal local start add player
		revealArea(startRow,startCol);
		x.style.opacity = "100";
		x.value = "1"
		x.innerHTML = "@";
		document.addEventListener("keydown", myFunction);
	}	
	//player movement	
	function myFunction() {
	let row = document.getElementById("playerPosRow").value;
	let col = document.getElementById("playerPosCol").value;
	if(event.key == "ArrowUp")
	{
			//change leaving tile
			var x = document.getElementById("grid").rows[row].cells[col];
			if(x.name == "empty")
				x.innerHTML = "*";
			else if(x.name == "planet")
				x.innerHTML = "P";

			//check for battle
			x = document.getElementById("grid").rows[row-1].cells[col];
			if(x.innerHTML == "?"){
				startBattle();
			}
			//update player location
			x.innerHTML = "@";
			x.style.opacity = "100";
			x.value = "1";
				
			//update row
			document.getElementById("playerPosRow").value = row-1;
			//pos(document.getElementById("playerPosRow").value, document.getElementById("playerPosCol").value);
			revealArea(document.getElementById("playerPosRow").value,document.getElementById("playerPosCol").value);
			consumeFWF();
			
	}
	if(event.key == "ArrowDown")
	{
			//change leaving tile
			var x = document.getElementById("grid").rows[row].cells[col];
			if(x.name == "empty")
				x.innerHTML = "*";
			else if(x.name == "planet")
				x.innerHTML = "P";

			//check for battle
			x = document.getElementById("grid").rows[row-(-1)].cells[col];
			if(x.innerHTML == "?"){
				startBattle();
			}
			
			//update player location
			x.innerHTML = "@";
			x.style.opacity = "100";
			x.value = "1";
			
			//update row
			document.getElementById("playerPosRow").value = row-(-1);
			//pos(document.getElementById("playerPosRow").value, document.getElementById("playerPosCol").value);
			revealArea(document.getElementById("playerPosRow").value,document.getElementById("playerPosCol").value);
			consumeFWF();
	}
	if(event.key == "ArrowLeft")
	{
			//change leaving tile
			var x = document.getElementById("grid").rows[row].cells[col];
			if(x.name == "empty")
				x.innerHTML = "*";
			else if(x.name == "planet")
				x.innerHTML = "P";


			x = document.getElementById("grid").rows[row].cells[col-1];
			if(x.innerHTML == "?"){
				startBattle();
			}
			
			x.innerHTML = "@";
			x.style.opacity = "100";
			x.value = "1";
			
			//update row
			document.getElementById("playerPosCol").value = col-1;
			revealArea(document.getElementById("playerPosRow").value,document.getElementById("playerPosCol").value);
			//pos(document.getElementById("playerPosRow").value, document.getElementById("playerPosCol").value);
			consumeFWF();
	}
	if(event.key == "ArrowRight")
	{
			var x = document.getElementById("grid").rows[row].cells[col];
			
			if(x.name == "empty")
				x.innerHTML = "*";
			else if(x.name == "planet")
				x.innerHTML = "P";

			x = document.getElementById("grid").rows[row].cells[col-(-1)];
			
			if(x.innerHTML == "?"){
				startBattle();
			}
			
			x.innerHTML = "@";
			x.style.opacity = "100";
			x.value = "1";
			
			//update row
			document.getElementById("playerPosCol").value = col-(-1);
			revealArea(document.getElementById("playerPosRow").value,document.getElementById("playerPosCol").value);
			//pos(document.getElementById("playerPosRow").value, document.getElementById("playerPosCol").value);
			consumeFWF();
	}
}
//consume fuel, water, food
function consumeFWF()
{	//get values from html
	var fuel = document.getElementById("fuel").value;
	var water = document.getElementById("water").value;
	var food = document.getElementById("food").value;
	
	fuel = fuel-1;
	water = water-1;
	food = food-1;
	
	//update values
	document.getElementById("fuel").value = fuel;
	document.getElementById("water").value = water;
	document.getElementById("food").value = food;

	if(fuel <=0 || water <=0 || food <=0)
	{
		killPlayer();
	}
	
}

function startBattle(){
	//prevent movement
	document.removeEventListener("keydown", myFunction);
	let inBattle =  document.getElementById("inBattle");
	
	//set  values and reveal enemy elements
	let enemy = document.getElementById("enemy");
	let enemyHealth = document.getElementById("enemyHealth");
	enemy.hidden = false;
	enemyHealth.hidden = false;
	inBattle.value = "1";
	enemyHealth.value = "100";
	enemy.innerHTML = "Enemy: "+enemyHealth.value;
	
	//fight player
	attackPlayer();
}
function attackPlayer(){
	//reveal player attack button
	let playerAttackButton = document.getElementById("playerAttack");
		playerAttackButton.hidden = false;
	let playerHealth = document.getElementById("health");
	let inBattle =  document.getElementById("inBattle");
	
	//battle is over
	if(inBattle.value == 0)
	{
		battleOver();
	}
	else{
		//battle not over player still alive keep fighting
		playerHealth.value = playerHealth.value - 1;
		playerHealth.innerHTML = playerHealth.value;
		if(playerHealth.value >0 )
		{
			setTimeout(() => {attackPlayer()}, 5000); 
		}
		//player has died 
		else{
			battleOver();
			killPlayer();
		}
	}
}
function playerAttack(){
	let enemy = document.getElementById("enemy");
	let enemyHealth = document.getElementById("enemyHealth");	
	
	enemyHealth.value = enemyHealth.value- 25;
	//enemy has dided battle over
	if(enemyHealth.value <=0)
	{
		document.addEventListener("keydown", myFunction);
		battleOver();
	}
	enemy.innerHTML = "Enemy: "+enemyHealth.value;
}
function battleOver(){
	let inBattle =  document.getElementById("inBattle");
	let enemy = document.getElementById("enemy");
	let enemyHealth = document.getElementById("enemyHealth");
	enemyHealth.hidden = true;
	enemy.hidden = true;
	let playerAttackButton = document.getElementById("playerAttack");
		playerAttackButton.hidden = true;
	inBattle.value = "0";
}

function revealArea(playerRow,playerCol)
{
		
		for(let i = -2; i <3;i++)
		{
			row = +playerRow + +i;
			//get right adjecent col
			for(let k = -1; k < 3	;k++){
				let col = +playerCol + +k;
				if(checkBounds(row,col))
				{
					x = document.getElementById("grid").rows[row].cells[col];
					if(x.value ==0){
						x.style.opacity = ".5";
					}
				}
			}
			//get left adjecent col
			for(let j = -1; j > -3;j--){
				let col = +playerCol + +j;
				if(checkBounds(row,col))
				{
					x = document.getElementById("grid").rows[row].cells[col];
					if(x.value ==0){
						x.style.opacity = ".5";
					}
				}
			}
		}
}
function checkBounds(playerRow,playerCol)
{
	let gridSize = 35;
	if(playerRow >=0 && playerRow <= 35)
	{
		if(playerCol >=0 && playerCol <= 35)
		{
			console.log(playerRow,playerCol);
			return true;
		}
		else
		{
			console.log("OFB",playerRow,playerCol);
			return false;
		}
	}
	else
	{
		console.log("OFB",playerRow,playerCol);
		return false;
	}
	
}


function killPlayer()
{
	document.removeEventListener("keydown", myFunction);
	battleOver();
	let row = document.getElementById("playerPosRow").value;
	let col = document.getElementById("playerPosCol").value;
	var x = document.getElementById("grid").rows[row].cells[col];


	if(x.name == "empty")
		x.innerHTML = "*";
	else if(x.name == "planet")
		x.innerHTML = "?";
}
function pos(row,col){
		console.log(row,col);
}  
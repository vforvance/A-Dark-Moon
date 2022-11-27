	  
//generate exploration grid
//@ represents player location
// grid values
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
		for(let i = 0; i < (35*35)*.05; i++)
		{
			let row = Math.floor(Math.random() * 36);
			let col = Math.floor(Math.random() * 36);
			let x = document.getElementById("grid").rows[row].cells[col];
			if(x.name == "empty")
			{
				x.innerHTML = "?";
				x.name = "unknown";
				x.value = "planet"
			}
		}
		//Create points of intrest
		for(let i = 0; i < (35*35)*.12; i++)
		{
			let row = Math.floor(Math.random() * 36);
			let col = Math.floor(Math.random() * 36);
			let x = document.getElementById("grid").rows[row].cells[col];
			if(x.name == "empty")
			{
				x.innerHTML = "?";
				x.name = "unknown";
				x.value = "ship"
			}
		}
		for(let i = 0; i < (35*35)*.07; i++)
		{
			let row = Math.floor(Math.random() * 36);
			let col = Math.floor(Math.random() * 36);
			let x = document.getElementById("grid").rows[row].cells[col];
			if(x.name == "empty")
			{
				x.innerHTML = "?";
				x.name = "unknown";
				x.value = "flotila"
			}
		}
		
		//set start position
		let startRow = 17;
		let startCol = 17;
		document.getElementById("playerPosRow").value = startRow;
		document.getElementById("playerPosCol").value = startCol;
		var x = document.getElementById("grid").rows[startRow].cells[startCol];
		//reveal local start add player
		revealArea(startRow,startCol);
		x.style.opacity = "100";
		x.name = "home";
		x.innerHTML = "@";
		document.addEventListener("keydown", movement);
		//set old homeworld
}	
//player movement	
function movement() {
	let row = document.getElementById("playerPosRow").value;
	let col = document.getElementById("playerPosCol").value;
	if(event.key == "ArrowUp")
	{
			//change leaving tile
			var x = document.getElementById("grid").rows[row].cells[col];
			changeTile(row,col);

			//check for battle
			x = document.getElementById("grid").rows[row-1].cells[col];
			if(x.innerHTML == "?"){
				startBattle();
			}
			//update player location
			x.innerHTML = "@";
			x.style.opacity = "100";
				
			//update row
			document.getElementById("playerPosRow").value = row-1;
			//pos(document.getElementById("playerPosRow").value, document.getElementById("playerPosCol").value);
			revealArea(document.getElementById("playerPosRow").value,document.getElementById("playerPosCol").value);
			stats(document.getElementById("playerPosRow").value,document.getElementById("playerPosCol").value);
			consumeFWF();
			returnHome(x);
	}
	if(event.key == "ArrowDown")
	{
			//change leaving tile
			var x = document.getElementById("grid").rows[row].cells[col];
			changeTile(row,col);

			//check for battle
			x = document.getElementById("grid").rows[row-(-1)].cells[col];
			if(x.innerHTML == "?"){
				startBattle();
			}
			
			//update player location
			x.innerHTML = "@";
			x.style.opacity = "100";
			
			//update row
			document.getElementById("playerPosRow").value = row-(-1);
			//pos(document.getElementById("playerPosRow").value, document.getElementById("playerPosCol").value);
			revealArea(document.getElementById("playerPosRow").value,document.getElementById("playerPosCol").value);
			stats(document.getElementById("playerPosRow").value,document.getElementById("playerPosCol").value);
			consumeFWF();
			returnHome(x);
	}
	if(event.key == "ArrowLeft")
	{
			//change leaving tile
			var x = document.getElementById("grid").rows[row].cells[col];
			changeTile(row,col);


			x = document.getElementById("grid").rows[row].cells[col-1];
			if(x.innerHTML == "?"){
				startBattle();
			}
			
			x.innerHTML = "@";
			x.style.opacity = "100";
			
			//update row
			document.getElementById("playerPosCol").value = col-1;
			revealArea(document.getElementById("playerPosRow").value,document.getElementById("playerPosCol").value);
			//pos(document.getElementById("playerPosRow").value, document.getElementById("playerPosCol").value);
			stats(document.getElementById("playerPosRow").value,document.getElementById("playerPosCol").value);
			consumeFWF();
			returnHome(x);
	}
	if(event.key == "ArrowRight")
	{
			var x = document.getElementById("grid").rows[row].cells[col];
			changeTile(row,col);

			x = document.getElementById("grid").rows[row].cells[col-(-1)];
			
			if(x.innerHTML == "?"){
				startBattle();
			}
			
			x.innerHTML = "@";
			x.style.opacity = "100";
			
			//update row
			document.getElementById("playerPosCol").value = col-(-1);
			revealArea(document.getElementById("playerPosRow").value,document.getElementById("playerPosCol").value);
			//pos(document.getElementById("playerPosRow").value, document.getElementById("playerPosCol").value);
			stats(document.getElementById("playerPosRow").value,document.getElementById("playerPosCol").value);
			consumeFWF();
			returnHome(x);
	}
}
//consume fuel, water, food
function consumeFWF()
{	//get values from html
	var fuel = document.getElementById("fuel").value;
	
	fuel = fuel-1;
	//update values
	document.getElementById("fuel").value = fuel;
	if(fuel <=0)
	{
		killPlayer();
	}
	
}

function startBattle(){
	//prevent movement
	document.removeEventListener("keydown", movement);
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
		if(playerHealth.value > 0 )
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
		//set tile under player control
		let row = document.getElementById("playerPosRow").value;
		let col = document.getElementById("playerPosCol").value;
		var x = document.getElementById("grid").rows[row].cells[col];
		x.name = x.value;
		//allow player movement
		document.addEventListener("keydown", movement);
		battleLoot(x);
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
function battleLoot(currentPos){
	if(currentPos.name =="ship"){
		var stockFuel = document.getElementById("fuel").value;
		stockFuel = +stockFuel + +3;
		document.getElementById("fuel").value = stockFuel;
	}
	else if(currentPos.name =="flotila")
	{
		var salvageBtn = document.getElementById("salvage").hidden= false;
	}
}
function repair(){
	let repairPacks = document.getElementById("repairPacks").value;
	if(repairPacks > "0" ){
		//add back health
		let health = document.getElementById("health");
		health.value = +health.value + +5;
		if(health.value>=health.max){
			health.value = +1+health.max;
		}
		document.getElementById("health").value = +health;
			//consume repair kit
			repairPacks = repairPacks - 1;
			document.getElementById("repairPacks").value = repairPacks;
			//cooldown
		
	}
}
function salvage(){
	//add loot
	battleLoot();
	//cooldown
}
function fireDeathStar(){
	//destroy planet
	//add planet core
	//cooldown
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
					if(x.style.opacity == "0"){
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
					if(x.style.opacity == "0"){
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
	document.removeEventListener("keydown", movement);
	battleOver();
	let row = document.getElementById("playerPosRow").value;
	let col = document.getElementById("playerPosCol").value;
	changeTile(row,col);
}
function pos(row,col){
		var x = document.getElementById("grid").rows[row].cells[col];
		console.log(row,col);
		console.log(x.name);
} 
function stats(currentPos){
	//have not visted tile
	if(currentPos.opacity != 100)
	{
		//update tiles owned
		let tilesControlled = document.getElementById("spaceControlled").value;
		tilesControlled = +tilesControlled + +1;
		document.getElementById("spaceControlled").value = tilesControlled;
		//tile is a planet
		if(currentPos.name == "planet")
		{
			//update planet controlled
		}
	}
}
function returnHome(currentPos){
	if(currentPos.name =="home")
	{
		document.removeEventListener("keydown", movement);
		//remove player from map
		let stockIron = document.getElementById("ironAmt").value;
		let iron = document.getElementById("iron").value;
		document.getElementById("ironAmt").value = stockIron + iron;

		let stockFuel = document.getElementById("fuelAmt").value;
		let fuel = document.getElementById("fuel").value;
		document.getElementById("fuelAmt").value = stockFuel + fuel;

		let stockRepairPacks = document.getElementById("repairPackAmt").value;
		let repairPacks = document.getElementById("repairPacks").value;
		document.getElementById("repairPackAmt").value = stockRepairPacks +repairPacks;
		//add player inventory to resources 

		//set inventory back to 0
	}
}
function changeTile(row, col){
	
	var x = document.getElementById("grid").rows[row].cells[col];

	if(x.name == "empty")
		x.innerHTML = "*";
	else if(x.name == "home")
		x.innerHTML == "H";
	else if(x.name == "planet"){
		x.innerHTML = "O";
	}
	else if(x.name == "ship"){
		x.name = "empty";
		x.innerHTML = "*";
	}
	else if(x.name == "flotila"){
		x.innerHTML = "G";
	}
	else if(x.name == "unknown")
		x.innerHTML = "?";
} 
function endGame(ending){
	//conquest ending
	if(ending =="0")
	{
		;
	}
	//homebound ending
	if(ending =="1")
	{
		;
	}
}
	  
//generate exploration grid
//@ represents player location
// grid values
function generateGrid(size){
	document.getElementById("grid").style.opacity = ".4";
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
		x.value = "home"
		x.innerHTML = "@"; 
		
		//set old homeworld
		let homeRow = Math.floor(Math.random() * 3);
		let homeCol = Math.floor(Math.random() * 3);
		x = document.getElementById("grid").rows[homeRow].cells[homeCol];
		x.name = "oldHome";
		x.value = "oldHome"
		x.innerHTML = "!";
}	
//player movement	
function movement() {
	let row = document.getElementById("playerPosRow").value;
	let col = document.getElementById("playerPosCol").value;
	if(event.key == "ArrowUp")
	{
			if(checkBounds(row-1,col)){
				//change leaving tile
				var x = document.getElementById("grid").rows[row].cells[col];
				changeTile(x);

				//check for battle
				x = document.getElementById("grid").rows[row-1].cells[col];
				if(x.innerHTML == "?"){
					startBattle(Math.floor(Math.random() * 5,),x);
				}
				if(x.innerHTML == "!"){
					startBattle(5,x);
				}
				
				//update player location
				x.innerHTML = "@";
				stats(x);
				x.style.opacity = "100";
					
				//update row
				document.getElementById("playerPosRow").value = row-1;
				revealArea(document.getElementById("playerPosRow").value,document.getElementById("playerPosCol").value);
				consumeFWF();
				onEnter(x);
		}
	}
	if(event.key == "ArrowDown")
	{	
		if(checkBounds(row-(-1),col)){
			//change leaving tile
			var x = document.getElementById("grid").rows[row].cells[col];
			changeTile(x);

			//check for battle
			x = document.getElementById("grid").rows[row-(-1)].cells[col];
			if(x.innerHTML == "?"){
				startBattle(Math.floor(Math.random() * 5),x);
			}
			else if(x.innerHTML == "!"){
				startBattle(5,x);
			}
			
			//update player location
			x.innerHTML = "@";
			stats(x);
			x.style.opacity = "100";
			
			//update row
			document.getElementById("playerPosRow").value = row-(-1);
			revealArea(document.getElementById("playerPosRow").value,document.getElementById("playerPosCol").value);
			consumeFWF();
			onEnter(x);
		}
	}
	if(event.key == "ArrowLeft")
	{
		if(checkBounds(row,col-1)){
			//change leaving tile
			var x = document.getElementById("grid").rows[row].cells[col];
			changeTile(x);


			x = document.getElementById("grid").rows[row].cells[col-1];
		
			if(x.innerHTML == "?"){
				startBattle(Math.floor(Math.random() * 5),x);
			}
			else if(x.innerHTML == "!"){
				startBattle(5,x);
			}
			
			x.innerHTML = "@";
			stats(x);
			x.style.opacity = "100";
			
			//update row
			document.getElementById("playerPosCol").value = col-1;
			revealArea(document.getElementById("playerPosRow").value,document.getElementById("playerPosCol").value);
			consumeFWF();
			onEnter(x);
		}
	}

	if(event.key == "ArrowRight")
	{
		if(checkBounds(row,col-(-1))){
			var x = document.getElementById("grid").rows[row].cells[col];
			changeTile(x);

			x = document.getElementById("grid").rows[row].cells[col-(-1)];
			console.log(x.name);
			if(x.innerHTML == "?"){
				startBattle(Math.floor(Math.random() * 5),x);
			}
			else if(x.innerHTML == "!"){
				startBattle(5,x);
			}
			
			x.innerHTML = "@";
			stats(x);
			x.style.opacity = "100";
			
			//update row
			document.getElementById("playerPosCol").value = col-(-1);
			revealArea(document.getElementById("playerPosRow").value,document.getElementById("playerPosCol").value);
			consumeFWF();
			onEnter(x);
		}
	}
}
//consume fuel
function consumeFWF()
{	//get values from html
	var fuel = document.getElementById("fuel").value;
	
	fuel = fuel-1;
	//update values
	document.getElementById("fuel").value = fuel;
	if(fuel <0)
	{
		killPlayer();
	}
	
}
//spawn enemy and start battle
function startBattle(difficulty,currentPos){
	let challenge = difficulty;
	let enemyNames = [];
	let difficultyName = ["Weak ","Standard ","Menacing ","Dangerous ","Elite ","Vanguard "];
	if(currentPos.value =="ship")
	{
		enemyNames = ["Cargo ship","Corvette","Frigate","Destroyer","Attack craft","Battleship"];
	}
	else if(currentPos.value =="flotila")
	{
		challenge = challenge +2;
		enemyNames = ["Cargo fleet","Escort fleet","Attack fleet","Strike group","Defense cluster","Battle group"];
	}
	else if(currentPos.value =="planet")
	{
		challenge = challenge +3;
		enemyNames = ["Planetary Cargo fleet","Planetary Escort fleet","Planetary Attack fleet","Planetary Strike group"
			,"Planetary Defense cluster","Planetary Battle group"];
	}
	else if(currentPos.value =="oldHome")
	{
		challenge = challenge +7;
		enemyNames = [" Wanderer Battle Brick"," Wanderer Battle Brick"," Wanderer Battle Brick"," Wanderer Battle Brick"
			,"Wanderer Battle Brick"," Wanderer Battle Brick"];
	}
	//prevent movement
	document.removeEventListener("keydown", movement);
	let inBattle =  document.getElementById("inBattle");
	
	//set  values and reveal enemy elements
	let enemyHealth = document.getElementById("enemyHealth");
	let enemy = document.getElementById("enemy");
	enemyHealth.hidden = false;
	enemy.hidden = false;
	inBattle.value = "1";
	enemyHealth.value = +9+ +Math.floor(Math.random() * challenge)+ +challenge;
	enemy.innerHTML = difficultyName[difficulty]+enemyNames[(Math.floor(Math.random() * 5))];
	
	//fight player // more difficult longer attack start time
	let playerAttackButton = document.getElementById("playerAttack");
		playerAttackButton.hidden = false;
	setTimeout(() => {attackPlayer(challenge);}, (2500)); 
}
//computer attacks player
function attackPlayer(difficulty){
	//reveal player attack button
	let playerHealth = document.getElementById("health");
	let inBattle =  document.getElementById("inBattle");
	
	//battle is over
	if(inBattle.value == 0 ||playerHealth.value <= 0 )
	{
		battleOver();
	}
	else{
		//battle not over player still alive keep fighting
		playerHealth.value = playerHealth.value - Math.ceil(Math.random() * difficulty + +.01)- +difficulty;
		playerHealth.innerHTML = playerHealth.value;
		if(playerHealth.value > 0 )
		{
			setTimeout(() => {attackPlayer(difficulty)}, 12000-(1000*Math.floor(Math.random() * difficulty))); 
		}
		//player has died 
		else{
			battleOver();
			killPlayer();
		}
	}
}
//allow for player to attack
function playerAttack(){
	var salvageBtn = document.getElementById("playerAttack").disabled  = true;
	let playerAttack =  document.getElementById("playerDamage").value;
	let enemyHealth = document.getElementById("enemyHealth");	
	
	enemyHealth.value = enemyHealth.value- (Math.ceil(Math.random() * playerAttack + +.01));
	setTimeout(() => {var salvageBtn = document.getElementById("playerAttack").disabled  = false;}, "8000"-(Math.floor(Math.random() * playerAttack)))
	//enemy has died battle over
	if(enemyHealth.value <=0)
	{
		//set tile under player control
		let row = document.getElementById("playerPosRow").value;
		let col = document.getElementById("playerPosCol").value;
		var x = document.getElementById("grid").rows[row].cells[col];
		x.name = x.value;
		stats(x,true);
		//allow player movement
		document.addEventListener("keydown", movement);
		if(x.name =="ship")
		{
			battleLoot(1);
		}

		battleOver();
		if(x.name =="flotila")
		{
			var salvageBtn = document.getElementById("salvage").hidden= false;
		}
		//and has death star tech
		else if(x.name =="planet" && document.getElementById("playerDamage").value == "16")
		{
			var deathStarBtn = document.getElementById("deathStarFire").hidden= false;
		}
		else if(x.name == "oldHome")
		{
			endGame(1);
		}
	}
	enemyHealth.innerHTML = "Enemy  "+enemyHealth.value;
}
//end combat
function battleOver(){
	let inBattle =  document.getElementById("inBattle");
	let enemyHealth = document.getElementById("enemyHealth");
	let enemy = document.getElementById("enemy");
	enemyHealth.hidden = true;
	enemy.hidden = true;
	let playerAttackButton = document.getElementById("playerAttack");
		playerAttackButton.hidden = true;
	inBattle.value = "0";
}
//gain resources
function battleLoot(diffMod){
	
		var stockFuel = document.getElementById("fuel").value;
		stockFuel = +stockFuel + +1*diffMod;
		document.getElementById("fuel").value = stockFuel;
		
		var stockIron = document.getElementById("iron").value;
		stockIron = +stockIron + +15*diffMod;
		document.getElementById("iron").value = stockIron;
		
		var stockRepair = document.getElementById("repairPacks").value;
		stockRepair = +stockRepair + +2;
		document.getElementById("repairPacks").value = stockRepair;
	
}
//restore ship health
function repair(){
	let repairButton = document.getElementById("repair").disabled = true;
	setTimeout(() => {var salvageBtn = document.getElementById("repair").disabled  = false;}, "6000");
	let repairPacks = document.getElementById("repairPacks").value;
	if(repairPacks > 0 ){
		//add back health
		let health = document.getElementById("health");
		health.value = +health.value + +Math.floor(health.max*.30)+ +2;
		if(health.value>=health.max){
			health.value = health.max;
		}
		document.getElementById("health").value = +health.value;
		//consume repair kit
		repairPacks = repairPacks - 1;
		document.getElementById("repairPacks").value = repairPacks;
			//cooldown
	}
}
//harvest ship graveyard
function salvage(){
	var salvageBtn = document.getElementById("salvage").disabled  = true;
	let usage = Math.floor(Math.random() * 100);
	if(usage <=35)
	{
		let row = document.getElementById("playerPosRow").value;
		let col = document.getElementById("playerPosCol").value;
		var x = document.getElementById("grid").rows[row].cells[col];
		document.getElementById("salvage").hidden = true;
		x.name = "empty";
	}
	//add loot
	battleLoot(10);
	//cooldown	
	setTimeout(() => {var salvageBtn = document.getElementById("salvage").disabled  = false;}, "7000");
}
function land(){
	document.removeEventListener("keydown", movement);
		reset();
		//remove player from map
		let stockIron = document.getElementById("ironAmt").value;
		let iron = document.getElementById("iron").value;
		document.getElementById("ironAmt").value = +stockIron + +iron;

		let stockFuel = document.getElementById("fuelAmt").value;
		let fuel = document.getElementById("fuel").value;
		document.getElementById("fuelAmt").value = +stockFuel + +fuel;

		let stockRepairPacks = document.getElementById("repairPackAmt").value;
		let repairPacks = document.getElementById("repairPacks").value;
		document.getElementById("repairPackAmt").value = +stockRepairPacks + +repairPacks;
		
		let stockPlanetCore = document.getElementById("planetCoreAmt").value;
		let cores = document.getElementById("planetCore").value;
		document.getElementById("planetCoreAmt").value = +stockPlanetCore + +cores;
		//add player inventory to resources 

		//set inventory back to 0
		document.getElementById("repairPacks").value ="0";
		document.getElementById("fuel").value = "0";
		document.getElementById("iron").value = "0";
		document.getElementById("planetCore").value = "0";
}
//remove planet for planet core
function fireDeathStar(){
	let row = document.getElementById("playerPosRow").value;
	let col = document.getElementById("playerPosCol").value;
	var x = document.getElementById("grid").rows[row].cells[col];
	var deathStarBtn = document.getElementById("deathStarFire").hidden = true;
	//destroy planet
	x.name = "shattered";
	//add planet core
	let cores = document.getElementById("planetCore").value;
	document.getElementById("planetCore").value = +cores + +1;
	var stockFuel = document.getElementById("fuel").value;
	
	stockFuel = +stockFuel + +600;
	document.getElementById("fuel").value = stockFuel;
		
	var stockIron = document.getElementById("iron").value;
	stockIron = +stockIron + +700;
	document.getElementById("iron").value = stockIron;
	
	let planetsControlled = document.getElementById("planetControlled").value;
	planetsControlled = +planetsControlled - +1;
	document.getElementById("planetControlled").value = planetsControlled;
}
//reveal local area
function revealArea(playerRow,playerCol){
		
		for(let i = -1; i <2;i++)
		{
			row = +playerRow + +i;
			//get right adjecent col
			for(let k = -1; k < 2	;k++){
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
			for(let j = -1; j > -2;j--){
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
//check boundary of grid
function checkBounds(playerRow,playerCol){
	let gridSize = 35;
	if(playerRow >=0 && playerRow <= 35)
	{
		if(playerCol >=0 && playerCol <= 35)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	else
	{
		return false;
	}
	
}
//remove player and end expedition
function killPlayer(){
	document.removeEventListener("keydown", movement);
	battleOver();
	let row = document.getElementById("playerPosRow").value;
	let col = document.getElementById("playerPosCol").value;
	var x = document.getElementById("grid").rows[row].cells[col];
	//remove player from map
	changeTile(x);
	reset();
	//punish resources 
	let stockIron = document.getElementById("ironAmt").value;
	document.getElementById("ironAmt").value = +stockIron - Math.round(+stockIron*.5);

	let stockFuel = document.getElementById("fuelAmt").value;
	document.getElementById("fuelAmt").value = +stockFuel - Math.round(+stockFuel*.5);

	let stockRepairPacks = document.getElementById("repairPackAmt").value;
	document.getElementById("repairPackAmt").value = +stockRepairPacks - Math.round(+stockRepairPacks*.5);
		
	let stockPlanetCore = document.getElementById("planetCoreAmt").value;
	document.getElementById("planetCoreAmt").value = +stockPlanetCore - Math.round(+stockPlanetCore*.5);
	

	//set inventory back to 0
	document.getElementById("repairPacks").value ="0";
	document.getElementById("fuel").value = "0";
	document.getElementById("iron").value = "0";
	document.getElementById("planetCore").value = "0";
}
//console print position
function pos(row,col){
		var x = document.getElementById("grid").rows[row].cells[col];
		console.log(row,col);
		console.log(x.name);
} 
//update galaxy stats
function stats(currentPos,battleOveride){
	//have not visted tile
	window.getComputedStyle(currentPos).getPropertyValue("opacity")
	if(window.getComputedStyle(currentPos).getPropertyValue("opacity") != "1")
	{
		//update tiles owned
		let tilesControlled = document.getElementById("spaceControlled").value;
		tilesControlled = +tilesControlled + +1;
		document.getElementById("spaceControlled").value = tilesControlled;
	}
	if(battleOveride)
	//tile is a planet
		if(currentPos.name == "planet")
		{
			let planetsControlled = document.getElementById("planetControlled").value;
			planetsControlled = +planetsControlled + +1;
			document.getElementById("planetControlled").value = planetsControlled;
		}
}
//check what tile player entered
function onEnter(currentPos){
	//return to moon
	if(currentPos.name =="home")
	{
		var landBtn = document.getElementById("land").hidden = false;
	
	}
	//if currentPos is graveyad
	if(currentPos.name == "flotila")
	{
		var salvageBtn = document.getElementById("salvage").hidden = false;
	}
	//and has death star tech
	else if(currentPos.name =="planet" && document.getElementById("playerDamage").value == "16")
	{
		var deathStarBtn = document.getElementById("deathStarFire").hidden = false;
	}
}
//update previous space
function changeTile(x){
	var salvageBtn = document.getElementById("salvage").hidden = true;
	var deathStarBtn = document.getElementById("deathStarFire").hidden = true;
	var landBtn = document.getElementById("land").hidden = true;
	//hide all buttons
	if(x.name == "empty")
		x.innerHTML = "*";
	else if(x.name == "home"){
		x.innerHTML = "H";
	}
	else if(x.name == "planet"){
		x.innerHTML = "O";
		console.log(x.name);
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
	else if(x.name == "oldHome")
		x.innerHTML = "!";
	else if(x.name == "shattered"){
		x.innerHTML = "X";
	}
} 

//end the game
function endGame(ending){
	console.log(ending);
	reset();
	document.getElementById("universe");
	fadeOut(document.getElementById("universe"));
	let credits;
	if(ending == 1){
	 credits = document.getElementById("homebound");
	}
	else if (ending == 0 )
	{
	 credits = document.getElementById("conquest");
	}
	credits.style.opacity = 0;
	credits.hidden = false;
	fadein(credits);
}
function fadeOut(op)
{
	let newOpVal = window.getComputedStyle(op).getPropertyValue("opacity") - +.001;
	op.style.opacity = newOpVal;
	if(newOpVal >= "0"){
		setTimeout(() => {fadeOut(op);}, 15	)
	}
	else{
		op.hidden = true
	}
}
function fadein(op)
{
	let newOpVal = +window.getComputedStyle(op).getPropertyValue("opacity") + +.001;
	op.style.opacity = newOpVal;
	if(newOpVal <= 1){
		setTimeout(() => {fadein(op);}, 15	)
	}

}
//reset screen 3 for new expedition
function reset(){
	document.getElementById("shipAction").hidden = true;
	document.getElementById("viewPort").hidden = true;
	document.getElementById("inventory").hidden = true;
	document.getElementById("embarkBtn").hidden = false;
	document.getElementById("grid").style.opacity = ".4";
	document.getElementById("screen1Tab").disabled = false;
	document.getElementById("screen2Tab").disabled = false;
	document.getElementById("sndMessage").disabled = false;

	let startRow = 17;
	let startCol = 17;
	document.getElementById("playerPosRow").value = startRow;
	document.getElementById("playerPosCol").value = startCol;
	var x = document.getElementById("grid").rows[startRow].cells[startCol];
	
	x.innerHTML = "@"; 
	

}
//start expedition
function embark(){
	var fuelAmt = document.getElementById("fuelAmt");
    var repairPackAmt = document.getElementById("repairPackAmt");
	if( fuelAmt.value >= 350 && repairPackAmt.value >= 50)
	{
		fuelAmt.value = parseInt(fuelAmt.value) - 350;
        repairPackAmt.value = parseInt(repairPackAmt.value) - 50;
		
		document.addEventListener("keydown", movement);
		document.getElementById("shipAction").hidden = false;
		document.getElementById("viewPort").hidden = false;
		document.getElementById("inventory").hidden = false;
		document.getElementById("embarkBtn").hidden = true;
		var landBtn = document.getElementById("land").hidden = false;
		document.getElementById("grid").style.opacity = "1";
		document.getElementById("screen1Tab").disabled = true;
		document.getElementById("screen2Tab").disabled = true;
		document.getElementById("sndMessage").disabled = true;

		document.getElementById("repairPacks").value ="5";
		document.getElementById("fuel").value = "50";

		let health = document.getElementById("health");
		health.value = health.max;
	}
}
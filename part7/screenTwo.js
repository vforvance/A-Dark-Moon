//Screen Two

//Buttons
function mineIron() {//adds iron resources on click
    var ironAmt = document.getElementById("ironAmt");
    if(document.getElementById("o2TankAmt").value == 1)
    {
        ironAmt.value = parseInt(ironAmt.value) + 10; //mine 10 iron per click
    }
    else
    {
        ironAmt.value = parseInt(ironAmt.value) + 5; //mine 10 iron per click
    }
    if(ironAmt.value >= 30)
    {
        document.getElementById("buildBtns").style.display = "block"; 
        document.getElementById("o2tankBtn").style.display = "block";
        document.getElementById("collectionBtn").style.display = "block"; 
    }
    
}

function checkPods() {//adds fuel resources on click
    let fuel = document.getElementById("fuelAmt");
    var podAmt = document.getElementById("collectionPodAmt");
    fuel.value = parseInt(fuel.value) + parseInt(podAmt.value); //add amount of collection pods to fuel on check
}


//Village Population Managers
//Jobs
let jobs = document.getElementsByClassName("jobs");
/*jobs indexes
i=0 miner
i=1 operator
i=2 mechanic
  */

//returns current number of villagers in jobs
function getJobPopulation() {
    let jobsPop = 0;
    for (let i = 0; i < jobs.length; i++) {
        jobsPop += parseInt(jobs[i].value);
    }
    return jobsPop;
}

//returns current number villagers as int regardless of jobs
function getPopulation() {
    return parseInt(document.getElementById("population").value);
}

//changes population by n
function populationChange(n) {
    let population = document.getElementById("population");
    population.value = parseInt(population.value) + n;
    minerManager(4);
}

//changes amount of miners from requested number n
function minerManager(n) {
    let miners = document.getElementById("miner");
    miners.value = parseInt(miners.value) + n;

    //sets new maxes for all jobs. This prevents any over or under-changes on jobs
    for (let i = 1; i < jobs.length; i++) {
        jobs[i].max = parseInt(miners.value) + parseInt(jobs[i].value);
    }
}
//returns current number of miners as int
function getMinerPop() {
    return parseInt(document.getElementById("miner").value);
}

//handles change in operators
function operatorManager() {
    let diff = getJobPopulation() - getPopulation();
    //console.log(getJobPopulation() + "-" + getPopulation());

    minerManager(-diff);
}

//handles change in mechanics
function mechanicManager() {
    let diff = getJobPopulation() - getPopulation();

    minerManager(-diff);
}
// timer for every ten seconds
setInterval(autoMine, 10000);
setInterval(autoRepair, 10000);
setInterval(autoFuel, 10000);
//keeps miners mining automatically once you have 5 miners
function autoMine()
{ 
    let miners = document.getElementById("miner");
    for (i = 1; i < miners.value; i++)
    {
        if (miners.value > 12)
        {
            ironAmt.value = parseInt(ironAmt.value) + 5
        }
        else
        { 
            ironAmt.value = parseInt(ironAmt.value) + 2
        }
    }

}
// mechanics creating repair pack automatically 
function autoRepair()
{
    let mechanics = document.getElementById("mechanic");
    for (i= 1; i < mechanics.value; i++)
    {
        if (mechanics.value > 7)
        {
            repairPackAmt.vlaue = parseInt(repairPackAmt.value) + 2 
        }
        else 
        {
            repairPackAmt.value = parseInt(repairPackAmt + 1)
        }

    }

}
// operators "creating fuel"
function autoFuel()
{
    let operators = document.getElementById("operator");
    for (i =1; i < operators.value; i++)
    {
        if (operators.value > 8)
        {
            fuelAmt.value = parseInt(fuelAmt.vlaue) + 5
        }
        else 
        {
            fuelAmt.value = parseInt(fuelAmt.value + 1)
        }
    }
}


//population management works well all around
//I only need to remove the ability to select and type values
//possibly make readonly and attach buttons

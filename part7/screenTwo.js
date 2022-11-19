//Screen Two

//Buttons
function mineIron() {//adds iron resources on click
    document.getElementById("ironAmt").value++;
}

function checkPods() {//adds fuel resources on click
    let fuel = document.getElementById("fuelAmt");
    fuel.value = parseInt(fuel.value) + 5;
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

//population management works well all around
//I only need to remove the ability to select and type values
//possibly make readonly and attach buttons

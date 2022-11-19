//Screen One

function buildCabin() {//this adds cabins and population to village
    //call baseBtnHandler here
    let cabinAmt = document.getElementById("cabinAmt");

    cabinAmt.value ++;
    populationChange(4);
}

//Buttons
function gatherStone() {//adds stone resources on click
    document.getElementById("stoneAmt").value ++;
}

///Screen Two
//Village Population Managers
//Jobs
let jobs = document.getElementsByClassName("jobs");
/*jobs indexes
i=0 gatherer
i=1 hunter
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
    gathererManager(4);
}

//changes amount of gatherers from requested number n
function gathererManager(n) {
    let gatherers = document.getElementById("gatherer");
    gatherers.value = parseInt(gatherers.value) + n;
}
//returns current number of gatherers as int
function getGathererPop() {
    return parseInt(document.getElementById("gatherer").value);
}

//rearragnes jobs to adjust to current request for hunters (+ or -)
function hunterManager() {
    let hunters = document.getElementById("hunter");
    let diff = getJobPopulation() - getPopulation();
    if (diff > 0) {//remove gatherers - add hunters (up button)
        if (getGathererPop() == 0) {//not enough. change reversed
            hunters.value = hunters.value;
        }
        else {//enough. change reconciled
            gathererManager(-1);
        }
    }
    else if (diff < 0) {//add gatherers - remove hunters (down button)
        if (parseInt(hunters.value) == -1) {//not enough. change reversed
            hunters.value++;
        }
        else {//enough. change reconciled
            gathererManager(1);
        }
    }
    //need to change algorithm to .min and .max and use n not just ++/--
}
// having 5 hunters will give you stone every 20 seconds
function autoGather(){
    let hunters = document.getElementbyId ("hunter");
    if (hunters.value = 5) {

        setTimeout(gatherStone, 10000);
    }

}
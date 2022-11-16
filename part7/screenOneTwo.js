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
let jobs = document.getElementsByClassName("jobs");
/*jobs indexes
i=0 gatherer
i=1 hunter
  */


function populationChange(n) {
    let population = document.getElementById("population");

    gathererManager(4);
    for (let i = 0; i < n; i++) {
        population.value++;
    }
}

//rearragnes current popualtion to fit recent request for gatherers
function gathererManager(n) {
    let gatherers = document.getElementById("gatherer");

    if (n > 0) {//add gatherers
        for (let i = 0; i < n; i++) {
            gatherers.value++;
        }
    }
    else if (n < 0) {//remove gatherers
        for (let i = 0; i > n; i--) {
            gatherers.value--;
        }
    }
}

let pastValue = 0;
function hunterManager(n) {
    n = 5//test case
    let hunters = document.getElementById("hunter");
    if (n > pastValue) {//add hunters
        gathererManager(-1);
    }
    else {//remove hunters

    }
}
function buildCabin() {//this adds cabins and population to village
    //call baseBtnHandler here
    let cabinAmt = document.getElementById("cabinAmt");
    let population = document.getElementById("population");
    let gatherer = document.getElementById("gatherer");

    cabinAmt.value ++;
    for (let i = 0; i < 4; i++) {//for some reason += does not work
        population.value++;
        gatherer.value++;
    }
}
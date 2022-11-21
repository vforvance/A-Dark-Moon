//Screen One
function buildO2Tank()
{
    var ironAmt = document.getElementById("ironAmt");
    o2Btn = document.getElementById("o2tankBtn");
    o2Btn.style.opacity = "0.5";
    o2Btn.disabled = true; 
    //change o2 tank amount to 1 and diable button
    document.getElementById("o2TankAmt").value = 1;
    ironAmt.value -= 30; 
}

function buildPod()
{
    collectBtn = document.getElementById("collectionBtn");
    collectAmt = document.getElementById("collectionPodAmt");
    ironAmt = document.getElementById("ironAmt");
    if(collectAmt.value >= 10) //limit pods to 10
    {
        collectBtn.style.opacity = "0.5";
        collectBtn.disabled = true;
    }
    else
    {
        //decrease iron amount by 10, increasing by 10 with each purchase
        ironAmt.value = ironAmt.value - (10 + 10*collectAmt.value); 
        collectAmt.value ++; 
    }
}

function buildShip()
{
    var shipBtn = document.getElementById("shipBtn");
    var shipAmt = document.getElementById("shipAmt");
    var ironAmt = document.getElementById("ironAmt");
    var popAmt = document.getElementById("population");

    if(shipAmt.value < 10)
    {
        shipAmt.value++;
        popAmt.value = parseInt(popAmt.value) + 4;//increase pop by 4 each click
        ironAmt.value = ironAmt.value - (50*shipAmt.value); //increase cost by 50
    }
    else
    {
        shipBtn.style.opacity = "0.5";
        shipBtn.disabled = true;
    }
}

function buildRefinery()
{
    ironAmt = document.getElementById("ironAmt");
    fuelAmt = document.getElementById("fuelAmt");
    refineryBtn = document.getElementById("refineryBtn");
    refineryAmt = document.getElementById("refineryAmt");

    ironAmt.value = parseInt(ironAmt.value) - 200;
    fuelAmt.value = parseInt(fuelAmt.value) - 100; 
    refineryAmt.value++;

    refineryBtn.style.opacity = "0.5";
    refineryBtn.disabled = true; 
}

function buildMechanic()
{
    ironAmt = document.getElementById("ironAmt");
    fuelAmt = document.getElementById("fuelAmt");
    mechanicBtn = document.getElementById("mechanicBtn");
    mechanicAmt = document.getElementById("mechanicAmt");
    
    ironAmt.value = parseInt(ironAmt.value) - 200;
    fuelAmt.value = parseInt(fuelAmt.value) - 200; 
    mechanicAmt.value++;

    mechanicBtn.style.opacity = "0.5";
    mechanicBtn.disabled = true; 
}

function buildSpaceHub()
{
    ironAmt = document.getElementById("ironAmt");
    fuelAmt = document.getElementById("fuelAmt");
    spaceHubBtn = document.getElementById("spaceHubBtn");
    spaceHubAmt = document.getElementById("spaceHubAmt");

    ironAmt.value = parseInt(ironAmt.value) - 400;
    fuelAmt.value = parseInt(fuelAmt.value) - 200; 
    spaceHubAmt.value++;

    spaceHubBtn.style.opacity = "0.5";
    spaceHubBtn.disabled = true; 
}
//Screen One
function buildO2Tank()
{
    var ironAmt = document.getElementById("ironAmt");
    var o2Btn = document.getElementById("o2tankBtn");
    if(ironAmt.value >= 30)
    {
        o2Btn.style.opacity = "0.5";
        o2Btn.disabled = true; 
        //change o2 tank amount to 1 and diable button
        document.getElementById("o2TankAmt").value = 1;
        ironAmt.value -= 30;
    } 
}

function buildPod()
{
    var collectBtn = document.getElementById("collectionBtn");
    var collectAmt = document.getElementById("collectionPodAmt");
    var ironAmt = document.getElementById("ironAmt");
    if(collectAmt.value >= 10) //limit pods to 10
    {
        collectBtn.style.opacity = "0.5";
        collectBtn.disabled = true;
    }
    else
    {
        if(ironAmt.value >= (10 + 10*collectAmt.value))
        {
            //decrease iron amount by 10, increasing by 10 with each purchase
            ironAmt.value = ironAmt.value - (10 + 10*collectAmt.value); 
            collectAmt.value ++; 
        }
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
        if(ironAmt.value >= (50 + 50*shipAmt.value))
        {
            ironAmt.value = ironAmt.value - (50 + 50*shipAmt.value); //increase cost by 50
            shipAmt.value++;
            popAmt.value = parseInt(popAmt.value) + 4;//increase pop by 4 each click
            
        }
    }
    else
    {
        shipBtn.style.opacity = "0.5";
        shipBtn.disabled = true;
    }
}

function buildRefinery()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");
    var refineryBtn = document.getElementById("refineryBtn");
    var refineryAmt = document.getElementById("refineryAmt");

    if(ironAmt.value >= 200 && fuelAmt.value >= 100)
    {
        ironAmt.value = parseInt(ironAmt.value) - 200;
        fuelAmt.value = parseInt(fuelAmt.value) - 100; 
        refineryAmt.value++;

        refineryBtn.style.opacity = "0.5";
        refineryBtn.disabled = true;
    } 
}

function buildMechanic()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");
    var mechanicBtn = document.getElementById("mechanicBtn");
    var mechanicAmt = document.getElementById("mechanicAmt");
    
    if(ironAmt.value >= 200 && fuelAmt.value >= 200)
    {
        ironAmt.value = parseInt(ironAmt.value) - 200;
        fuelAmt.value = parseInt(fuelAmt.value) - 200; 
        mechanicAmt.value++;

        mechanicBtn.style.opacity = "0.5";
        mechanicBtn.disabled = true; 
    }
}

function buildSpaceHub()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");
    var spaceHubBtn = document.getElementById("spaceHubBtn");
    var spaceHubAmt = document.getElementById("spaceHubAmt");

    if(ironAmt.value >= 400 && fuelAmt.value >= 200)
    {
        ironAmt.value = parseInt(ironAmt.value) - 400;
        fuelAmt.value = parseInt(fuelAmt.value) - 200; 
        spaceHubAmt.value++;

        spaceHubBtn.style.opacity = "0.5";
        spaceHubBtn.disabled = true; 
    }
}
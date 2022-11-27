//bool to control this on or off
//true hides all objects
//false displays everything
let boolStart = true;

function startGame(){
    if(boolStart == false)
    {
    //display screen 1 and hide the rest
    document.getElementById("screen1").style.display = "block"; //
    document.getElementById("screen2").style.display = "none"; //
    document.getElementById("screen3").style.display = "none"; //

    //hide resource table
    document.getElementById("resourceTable").style.display = "none"; //
    //elements in resource table
    document.getElementById("ironAmt").style.display = "none"; //
    document.getElementById("fuelAmt").style.display = "none"; //
    document.getElementById("repairPackAmt").style.display = "none"; //
    document.getElementById("planetCoreAmt").style.display = "none";

    //hide objects on screen 1
    document.getElementById("buildBtns").style.display = "none"; //
    //elements in buildBtns
    document.getElementById("o2tankBtn").style.display = "none"; //
    document.getElementById("collectionBtn").style.display = "none"; //
    document.getElementById("shipBtn").style.display = "block"; //
    document.getElementById("refineryBtn").style.display = "none"; //
    document.getElementById("mechanicBtn").style.display = "none"; //
    document.getElementById("spaceHubBtn").style.display = "none"; //

    document.getElementById("buyBtns").style.display = "none"; //
    //elements in buyBtns
    document.getElementById("ironBtn").style.display = "none"; //
    document.getElementById("fuelBtn").style.display = "none"; //
    document.getElementById("repairPackBtn").style.display = "none"; //
    document.getElementById("navBtn").style.display = "none"; //
    document.getElementById("health1Btn").style.display = "none"; //
    document.getElementById("health2Btn").style.display = "none"; //
    document.getElementById("dmg1Btn").style.display = "none"; //
    document.getElementById("dmg2Btn").style.display = "none"; //
    document.getElementById("deathStarBtn").style.display = "none";

    document.getElementById("itemTable").style.display = "none"; //
    //elements in item table
    document.getElementById("o2TankAmt").style.display = "none"; //
    document.getElementById("navComputerAmt").style.display = "none"; //
    document.getElementById("health1Amt").style.display = "none"; //
    document.getElementById("health2Amt").style.display = "none"; //
    document.getElementById("damage1Amt").style.display = "none"; //
    document.getElementById("damage2Amt").style.display = "none"; //
    document.getElementById("deathStarAmt").style.display = "none";

    //hide objects on screen 2
    document.getElementById("screen2Tab").style.display = "none"; //
    
    document.getElementById("pageTwoBtns").style.display = "none"; //
    //elements in page 2 buttons
    document.getElementById("mineIron").style.display = "none"; //
    document.getElementById("checkPods").style.display = "none"; //

    document.getElementById("jobTable").style.display = "none"; //
    //elements in job table
    document.getElementById("miner").style.display = "none"; //
    document.getElementById("operator").style.display = "none"; //
    document.getElementById("mechanic").style.display = "none"; //
   
    document.getElementById("villageTable").style.display = "none"; //
    //elements in villageTable
    document.getElementById("collectionPodAmt").style.display = "none"; //
    document.getElementById("shipAmt").style.display = "block"; //
    document.getElementById("mechanicAmt").style.display = "none"; //
    document.getElementById("refineryAmt").style.display = "none"; //
    document.getElementById("spaceHubAmt").style.display = "none"; //
    document.getElementById("population").style.display = "none"; //

    
    //hide objects on screen 3
    document.getElementById("screen3Tab").style.display = "none"; //
    //elements in screen 3
    
    }
}

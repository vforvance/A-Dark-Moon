function buyIron()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");

    if(fuelAmt.value >= 20)
    {
        ironAmt.value = parseInt(ironAmt.value) + 10;
        fuelAmt.value = parseInt(fuelAmt.value) - 20;
    }
}

function buyFuel()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");

    if(ironAmt.value >= 50)
    {
        ironAmt.value = parseInt(ironAmt.value) - 50;
        fuelAmt.value = parseInt(fuelAmt.value) + 20;
    }
}

function buyRepairPack()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");
    var repairPackAmt = document.getElementById("repairPackAmt");

    if(ironAmt.value >= 100 && fuelAmt.value >= 100)
    {
        ironAmt.value = parseInt(ironAmt.value) - 100;
        fuelAmt.value = parseInt(fuelAmt.value) - 100;
        repairPackAmt.value = parseInt(repairPackAmt.value) + 10;
    }
}

function buyNavCPU()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");
    var repairPackAmt = document.getElementById("repairPackAmt");
    var navComputerAmt = document.getElementById("navComputerAmt");
    var navBtn = document.getElementById("navBtn");

    if(ironAmt.value >= 500 && fuelAmt.value >= 300 && repairPackAmt.value >= 100)
    {
        ironAmt.value = parseInt(ironAmt.value) - 500;
        fuelAmt.value = parseInt(fuelAmt.value) - 300;
        repairPackAmt.value = parseInt(repairPackAmt.value) - 100;
        navComputerAmt.value = parseInt(navComputerAmt.value) + 1;

        navBtn.style.opacity = "0.5";
        navBtn.disabled = true; 

        //display exploration stuff
        document.getElementById("screen3").style.display = "block";
        document.getElementById("health1Btn").style.display = "block";
        document.getElementById("dmg1Btn").style.display = "block";
        document.getElementById("navComputerAmt").style.display = "block";
        document.getElementById("screen3Tab").style.display = "block";


    }
}

function buyHealth1()
{   
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");
    var repairPackAmt = document.getElementById("repairPackAmt");
    var health1Amt = document.getElementById("health1Amt");
    var heatlh1Btn = document.getElementById("health1Btn");

    if(ironAmt.value >= 500 && fuelAmt.value >= 500 && repairPackAmt.value >= 200)
    {
        ironAmt.value = parseInt(ironAmt.value) - 500;
        fuelAmt.value = parseInt(fuelAmt.value) - 500;
        repairPackAmt.value = parseInt(repairPackAmt.value) - 200;
        health1Amt.value = parseInt(health1Amt.value) + 1;

        heatlh1Btn.style.opacity = "0.5";
        heatlh1Btn.disabled = true; 

        //display health1 amount
        document.getElementById("health1Amt").style.display = "block";
        document.getElementById("health2Btn").style.display = "block";

    }
}

function buyHealth2()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");
    var repairPackAmt = document.getElementById("repairPackAmt");
    var health2Amt = document.getElementById("health2Amt");
    var heatlh2Btn = document.getElementById("health2Btn");

    if(ironAmt.value >= 750 && fuelAmt.value >= 750 && repairPackAmt.value >= 400 && health1Amt.value >= 1)
    {
        ironAmt.value = parseInt(ironAmt.value) - 750;
        fuelAmt.value = parseInt(fuelAmt.value) - 750;
        repairPackAmt.value = parseInt(repairPackAmt.value) - 400;
        health2Amt.value = parseInt(health2Amt.value) + 1;

        heatlh2Btn.style.opacity = "0.5";
        heatlh2Btn.disabled = true; 

        //display health2 stats
        document.getElementById("health2Amt").style.display = "block";

    }
}

function buyDmg1()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");
    var repairPackAmt = document.getElementById("repairPackAmt");
    var damage1Amt = document.getElementById("damage1Amt");
    var damage1Btn = document.getElementById("dmg1Btn");

    if(ironAmt.value >= 500 && fuelAmt.value >= 500 && repairPackAmt.value >= 200)
    {
        ironAmt.value = parseInt(ironAmt.value) - 500;
        fuelAmt.value = parseInt(fuelAmt.value) - 500;
        repairPackAmt.value = parseInt(repairPackAmt.value) - 200;
        damage1Amt.value = parseInt(damage1Amt.value) + 1;

        damage1Btn.style.opacity = "0.5";
        damage1Btn.disabled = true; 

        //display dmg1 stats
        document.getElementById("damage1Amt").style.display = "block";
        document.getElementById("dmg2Btn").style.display = "block";
    }
}

function buyDmg2()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");
    var repairPackAmt = document.getElementById("repairPackAmt");
    var damage2Amt = document.getElementById("damage2Amt");
    var damage2Btn = document.getElementById("dmg2Btn");

    if(ironAmt.value >= 750 && fuelAmt.value >= 750 && repairPackAmt.value >= 400 && damage1Amt.value >= 1)
    {
        ironAmt.value = parseInt(ironAmt.value) - 750;
        fuelAmt.value = parseInt(fuelAmt.value) - 750;
        repairPackAmt.value = parseInt(repairPackAmt.value) - 400;
        damage2Amt.value = parseInt(damage2Amt.value) + 1;

        damage2Btn.style.opacity = "0.5";
        damage2Btn.disabled = true; 

        //display dmg2 stats
        document.getElementById("damage2Amt").style.display = "block";

    }
}

function buyDeathStar()
{
    var ironAmt = document.getElementById("ironAmt");
    var fuelAmt = document.getElementById("fuelAmt");
    var repairPackAmt = document.getElementById("repairPackAmt");
    var planetCoreAmt = document.getElementById("planetCoreAmt");
    var deathStarAmt = document.getElementById("deathStarAmt");
    var deathStarBtn = document.getElementById("deathStarBtn");

    if(ironAmt.value >= 1000 && fuelAmt.value >= 1000 && repairPackAmt.value >= 1000 && planetCoreAmt.value >= 10)
    {
        ironAmt.value = parseInt(ironAmt.value) - 1000;
        fuelAmt.value = parseInt(fuelAmt.value) - 1000;
        repairPackAmt.value = parseInt(repairPackAmt.value) - 1000;
        planetCoreAmt.value = parseInt(planetCoreAmt.value) - 10;
        deathStarAmt.value = parseInt(deathStarAmt.value) + 1;

        deathStarBtn.style.opacity = "0.5";
        deathStarBtn.disabled = true; 
    }
}

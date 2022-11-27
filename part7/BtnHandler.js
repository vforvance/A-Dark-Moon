//function testing timer and button display
//is general and can be applied to any button
function baseBtnHandler(btnName) {
    btnName.style.opacity = "0.5";
    btnName.disabled = true;
    //document.getElementById("ironAmt").value ++;

    setTimeout(() => {
        btnName.style.opacity = "1.0";
        btnName.disabled = false;
    }, 5000);
}; 

//opening button funciton
//display iron collection after 5 clicks
function sndMessage()
{
    var sndMessageBtn = document.getElementById("sndMessage");
    sndMessageBtn.value++;
    if(sndMessageBtn.value == 5)
    {

        document.getElementById("screen2Tab").style.display = "block";
        document.getElementById("mineIron").style.display = "block";
        document.getElementById("resourceTable").style.display = "block";
        document.getElementById("ironAmt").style.display = "block";
        document.getElementById("planetCoreAmt").style.display = "block";
    }
}
	//Update the text log 
function eventText(logText) {
    //store all text paragraphs
    textNodes = document.getElementById('eventText').children; 
        
        //iterate through textnodes
        for(let i = textNodes.length-1; i != 0; i--){
            textNodes[i].innerText = textNodes[i-1].innerText;
            textNodes[i].style.opacity = ((textNodes.length-i)/textNodes.length);
            }
            //add current event to the top
            textNodes[0].innerText = logText;
  }
  //stores event text 
  function Events(eventId) {
    if (eventId == 0) {//Look around button pg1
        let lookAround = ["the moon is dark and barren", "the lonely sun illuminates the moon's surface", "the moon is still and silent"];
        return lookAround[Math.floor(Math.random()*lookAround.length)];
    }
    else if (eventId == 1) {//gather iron pg2
        let gatherIron = ["metal scraps litter the ground", "a large chunk of metal lays in a crater"];
        return gatherIron[Math.floor(Math.random()*gatherIron.length)];
    }
    else if (eventId == 2) {//check pods pg2
        let checkPods = ["the pods are overflowing with collected fuel", "fuel quitely whizzes into the pods"];
        return checkPods[Math.floor(Math.random()*checkPods.length)];
    }
    else if (eventId == 3) {//build O2 tank pg 1
        return "a tank to hold more oxygen";
    }
    else if (eventId == 4) {//build collection pod pg1
        return "more pods to collect more fuel from space";
    }
    else if (eventId == 5) {//build ship pg1
        return "a ship is constructed and 4 villagers take refuge";
    }
    else if (eventId == 6) {//build refinery pg1
        return "the fuel refinery is built hovering off the surface of the moon";
    }
    else if (eventId == 7) {//build mechanic shop pg1
        return "a mechanic shop stands as ships flow in and out";
    }
    else if (eventId == 8) {//build space hub pg1
        return "a large space hub orbits the moon, buzzing with traders";
    }
    else if (eventId == 9) {//player attacks w/ ship
        let attack = ["missles and kenetic batteries fire into the void", "silent lasers glitter through deep space", "the hull creaks from combat"];
        return attack[Math.floor(Math.random()*attack.length)];
    }
    else if (eventId == 10) {//player repairs the ship
        let repair = ["attempts are made to hold the ship together", "hasty patch work is done on the hull"];
        return repair[Math.floor(Math.random()*repair.length)];
    }
    else if (eventId == 11) {//player salavages a ship graveyard
        let salvage = ["a mass of dead ships lie silent", "salvaging crew scour the ruined ships", "old hulks are torn and gutted"];
        return salvage[Math.floor(Math.random()*salvage.length)];
    
    }
    else if (eventId == 12) {//player destroys a planet
        return"the planet begins to crack and glow before detonating";
    
    }
    else if (eventId == 13) {//player destroys a planet
        return"expedition ship returns to the desolate moon";
    
    }
  }
 
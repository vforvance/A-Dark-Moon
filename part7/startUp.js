//bool to control this on or off
//true hides all objects
//false displays everything
let boolStart = false

function startGame(){
    if(boolStart == true)
    {
    //display screen 1 and hide the rest
    document.getElementById("screen1").style.display = "block";
    document.getElementById("screen2").style.display = "none";
    document.getElementById("screen3").style.display = "none";

    //hide resource table
    document.getElementById("resourceTable").style.display = "none";
    //hide objects on screen 1
    document.getElementById("buildBtns").style.display = "none";
    document.getElementById("craftBtns").style.display = "none";
    document.getElementById("buyBtns").style.display = "none";
    document.getElementById("itemTable").style.display = "none";
    
    //hide objects on screen 2
    document.getElementById("screen2Tab").style.display = "none";
    document.getElementById("pageTwoBtns").style.display = "none";
    document.getElementById("jobTable").style.display = "none";
    document.getElementById("villageTable").style.display = "none";
    
    //hide objects on screen 3
    document.getElementById("screen3Tab").style.display = "none";
    }
}

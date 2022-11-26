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
  function Events(eventID) {
    if(eventID == 0)
    {
        let fireEvents = ['message sent','sending message','waiting...'];
        return(fireEvents[Math.floor(Math.random()*fireEvents.length)]);
    }
    if(eventID == 1)
    {
        let meTooEvents = ['floor creaks','metal walls are cold','they are restless'];
        document.getElementById("ironAmt").value = document.getElementById("ironAmt").value - 2;
        return(meTooEvents[Math.floor(Math.random()*meTooEvents.length)]);
    }
  }
 
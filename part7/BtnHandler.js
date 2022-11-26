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
        document.getElementById("screen2").style.display = "block";
        document.getElementById("pageTwoBtns").style.display = "block";
        document.getElementById("mineIron").style.display = "block";
        document.getElementById("resourceTable").style.display = "block";
        document.getElementById("ironAmt").style.display = "block";
    }
}
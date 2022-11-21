//Screen One
function o2Tank()
{
    o2Btn = document.getElementById("o2tankBtn");
    o2Btn.style.opacity = "0.5";
    o2Btn.disabled = true; 
    //change o2 tank amount to 1 and diable button
    document.getElementById("o2TankAmt").value = 1; 
}

function collectionPod()
{
    collectBtn = document.getElementById("collectionBtn");
    collectAmt = document.getElementById("collectionPodAmt").value;
    ironAmt = document.getElementById("ironAmt").value;
    if(collectAmt < 10)
    {
        //decrease iron amount by 10, increasing by 10 with each purchase
        ironAmt = ironAmt - (10 + 10*collectAmt); 
        collectAmt ++; 
    }
    else
    {
        collectBtn.style.opacity = "0.5";
        collectBtn.disabled = true;
    }
}
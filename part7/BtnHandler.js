//function testing timer and button display
//is general and can be applied to any button
function baseBtnHandler(btnName) {
    btnName.style.opacity = "0.5";
    btnName.disabled = true;
    document.getElementById("ironAmt").value ++;

    setTimeout(() => {
        btnName.style.opacity = "1.0";
        btnName.disabled = false;
    }, 5000);
}; 
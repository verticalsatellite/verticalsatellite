function sendMail() {
    let emailBody= document.getElementById("email").value
    open("mailto:mfore048@uOttawa.ca?subject=Vertical%20Satellite%20Inquiry&body="+emailBody);
    document.getElementById("email").value = ""
}

function reload() {
    document.getElementById("email").value = ""
}

window.onload = reload();
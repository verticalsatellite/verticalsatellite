function sendMail() {
    let emailBody= document.getElementById("email").value
    open("mailto:mfore048@uOttawa.ca?subject=VerticalSatellite%20Inquiry&body="+emailBody);
    document.location.href = "Contact.html"
}

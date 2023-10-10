function    Ecrire(){
    var valeur=docuement.getElementById("edit").value;
    var client = new XMLHttpRequest();
    client.open("POST","Client_udp.php", false);
    donneesJson = '{"univers":"0","addresseé:"0","valeur":"'+valeur+'"}';
    client.send(donneesJson)



}
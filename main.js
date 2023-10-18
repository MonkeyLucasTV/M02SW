function    Ecrire(){
    var valeur=document.getElementById("edit").value;
    var client = new XMLHttpRequest();
    client.open("POST","client_udp.php", false);
    donneesJson = '{"univers":"0","addresse":"0","valeur":"'+valeur+'"}';
    console.log(donneesJson);
    client.send(donneesJson);



}
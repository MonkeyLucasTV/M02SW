function    Ecrire(){
    var valeur=document.getElementById("edit").value;
    var client = new XMLHttpRequest();
    client.open("POST","client_udp.php", false);
    donneesJson = '{"univers":"0","adresse":"1","valeur":"'+valeur+'"}';
    console.log(donneesJson);
    client.send(donneesJson);



}


function AES_encryptage() {
    var adressedmx = document.getElementById("adresse").value;
    console.log({adressedmx})
    var universdmx = document.getElementById("univers").value;
    // la clé
    var key = CryptoJS.enc.Hex.parse("0123456789abcdef0123456789abcdef");
    // vecteur d'init
    var iv = CryptoJS.enc.Hex.parse("abcdef9876543210abcdef9876543210");
    var texte_encrypte = CryptoJS.AES.encrypt(document.getElementById("edit").value , key , {iv:iv});
    document.getElementById("AEStext").innerHTML = texte_encrypte;
    // texte convertie en 64bit
    encrypted =  texte_encrypte.ciphertext.toString(CryptoJS.enc.Base64);
    var xh = new XMLHttpRequest();
    xh.onreadystatechange = function() {
        if (xh.readyState == 4 && xh.status == 200) {
            console.debug("REPONSE : " + xh.responseText);
        }
    }
    xh.open("POST", "client_udp.php", true);
    xh.setRequestHeader("Content-type", "application/json");
    xh.send('{"univers":"'+universdmx+'", "adresse":"'+adressedmx+'", "encrypted":"'+encrypted+'"}');
}

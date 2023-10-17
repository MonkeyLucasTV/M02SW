console.debug("Test d'affichage d'un msg !")
var message = "La sommme fait : ";
var val1 = 15;
var val2 = 4;
var resultat = val1 + val2;
console.log("Val1 vaut : " + val1);
console.log("Val2 vaut : " + val2);
console.log("La somme fait : " + resultat);
console.log("La somme fait : " + val1 + val2);


/*function Mon_popup(){
    alert("Gestion de l'evenement 'mouse over' sur mon bouton");
}
*/
function TrameValide() {
    var trameHexa = document.getElementById("edit");
    var trame = trameHexa.value;
    var button = document.getElementById("boutton");
    button.disable = false;
    var queDeLHexa = true;
    var respecttaille = true
    console.log("C" > "B")

    if (trame.length % 2 == 0) {
        document.getElementById("longueur").className = "vert";
        console.log(document.getElementById("longueur").className + "lenght");
        respecttaille = true;
    }
    else {
        document.getElementById("longueur").className = "rouge";
        console.log(document.getElementById("longueur").className + "lenght");
        respecttaille = false;
    }


    for (let i = 0; i < trame.length; i++) {
        if (trame[i] >= 0 && trame[i] <= 9 || trame.charAt(i) >= "A" && trame.charAt(i) <= "F") {
            document.getElementById("hexa").className = "vert";
            console.log("bon");
            queDeLHexa = true;
        }
        else {
            console.log("pas bon " + trame[i]);
            document.getElementById("hexa").className = "rouge";
            queDeLHexa = false;
            break;
        }
    }


    if (queDeLHexa == false || respecttaille == false) {
        console.log("couleur en" + document.getElementById("longueur").className);
        button.disabled = true
    }
    else {
        console.log("couleur en" + document.getElementById("longueur").className);
        button.disabled = false;
    }


}


function recupCanal(){
    var canaux = document.getElementById("canal").value;
    console.log(canaux)
    return Number(canaux);
}


function Sc1(){
    var s1 = document.getElementById("scrollbar1");

        var CanalDepart = recupCanal();
        var trameHexa = document.getElementById("edit");
        var trame = trameHexa.value;
        console.log({trame:trame})
        var entier = Math.abs(Number(s1.value)).toString(16).toUpperCase();
        console.log({entier:entier});
        const numeroCanal = CanalDepart + 1;
        if (s1.value<16) entier= "0"+ entier;
        var indice=(numeroCanal-1)*2;
        console.log(trame.substring(0,indice)+entier+trame.substring(indice+2,trame.length)+ " AYAYAYAYA")
        trame=trame.substring(0,indice)+entier+trame.substring(indice+2,trame.length);
        document.getElementById("edit").value= trame;
        Ecrire();
    
        
}


function Sc2(){
var s2 = document.getElementById("scrollbar2");

    var CanalDepart = recupCanal();
    var trameHexa = document.getElementById("edit");
    var trame = trameHexa.value;
    console.log({trame:trame})
    var entier = Math.abs(Number(s2.value)).toString(16).toUpperCase();
    console.log({entier:entier});
    const numeroCanal =  CanalDepart + 2;
    if (s2.value<16) entier= "0"+ entier;
    var indice=(numeroCanal-1)*2;
    console.log(trame.substring(0,indice)+entier+trame.substring(indice+2,trame.length)+ " AYAYAYAYA")
    trame=trame.substring(0,indice)+entier+trame.substring(indice+2,trame.length);
    document.getElementById("edit").value= trame;
    Ecrire();

}


function Sc3(){
var s3 = document.getElementById("scrollbar3");

    var CanalDepart = recupCanal();
    var trameHexa = document.getElementById("edit");
    var trame = trameHexa.value;
    console.log({trame:trame})
    var entier = Math.abs(Number(s3.value)).toString(16).toUpperCase();
    console.log({entier:entier});
    const numeroCanal = CanalDepart + 3;
    if (s3.value<16) entier= "0"+ entier;
    var indice=(numeroCanal-1)*2;
    console.log(trame.substring(0,indice)+entier+trame.substring(indice+2,trame.length)+ " AYAYAYAYA")
    trame=trame.substring(0,indice)+entier+trame.substring(indice+2,trame.length);
    document.getElementById("edit").value= trame;
    Ecrire();
}


function Sc4(){
var s4 = document.getElementById("scrollbar4");
    var CanalDepart = recupCanal();
    var trameHexa = document.getElementById("edit");
    var trame = trameHexa.value;
    console.log({trame:trame})
    var entier = Math.abs(Number(s4.value)).toString(16).toUpperCase();
    console.log({entier:entier});
    const numeroCanal = CanalDepart + 4;
    if (s4.value<16) entier= "0"+ entier;
    var indice=(numeroCanal-1)*2;
    console.log(trame.substring(0,indice)+entier+trame.substring(indice+2,trame.length)+ " AYAYAYAYA")
    trame=trame.substring(0,indice)+entier+trame.substring(indice+2,trame.length);
    document.getElementById("edit").value= trame;
    Ecrire();
}


function Sc5(){
    var s5 = document.getElementById("scrollbar5");
    var CanalDepart = recupCanal();
    var trameHexa = document.getElementById("edit");
    var trame = trameHexa.value;
    console.log({trame:trame})
    var entier = Math.abs(Number(s5.value)).toString(16).toUpperCase();
    console.log({entier:entier});
    const numeroCanal = CanalDepart + 5;
    if (s5.value<16) entier= "0"+ entier;
    var indice=(numeroCanal-1)*2;
    console.log(trame.substring(0,indice)+entier+trame.substring(indice+2,trame.length)+ " AYAYAYAYA")
    trame=trame.substring(0,indice)+entier+trame.substring(indice+2,trame.length);
    document.getElementById("edit").value= trame;
    Ecrire();
}

function Sc6(){
    var s6 = document.getElementById("scrollbar6");
    var CanalDepart = recupCanal();
    var trameHexa = document.getElementById("edit");
    var trame = trameHexa.value;
    console.log({trame:trame})
    var entier = Math.abs(Number(s6.value)).toString(16).toUpperCase();
    console.log({entier:entier});
    var numeroCanal = 6;
    numeroCanal = numeroCanal + CanalDepart;
    console.log({test:numeroCanal});
    if (s6.value<16) entier= "0"+ entier;
    var indice=(numeroCanal-1)*2;
    console.log(trame.substring(0,indice)+entier+trame.substring(indice+2,trame.length)+ " AYAYAYAYA")
    trame=trame.substring(0,indice)+entier+trame.substring(indice+2,trame.length);
    document.getElementById("edit").value= trame;
    Ecrire();
}

function Scall(){
    Sc1()
    Sc2()
    Sc3()
    Sc4()
    Sc5()
    Sc6()
} 

function FullOn(){
    var scrollbar = document.getElementsByClassName('scrollbar');

    for (var i = 0; i < scrollbar.length; i++) {
      scrollbar[i].value = 255;
    }
    Scall()
}

function FullOff(){
    var scrollbar = document.getElementsByClassName('scrollbar');

    for (var i = 0; i < scrollbar.length; i++) {
      scrollbar[i].value = 0;
    }
    Scall()

}


function Alea(){
    var scrollbar = document.getElementsByClassName('scrollbar');

    for (var i = 0; i < scrollbar.length; i++) {
      scrollbar[i].value = Math.floor(Math.random() * 256);
    }
    Scall()
}



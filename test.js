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
function TrameValide(){
    var trameHexa = document.getElementById("edit");
    var trame = trameHexa.value;
    var button = document.getElementById("boutton");
    button.disable = false;
    var queDeLHexa = true;
    var respecttaille = true
    console.log("C" > "B")
    
        if (trame.length%2==0){
            document.getElementById("longueur").className = "vert" ;
            console.log(document.getElementById("longueur").className + "lenght");
            respecttaille = true;
        }
        else {
            document.getElementById("longueur").className = "rouge" ;
            console.log(document.getElementById("longueur").className  +  "lenght");
            respecttaille = false;
        }

   
        for (let i = 0; i < trame.length; i++) {
            if (trame[i] >= 0 && trame[i] <= 9 || trame.charAt(i) >= "A" && trame.charAt(i) <= "F")
            {
                document.getElementById("hexa").className = "vert" ;
                console.log("bon");
                queDeLHexa = true;
            }
            else
            {
                console.log("pas bon " + trame[i]);
                document.getElementById("hexa").className = "rouge" ;
                queDeLHexa = false;
                break;
            }
        }

     
        if (queDeLHexa == false || respecttaille == false ) {
            console.log("couleur en" + document.getElementById("longueur").className);
            button.disabled = true
        }
        else {
            console.log("couleur en" + document.getElementById("longueur").className);
            button.disabled = false;
        }
    
}



var s1 = document.getElementById("scrollbar1");

s1.addEventListener('change', function () 
{ 
    document.getElementById("edit").value= s1.value.toString(16)
}, false);




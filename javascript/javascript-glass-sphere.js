/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log("Let's break this glass!");


/*================================================*/
/*                 BRONVERMELDING:                */
/*================================================*/

/*
Super Mario (HereWeGoSound):
https://www.soundboard.com/sb/sound/964503

Party-popper afbeelding (Mozilla):
https://emojipedia.org/party-popper/

Applaudiserend geluid:
https://www.soundjay.com/applause-sounds-1.html


Originele naam: Ice,Cracking,Slow,Caves (MONO)
bestandsnaam: IceCrack
https://retired.sounddogs.com/searchresults.asp?Keyword=Cracking
*/



/*================================================*/
/*                  VARIABLEN:                    */
/*================================================*/

//Variablen met de naam "startButton" & "resetButton" die als waarde een document.getElementById hebben, en spreken de elementen vanuit de HTML aan met een id-tag.


//start button
var startButton = document.getElementById("start-button-3D");

//reset button
var resetButton = document.getElementById("reset-button-3D");




//Een variabelen die een mp3 bestand heeft als waarde.
var hereWeGoAudio = new Audio("./geluid/HereWeGoSound.mp3");
var clappingAudio = new Audio("./geluid/clapping.mp3");
var iceCrackAudio = new Audio("./geluid/IceCrack.mp3");



//Schade van de bubbel
var schade = 1;


//Afbeeldingen van de glazen bollen bewaar ik in een variable imgGlazenBol, zodat ik deze later nog kan gebruiken.
var imgGlazenBol = ["./afbeeldingen/bubble-1.png",
                "./afbeeldingen/bubble-2.png",
                "./afbeeldingen/bubble-3.png",
                "./afbeeldingen/bubble-4.png",
                "./afbeeldingen/bubble-5.png",
                "./afbeeldingen/bubble-6.png",
                "./afbeeldingen/bubble-7.png",
                "./afbeeldingen/bubble-8.png",
                "./afbeeldingen/bubble-9.png",
                "./afbeeldingen/bubble-10.png",
               "./afbeeldingen/party-popper.png"];


//Selecteert de afbeelding vanuit de html met id-tag bubbel.
var icoon = document.querySelector("#bubbel");

//Selecteert de id-tag met de naam teksten vanuit de HTML
var zinnen = document.getElementById("teksten");


/*================================================*/
/*                  FUNCTIONS:                    */
/*================================================*/

// Deze functie laat een geluidje bij het begin horen
function startSpel() { //roept functie aan.
    hereWeGoAudio.play(); //laat het geluidje afspelen.
    startButton.classList.add("remove"); //De classList.add voegt een class toe en verwijdert de knop.

}
startButton.addEventListener("click", startSpel);
//Roept de naam van de functie, waarbij je deze aanroept als je op de knop "Start Game" klikt door de EventListener. De knop wordt verwijderd van het scherm, door de classList.add("remove") functie.




//Hulp van Shafiek!!!
function smashBubble() {

    // Dit is een som die de schade optelt + 1
    schade = schade + 1;


    if (schade == 2) {
        document.querySelector("img").src = imgGlazenBol[1]; //zoekt tweede waarde in de index vanuit de array
        zinnen.innerHTML = "Auw.."; //specificeert het html element, (tekstueel)
        iceCrackAudio.play(); //speelt audio element iceCrack af.
    }

    if (schade == 4) {
        document.querySelector("img").src = imgGlazenBol[2];
        zinnen.innerHTML = "Alstjeblieft...";
    }

    if (schade == 6) {
        document.querySelector("img").src = imgGlazenBol[3];
        zinnen.innerHTML = "Hou op..";
    }

    if (schade == 8) {
        document.querySelector("img").src = imgGlazenBol[4];
        zinnen.innerHTML = "Je breekt me..";
    }

    if (schade == 10) {
        document.querySelector("img").src = imgGlazenBol[5];
        zinnen.innerHTML = "....";
    }

    if (schade == 12) {
        document.querySelector("img").src = imgGlazenBol[6];
        zinnen.innerHTML = "Pas op!";
    }

    if (schade == 14) {
        document.querySelector("img").src = imgGlazenBol[7];
        zinnen.innerHTML = "Wil je stoppen";
    }

    if (schade == 16) {
        document.querySelector("img").src = imgGlazenBol[8];
        zinnen.innerHTML = "AAAUUUUWWWHHH!!!!";
    }

    if (schade == 18) {
        document.querySelector("img").src = imgGlazenBol[9];
        zinnen.innerHTML = "AAAHHHH!!!";

    }

    //Als de schade gelijk is aan 20, is het glas gebroken en wordt er een audio afgespeeld.
    if (schade == 20) {
        document.querySelector("img").src = imgGlazenBol[10];
        zinnen.innerHTML = "Oke ik geef het op, jij wint!";
        clappingAudio.play();
    }
} //einde van de function!!!



// Door middel van een eventListener wordt de functie smashBubble uitgevoerd.
icoon.addEventListener('click', smashBubble);


// Eerste functie die ik geschreven heb om het spel te starten, maar niet meer gebruikt, omdat ik het anders wilde proberen.
/*function resetSpel() {
    window.location.reload(); //reload de pagina van het spelletje.
    //confirm("Press a button!"); //code van https://www.w3schools.com/jsref/met_win_confirm.asp
}
resetButton.addEventListener("click", resetSpel);
*/



function herstartSpelletje(tekst){ //functie met parameter die dient als variable
     tekst = confirm("Wil je opniew spelen?");

    if (tekst === true){
      window.location.reload(); //code van https://www.w3schools.com/jsref/met_win_confirm.asp
    } else {
        tekst = confirm("Ga verder met het breken van de glazenbol!");
    }
    document.getElementById("bubbel");
    return tekst;
}
resetButton.addEventListener("click", herstartSpelletje);



//Ik heb hier een loop gebruikt om te checken hoeveel afbeeldingen er van de "imgGlazenBol" zijn
var afbeeldingenGlazenBol = [imgGlazenBol];
for (var i= 0; i < imgGlazenBol.length; i++){
    console.log(afbeeldingenGlazenBol[i]);
}

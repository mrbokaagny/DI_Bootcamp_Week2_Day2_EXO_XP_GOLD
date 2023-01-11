// Exo 1 : Le Traducteur Du Monde 

//recuperation de la language choisi
    let current_language = prompt("Quelle est la langue que vous parle")
//Créez quelques conditions :
switch(current_language){
    case "français":
        alert("Bonjour")
        break

    case "anglais":
        alert("Hello")
        break

    case "hébreu":
        alert("Shalom")
        break

    default:
        alert('01110011 01101111 01110010 01110010 01111001')
}

// Exo 2 : L'assignateur De Notes

// recuperation de la saisie
let current_note = prompt("Prière d'entrer une note: ")


if(current_note > 90){
    console.log("A")
}else if(current_note>80 && current_note <=90){
    console.log("B")
}else if(current_note>=70 && current_note<=80){
    console.log("C")
}else{
    console.log("D")
}

// Ex0 3 : Verbe

// recuperation de la saisie de l'utilisateur
let verbe = prompt("Donner un verbe")
if(verbe.length >= 3 && !verbe.endsWith("ing")) {
        console.log(verbe + "ing");
    }else if (verbe.length >= 3 && verbe.endsWith("ing")) {
            return verbe + "ly"; 
}else if (verbe.length < 3) {
    console.log(verbe);
}
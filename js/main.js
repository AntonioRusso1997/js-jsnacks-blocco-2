// SNACK 1) Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

// Cheido il numero all'utente

// var numberUser = parseInt(prompt("Inserisci un numero"));

// if (numberUser % 2 == 0) {
//     console.log(numberUser);
// } else {
//     console.log((numberUser) + 1);
// }

/*----------------------------------------------------------------------------*/

// SNACK 2) Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

// //Creo le due liste di nomi e cognomi
// var nomi = ["Antonio", "Alberto", "Alessio", "Paolo", "Dario"];
// var cognomi = ["Russo", "Esposito", "Rossi", "Romano", "Ferrari"];
// var randomName;
// var randomSurname;

// for (var i = 0; i < 4; i++) {
//     randomName = nomi[Math.floor(Math.random() * nomi.length)];
//     randomSurname = cognomi[Math.floor(Math.random() * cognomi.length)];
    
//     console.log(randomName + " " + randomSurname);
// }

/*----------------------------------------------------------------------------*/

// SNACK 3) Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

// Creo array con i numeri
// var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// var oddSum = 0;

// for (var i = 0; i < numbers.length; i++) 
// {
//     if (i % 2 != 0)
//     oddSum += numbers[i];
// }
// console.log("La somma è: " + oddSum);

/*----------------------------------------------------------------------------*/

// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

// Creo gli array
var firstArray = [1, 2, 3, 8, 9, 34, 45, 1];
var secondArray = [7, 8, 9, 3, 4];

// Creo ciclo while per far aggiungere elementi all'array che ha meno elementi.
while(firstArray.length!=secondArray.length)
{
    if(firstArray.length>secondArray.length)
    {
        secondArray.push(Math.floor(Math.random()*10)+1);
    }
    else
    {
        firstArray.push(Math.floor(Math.random()*10)+1);
    }
}

console.log(firstArray);
console.log(secondArray);
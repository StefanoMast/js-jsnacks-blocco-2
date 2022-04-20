//l software deve chiedere per 5 volte all'utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.

//per cinque volte:
// - chiedo un numero
// - lo sommo alla somma precedente

//let sum= 0; //va inizializzato a zero altrimenti dà come risultato undefined

//utilizzando il ciclo for
//for (let index = 0; index < 5; index++) {
    //const userNumber = parseInt(prompt("dimmi un numero"));
    //sum += userNumber;
//}

//console.log(sum);

//utilizzando while

let counter = 0;
let sum = 0;

while (counter < 5) {
    const userNumber = parseInt(prompt("dimmi un numero"));
    if ( !isNaN(userNumber) ) {
        sum += userNumber;
        counter++;
    } else {
        alert("non è un numero!");
    }  
    console.log(counter < 5); //per verificare ad ogni passaggio se è true o false
}

console.log(sum);


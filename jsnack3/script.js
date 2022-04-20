//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.


//chiedere all'utente quanti numeri vuole calcolare
const N = parseInt(prompt("dimmi un numero"));

//faccio il ciclo for per quanti numeri l'utente vuole stampare
for (let index = 1; index <= N; index++) {
    let cubo = index ** 3;
    console.log(cubo);
}

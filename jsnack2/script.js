//Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

//function generateRandomString(iLen) {
  //  var sRnd = '';
    //var sChrs = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    //for (var i = 0; i < iLen; i++) {
      //var randomPoz = Math.floor(Math.random() * sChrs.length);
      //sRnd += sChrs.substring(randomPoz, randomPoz + 1);
    //}
    //return sRnd;
    //}

const guestNames = ['Vittorio', 'Zefiro', 'Luca', 'Ludovica'];
const guestLastNames = ['Farci', 'Bocca', 'Bianchi', 'Capodanno', 'Maino'];

const falseGuests = [];
for (let i = 0; i < 3; i++) {
    const randomNameIndex = Math.floor(Math.random() * (guestNames.length - 1));
    console.log(randomNameIndex);
    const randomName = guestNames [randomNameIndex];
    console.log(randomName);
    
    const randomLastNameIndex = Math.floor(Math.random() * guestLastNames.length);
    const randomLastName = guestLastNames[randomLastNameIndex];
    console.log(randomLastName);

    const randomGuest= ` ${randomName} ${randomLastName} `;
    falseGuests.push(randomGuest);
    
}

console.log(falseGuests);

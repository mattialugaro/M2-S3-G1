/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
    let result = l1 * l2;
    return result;
}
console.log(area(7, 8));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(n1, n2) {
    let sum = n1 + n2;
    if(n1 == n2){
        let per = sum * 3;
        return per;
    } else {
        return sum;
    }
}
console.log(crazySum(3, 3));
console.log(crazySum(7, 6));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(num) {
    let less = num - 19;
    if (num > 19){
        return less * 3;
    } else {
        return less;
    }
}
console.log(crazyDiff(10));
console.log(crazyDiff(25));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    if ((n >= 20 && n <= 100 )|| n == 400){
        return true;
    } 
    return false;
}
console.log(boundary(74));
console.log(boundary(200));
console.log(boundary(400));
console.log(boundary(19));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function epify(string) {
    let upperString = string.toUpperCase();
    if (upperString != "EPICODE"){
        return "EPICODE " + upperString;
    } else {
        return upperString;
    }
}
console.log(epify("ciao"));
console.log(epify("epicode"));


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n1) {
    if (n1 % 3 == 0 || n1 % 7 == 0){
        return true;
    } else {
        return false;
    }
}
console.log(check3and7(28));
console.log(check3and7(24));
console.log(check3and7(50));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(string) {
    let splitStr = string.split("");
    let reverseStr = splitStr.reverse()
    let joinStr = reverseStr.join("")
    return joinStr;
}
console.log(reverseString("cammello"));
console.log(reverseString("tricheco"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(string){
    let splitStr = string.split(" ").map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
    return splitStr;
}
upperFirst("ciao mi chiamo mattia e vivo a bologna")

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function cutString (str){
    let sliceStr = str.slice(1, -1)
    return sliceStr
}
console.log(cutString("ippopotamo"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n){
    let arrayN = [];
    for(let i=0; i < n; i++){
        let randomN = Math.floor(Math.random()* 11)
        console.log(randomN)
        arrayN.push(randomN)
    }
    return arrayN
}
console.log(giveMeRandom(9))

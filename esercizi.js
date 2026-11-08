/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(a, b) {
  if (a === b) {
    return (a + b) * 3;
  }
  return a + b; // se si arriva qui i due numeri sono diversi
}

console.log(crazySum(2, 5)); // 7
console.log(crazySum(4, 4)); // 24

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(n) {
  // Il confronto dà già true o false, quindi non serve un if
  return (n >= 20 && n <= 100) || n === 400;
}

console.log(boundary(20)); // true
console.log(boundary(101)); // false
console.log(boundary(400)); // true

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(str) {
  // Le stringhe non hanno reverse(), gli array sì. Quindi:
  const lettere = str.split(''); // 'EPICODE' diventa ['E', 'P', 'I', 'C', 'O', 'D', 'E']
  lettere.reverse(); // ['E', 'D', 'O', 'C', 'I', 'P', 'E']
  return lettere.join(''); // e rimetto insieme le lettere senza niente in mezzo
}

console.log(reverseString('EPICODE')); // EDOCIPE

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(str) {
  const parole = str.split(' '); // divido la frase dove ci sono gli spazi

  for (let i = 0; i < parole.length; i++) {
    // Prima lettera maiuscola, poi il resto della parola così com'è
    parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1);
  }

  return parole.join(' '); // e rimetto insieme le parole con gli spazi
}

console.log(upperFirst('oggi studio le funzioni')); // Oggi Studio Le Funzioni

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
  const numeri = [];
  for (let i = 0; i < n; i++) {
    // Math.random() dà un decimale da 0 a 0,999...: per 11 arriva fino a 10,99 e Math.floor taglia i decimali.
    // Così escono interi da 0 a 10, tutti e due compresi
    numeri.push(Math.floor(Math.random() * 11));
  }
  return numeri;
}

console.log(giveMeRandom(5)); // 5 numeri a caso, diversi a ogni avvio

//EXTRA:
/* ESERCIZIO EXTRA 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  return l1 * l2;
}

console.log(area(4, 6)); // 24

/* ESERCIZIO EXTRA 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(n) {
  // "Assoluta" vuol dire senza segno: Math.abs trasforma -9 in 9
  const differenza = Math.abs(n - 19);
  if (differenza > 19) {
    return differenza * 3;
  }
  return differenza;
}

console.log(crazyDiff(10)); // 9
console.log(crazyDiff(50)); // 93, perché 31 supera 19 e va triplicato

/* ESERCIZIO EXTRA 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(str) {
  if (str.startsWith('code')) {
    return str;
  }
  return 'code' + str;
}

console.log(codify('pen')); // codepen
console.log(codify('codewars')); // codewars, già comincia con "code"

/* ESERCIZIO EXTRA 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(n) {
  // Multiplo vuol dire che la divisione non lascia resto
  return n % 3 === 0 || n % 7 === 0;
}

console.log(check3and7(9)); // true
console.log(check3and7(14)); // true
console.log(check3and7(10)); // false

/* ESERCIZIO EXTRA 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(str) {
  // slice(1, -1) parte dal secondo carattere e si ferma prima dell'ultimo
  return str.slice(1, -1);
}

console.log(cutString('EPICODE')); // PICOD

;(function (){
  'use strict'

    /*
    ESERCIZIO 1
    leggere l'altezza dell'header di pagina e associarla all'elemento #spacer per evitare
    che il primo blocco finisca sotto l'header
    */

    /*
    LE FUNZIONI
    possiamo raccogliere dei comandi in un blocco unico "funzione" ed eseguirli all'occorrenza.
    Alle funzioni possiamo passare delle variabili definite "parametri" e otterere dei risultati
    var quadrato = function(x){ var result = x*x; return x; }
    l'esecuzione di una funzione si ottiene richiamandola come segue:
    var risultato = quadrato(2);
    console.log(risultato); //scriverà 4
    */

    /*
    ESERCIZIO 2
    scrivere una funzione che dato un elemento ne misura la larghezza e imposta l'altezza
    in modo che l'elemento risulti quadrato.
    */

    /*
    ESECIZIO 3
    per ogni elemento .cover contente un'immagine leggere l'url dell'immagine.
    impostare l'url come background image all'elemento .cover
    ed applicarvi la funzione creata al punto 2
    impostare per ogni immagine il display a none.
    */

    /*
    EVENTO CLICK
    dato un elemento è possibile associarvi un evento. Gli eventi corrispondono
    ad azioni eseguite dall'utente. Al click del mouse corrisponde l'evento CLICK
    $('selettore').on('click', function(e){ console.log('click'); })
    */

    /*
    ESERCIZIO 4
    creare una funzione che quando viene eseguita aggiunge una classe "menuOpen" all'elemento BODY
    o la rimuove se questo è già presente.
    Eseguire questa funzione al click sul link "toggle navigation".
    */

    /*
    ESERCIZIO 5
    in fondo alla pagina è definita una funzione che ritorna un intero ramdom
    dato un intervallo numerico.
    Usarla per posizionare in modo casuale gli article all'avvio della pagina
    utilizzando la proprietà css transform
    */

    /*
    ESERCIZIO 6
    leggere l'url delle immagini contenute in ogni article.
    Per ogni elemento definire un elemento html di tipo immagine e inserirlo
    nell'elemento #gallery 
    */

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}())

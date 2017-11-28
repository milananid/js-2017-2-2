;(function (){
  'use strict'

  /*
  ESERCIZIO 1
  selezionare l'elemento h2 dell'header di pagina e printarlo nella console
  con il comando console.log();
  */


  var cosaDaPrintare = $('#head h2');
  cosaDaPrintare = $('#head h2').text();
  console.log(cosaDaPrintare);
  console.log($('#head h2').text());
  //se invece avessimo scritto: console.log($('#head h2').html());
  //se invece avessimo scritto: console.log($('#head h2').html('hoooooooray!'));
  //se invece avessimo scritto: console.log($('#head h2').html('<em>hoooooooray!</em>'));

  /*
  ESERCIZIO 2
  selezionare l'elemento a dell'header di pagina. Leggerne il parametro href
   e printarlo nella console con il comando console.log();
  */

  cosaDaPrintare = $('#head a').attr('href');
  //cosaDaPrintare = $('#head a').attr({'href':'nuovo-link.html'});
  console.log(cosaDaPrintare);

  /*
  ESERCIZIO 3
  compilare il link nell'header di pagina aggiungedo l'attributo title=""
  con il valore dell'h2 dell'header di pagina. Nel medesimo elemento aggiungere
  la classe "btn"

  - aggiungere classe ad ancora
  - aggiungere attributo title e settarlo con il testo di h2
      \_ leggere testo h2
      \_ settare title su ancora
  */

  $('#head a').addClass('btn');
  var attrTitle = $('#head h2').text();
  $('#head a').attr('title',attrTitle);

  //$('#head a').addClass('btn').attr('title',$('#head h2').text());



  /*
  ESERCIZIO 4
  per ogni elemento article modificare la proprietà
  css background-color in #333
  */

  /*$('article').each(function(){
    $(this).css('backgroundColor','#333');
  });*/
  $('article').css('backgroundColor','#333');
  //console.log($('article').length) >>> printa 5
  //console.log($('#head').length)   >>> printa 1


  /*
  ESERCIZIO 5
  per ogni elemento article inserire un attributo data-index progressivo
  a partire da 0 e rimuovere le classi left e right
  */

  $('article').each(function(index, element){

    $(this).attr('data-index', index);

  });


  $('article').removeClass('left').removeClass('right');

  /*
  ESERCIZIO 6
  selezionare l'elemento con id #head ed aggiungerci la classe big
  */

  $('#head').addClass('big');

  /*
  ESERCIZIO 7
  selezionare gli elementi con attributo data-index == 1 e settarne
  il css width a 75%; e margin-left 25%
  selezionare il quarto elemento con attributo data-index
  e settarne il css width a 75%; e margin-right 25%
  */
  //Per svolgere questo esercizio potere ricercare le seguenti chiavi
  //jquery attribute selection $('[attributo]')  $('[attributo="valore"]')
  //jquery set css
  //studiare inoltre: https://learn.jquery.com/using-jquery-core/manipulating-elements/
}())

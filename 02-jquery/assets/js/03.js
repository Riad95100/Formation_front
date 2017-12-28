/* ------- Le Chainage de Methode -------*/

$(function(){
    // -- Je souhaite cacher toutes les divs de ma page HTML
    console.log($('div'));

    $('div').hide('slow', function(){
        // --une fois que la méthode hide est terminée, mon alerte peut s'executer
        alert('Fin du Hide');
        // NB : la fonction s'executera pour l'ensemble des éléments du sélecteur

        $('div').css('background', 'yellow');
        $('div').css('color', 'red');

        //-- je fais réapparaitre les divs
        $('div').show('slow');
    }); // Fin fonction anonyme et du hide

    $('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500)
    $('p').hide(1000).css({'color':'green', 'font-size':'30px'}).delay(2000).show(500)
});
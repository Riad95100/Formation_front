/*   ------- La disponibilité du DOM -------

A partir du moment où mon DOM, c'est-à-dire 
l'ensemble de l'arborescence de ma 
page est complètement chargé; je peux commencer
 à utiliser jQuery.

Je vais mettre l'ensemble de mon code dans une
 fonction, et cette fonction
sera appelé AUTOMATIQUEMENT par jQuery lorsque
 le DOM sera entièrement défini.

3 façons de faire :
---------------------------------------------*/
// 1.=>
jQuery(document).ready(function() {
    // -- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS.
});
// 2.=>
$(document).ready(function(){
    // -- Ici, le DOM est entièrement chargé, je peux procéder à mon code JS.
});
// 3.=>
$(function(){
    alert(" J'ai faim ! ");
    // -- En JS :
    document.getElementById('TexteEnJQuery').innerHTML = "<strong>Mon texte en JS</strong>";

    // -- En jQuery, les sélecteurs sont les mêmes qu'en CSS :
    $('#TexteEnJQuery').html('Mon texte en JQ');

});

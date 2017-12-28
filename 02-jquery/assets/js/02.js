$(function(){
    // -- DOM Ready !
    function l(e){
        console.log(e);
    }
    // -- Sélectionner les balises SPAN :

        // => Version Javascript :
        l(document.getElementsByTagName('span'));

        // => Version Jquery :
        l($('span'));

    // -- Sélectionner mon menu :

        // => Version Javascript :
        l(document.getElementById('menu'));

        // => Version Jquery :
        l($('#menu'));

    // -- Sélectionner une classe :

        // => Version Javascript :
        l(document.getElementsByClassName('maClasse'));
        
        // => Version Jquery :
        l($('.maClasse'));

    // -- Sélectionner un attribut :

        // => Version Jquery :
        l($([href=]))
});
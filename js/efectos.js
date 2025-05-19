$(document).ready(function() {
// Efecto menu

$('.menu a').each(function(index,elemento){
    $(this).css({
        'top':'-200px'
    });
    $(this).animate({
        top:'0'
    }, 1500 + (index * 500));
});

if($(window).width()>800){
    $('header .textos').css({
        opacity:0,
        marginTop:0
    });
    $('header .textos').animate({
        opacity:1,
        marginTop:'-52px'
    },1500);
}

// Scroll Elementos menu
// Get the vertical offset of the "acerca-de" section
var acerdaDe=$('#acerca-de').offset().top,
    precios=$('#precios').offset().top,
    detalles=$('#detalles').offset().top,
    ubicacion=$('#ubicacion').offset().top;

$('#btn-acerca-de').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: acerdaDe - 500
    }, 500);
});

$('#btn-precios').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: precios + 500
    }, 500);
});

$('#btn-detalles').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: detalles
    }, 500);
});

$('#btn-ubicacion').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: ubicacion
    }, 500);
});



});
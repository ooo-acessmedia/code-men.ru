(function ($) {

    'use strict';

    // var cl  = function(msg){
    //     console.log(msg);
    // };

    // Fancybox

    $('.fancybox').fancybox();

    // Carousel

    $('.main-gallery').find('.content').owlCarousel({
        items: 4,
        margin: 10,
        loop: true,
        nav: true,
        navText: ['', '']
    });

    $('.sec-gallery').find('.content').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ['', '']
    });

    $('.card-add-img').owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        navText: ['', ''],
        dots: true,
        dotsEach: true
    });

    // Кнопка вверх

    $.goup();

    // Всплывающее меню каталога

    var $catalogLink = $('.main-menu-list').find('li').eq(0).find('>a');

    $catalogLink.on('click', function (event) {
        event.preventDefault();

        if ($(this).parent().hasClass('touched')) {
            $('.menu-catalog-list').removeClass('is-visible');
            $(this).parent().removeClass('touched');
            $('.main-img-fade').removeClass('is-visible');

        } else {
            $(this).parent().addClass('touched');
            $('.menu-catalog-list').addClass('is-visible');
            $('.main-img-fade').addClass('is-visible');
        }
    });

    // Маска для телефона

    $('#form-phone').mask('+7 (999) 999-99-99');
    
    $('.vertical-middle').wrap('<table class="vertical-contain"></table>');

})(jQuery);




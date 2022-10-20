$(document).ready(function(){
    $('ul.offer__tabs').on('click', 'li:not(.offer__tab_active)', function() {
        $(this)
          .addClass('offer__tab_active').siblings().removeClass('offer__tab_active')
          .closest('div.container').find('div.offer__contant').removeClass('offer__contant_active').eq($(this).index()).addClass('offer__contant_active');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $('ul.recommend__tabs').on('click', 'li:not(.recommend__tab_active)', function() {
        $(this)
          .addClass('recommend__tab_active').siblings().removeClass('recommend__tab_active')
          .closest('div.container').find('div.recommend__contant').removeClass('recommend__contant_active').eq($(this).index()).addClass('recommend__contant_active');
    });

});
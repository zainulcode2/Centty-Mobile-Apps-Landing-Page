
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {

    $('a.page-scroll[href*="#"]:not([href="#"])').on('click', function () {
             var $anchor = $(this);
             $anchor.parent('li').addClass('active');
             $anchor.parent('li').siblings().removeClass('active');

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top -80)
                }, 900, "easeInOutExpo");
                return false;
            }


        }
    });

});


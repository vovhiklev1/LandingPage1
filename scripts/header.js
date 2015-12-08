/**
 * Created by Vova on 04.12.2015.
 */
$(document).ready(function () {
    var header = $('header');
    $(document).scroll(function () {
        onScrollEvent();
        onScrollPresent();
    });
   /* $(window).mousemove(function(event){
     onMouseEvent(event);
     });*/

    var onScrollEvent = function () {
        if ($(document).scrollTop() >= 100) {
            header.stop().animate({top: '0px'}, 'slow');
        } else {
            header.stop().animate({top: '-100px'}, 'slow');
        }
        ;
    };
    var onMouseEvent = function (event) {
        if (event.clientY <= 50) {
            header.stop().animate({top: '0px'}, 'fast');
        }
        if (event.clientY >= 100) {
            header.stop().animate({top: '-100px'}, 'fast');
        }
        ;
    };

    var onScrollPresent = function () {
        var scrollTop = $("body").scrollTop();

        if (scrollTop > 50) {
            scrollTop = 50
        } else {
            scrollTop
        };

        if ($(".present-image").height() + $(".present-image").offset().top >= $(".present").height()
            && $(".present-image").height() + $(".present-image").offset().top + scrollTop >= $(".present").height()) {
            $(".present-image").stop().animate({top: -scrollTop}, 500);
        };

        if ($(".present-image").height() + $(".present-image").offset().top <= $(".present").height()
            && $(".present-image").height() + $(".present-image").offset().top + scrollTop <= $(".present").height()) {
            $(".present-image").stop().animate({top: scrollTop}, 500);
        };
    };
});
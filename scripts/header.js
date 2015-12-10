/**
 * Created by Vova on 04.12.2015.
 */
var headerAnimate = function () {

    var header = $('header');
    var child = $('body').children();
    var head = $('header').find('nav ul li a[href]');
    var windowWidth = $(this).width();
    var windowHeight = $(this).height() / 2;

    var menu = $('#menu');

    var menuIcon = $('#menu-icon');
    menuIcon.bind('click', function () {
        menu.slideToggle();
    });

    var menuLink = $('#menu a');
    menuLink.on("click", function () {
        menu.slideUp();
    });

    var body = $('body');
    body.bind('click', function (event) {
            var e = $(event.target);
            if (!(e.hasClass('menu-row') || e.hasClass('icon')
                || e.hasClass('lines') || e.hasClass('menu-icon') )) {
                menu.slideUp();
            }
        }
    );


    var del_nav_active = function () {
        $.each(head, function (i, data) {
            head.eq(i).removeClass('nav_active');

        });
    };

    $(document).scroll(function () {
        //onScrollEvent();
        onScrollPresent();
        navigatePage();
    });

    $(window).mousemove(function (event) {
        // onMouseEvent(event);
    });

    var onScrollEvent = function () {
        if ($(document).scrollTop() >= 50) {
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
        if (event.clientY >= 100 && $(document).scrollTop() <= 50) {
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
        }
        ;

        if ($(".present-image").height() + $(".present-image").offset().top >= $(".present").height()
            && $(".present-image").height() + $(".present-image").offset().top + scrollTop >= $(".present").height()) {
            $(".present-image").stop().animate({top: -scrollTop}, 500);
        }
        ;

        if ($(".present-image").height() + $(".present-image").offset().top <= $(".present").height()
            && $(".present-image").height() + $(".present-image").offset().top + scrollTop <= $(".present").height()) {
            $(".present-image").stop().animate({top: scrollTop}, 500);
        }
        ;
    };

    var navigatePage = function () {
        $.each(child, function (id, value) {
            var obj = $('body').find(child[id]);
            var top = obj.position().top;
            var h = obj.height();
            var pos = top + h;
            if ($(document).scrollTop() + 20 > top && $(document).scrollTop() < pos) {
                $.each(head, function (i, data) {
                    if (head.eq(i).attr('href').replace('#', '') == obj.attr('id')) {
                        del_nav_active();
                        head.eq(i).addClass('nav_active');


                    }
                });
            }
            ;

            if ($(document).scrollTop() + windowHeight + (windowHeight / 3) > top) {

                if (obj.attr('id') == 'explain' || obj.attr('id') == 'description') {
                    thirdAnimation(obj.attr('id')); //console.log('3')
                }

                if (obj.attr('id') == 'details' || obj.attr('id') == 'feedbacks'
                    || obj.attr('id') == 'articles'
                    || obj.attr('id') == 'screenshots' || obj.attr('id') == 'message') {
                    firstAnimation(obj.attr('id')); //console.log('1')
                }

                if (obj.attr('id') == 'describe' || obj.attr('id') == 'subscribe') {
                    secondAnimation(obj.attr('id')); //console.log('2')
                }
            }
            ;
        });
    };

    var thirdAnimation = function (objName) {
        $('#' + objName).find('.offset-block-left-onload').animate({left: 0}, 1800);
        $('#' + objName).find('.offset-block-right-onload').animate({right: 0}, 1800);
    };
    var firstAnimation = function (objName) {
        $('#' + objName).find('.opacity-block-onload').animate({opacity: 1}, 1000);
    };
    var secondAnimation = function (objName) {
        $('#' + objName).find('.inner-offset-block-left-onload').animate({left: 0}, 1800);
        $('#' + objName).find('.inner-offset-block-right-onload').animate({right: 0}, 1800);
    };

};
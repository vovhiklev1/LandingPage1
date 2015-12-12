/**
 * Created by Vova on 04.12.2015.
 */
        
var pageAnimate = function () {

    var header = $('header');
    var child = $('body').children();
    var head = $('header').find('nav ul li a[href]');
    var windowWidth = $(this).width();
    var windowHeight = $(this).height() / 2;

    var menu = $('#menu');

    //Клавиша меню для  mobile-first
    // Menu button for mobile-first
    var menuIcon = $('#menu-icon');
    menuIcon.bind('click', function () {
        menu.slideToggle();
    });

    //Обработчик закрытия mobile-first меню
    //Handler for closing mobile-first menu
    var menuLink = $('#menu a');
    menuLink.on("click", function () {
        if ($('.mobile-menu-container').css('display') == 'block') {
            menu.slideUp();
        }
    });

    //Обработчик закрытия mobile-first меню если пользователь кликнул вне меню
    //Handler for closing mobile-first menu when the user clicks outside the menu
    var body = $('body');
    body.bind('click', function (event) {
            var e = $(event.target);
            if (!( e.hasClass('menu-icon') )
                && ($('.mobile-menu-container').css('display') == 'block')) {
                menu.slideUp();
            }
        }
    );

    //Приведение цвета по умолчанию пункта меню
    //Lead to default color a menu item
    var del_nav_active = function () {
        $.each(head, function (i, data) {
            head.eq(i).removeClass('nav_active');

        });
    };


    $(document).scroll(function () {
        // onScrollEvent();
        onScrollPresent(); //Анимация фона //Background animation
        navigatePage();  //Подсветка активного пункта меню //Lighting the active menu item
    });

    $(window).mousemove(function (event) {
        //onMouseEvent(event);
    });

    // Показать\Скрыть меню бар полностью
    // Show\Hide the menu bar completely
    var onScrollEvent = function () {
        if ($(document).scrollTop() >= 50) {
            header.stop().animate({top: '0px'}, 'slow');
        } else {
            header.stop().animate({top: '-100px'}, 'slow');
        }
        ;
    };

    // Показать\Скрыть меню бар полностью
    // Show\Hide the menu bar completely
    var onMouseEvent = function (event) {
        if (event.clientY <= 50) {
            header.stop().animate({top: '0px'}, 'fast');
        }
        if (event.clientY >= 100 && $(document).scrollTop() <= 50) {
            header.stop().animate({top: '-100px'}, 'fast');
        }
        ;
    };

    //Анимация фона
    // Background animation
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

    //Подсветка активного пункта меню
    // Lighting the active menu item
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
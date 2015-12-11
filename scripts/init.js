/**
 * Created by Vova on 08.12.2015.
 */
$(document).ready(function () {

    Jobs = {
        slideTimerStart: function () {
            this.slideTimerStart.sliderTimer = setInterval(function () {
                slider1.autoSlide();
                slider2.autoSlide();
            }, 3000);
        },
        slideTimerStop: function () {
            clearInterval(this.slideTimerStart.sliderTimer);
        },
        navPageTo: function () {
            $('#menu a[href^="#"]').click(function () {
                var el = $(this).attr('href');
                $('body').animate({
                    scrollTop: $(el).offset().top
                }, 500);
                return false;
            });
        }
    };

    var boxSizeFix = function () {
        window.onload = (function () {
            $('.screenshots').height($(window).height());

            if ($(window).width() > 768) {
                var imgHeight = $('.b-picture__image').height();
                $('.screenshots .screenshots-container .slider-container').height(imgHeight + 50);
                $('#present').height($(window).height() + 100);
                $('#feedbacks').height($(window).height() - 50);
            }

            if ($(window).width() <= 768) {
                var containerHeight = $(window).height();
                var containerHeight_7 = containerHeight / 7;
                $('.b-picture__image').height(containerHeight_7 * 5);
                $('.screenshots .screenshots-container .slider-container').height(containerHeight_7 * 6);
                $('.screenshots').height(containerHeight_7 * 6 + 200);
                $('.screenshots .slide .slide-item .item').width($('.screenshots .slide .slide-item img').width());
            }

        });
    };


    headerAnimate();

    List.prototype = new Component;
    Slider.prototype = new List;
    var slider1 = new Slider('#slider-feedbacks');

    Gallery.prototype = new Component;
    Slider.prototype = new Gallery;
    var slider2 = new Slider('#gallery');

    Form_checker.prototype = new Component;
    var form_checker = new Form_checker;

    slider1.main('#slider-feedbacks');
    slider2.main('#gallery');
    form_checker.main('#message');

    Jobs.slideTimerStart();
    Jobs.navPageTo();
    boxSizeFix();
});
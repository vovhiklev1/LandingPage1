/**
 * Created by Vova on 08.12.2015.
 */
$(document).ready(function () {

    Jobs = {

        // Запуск автоматического прослистывания слайдера
        // Run the automatic scrolling slider
        slideTimerStart: function () {
            this.slideTimerStart.sliderTimer = setInterval(function () {
                slider1.autoSlide();
                slider2.autoSlide();
            }, 3000);
        },

        // Остановка автоматического прослистывания слайдера
        // Stop the automatic scrolling slider
        slideTimerStop: function () {
            clearInterval(this.slideTimerStart.sliderTimer);
        },

        // Анимация перемещения по якорю
        // Animation move through the anchor
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

    // Изменение размера слайдера при мобильном виде
    // Change the size of the slider in the mobile view
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

    //Главный метод анимации и обработчиков страницы
    // Main method of animation and handlers page
    pageAnimate();

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
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
            $('a[href^="#"]').click(function () {
                var el = $(this).attr('href');
                $('body').animate({
                    scrollTop: $(el).offset().top
                }, 500);
                return false;
            });
        }
    };

    var boxSizeFix = function () {
        var imgHeight = $('.b-picture__image').height();
        $('.screenshots .screenshots-container .slider-container').height(imgHeight + 50);
        $('.screenshots').height($(this).height());
    };


    headerAnimate();

    List.prototype = new Component;
    Slider.prototype = new List;
    var slider1 = new Slider('#slider-feedbacks');

    Gallery.prototype = new Component;
    Slider.prototype = new Gallery;
    var slider2 = new Slider('#gallery');

    slider1.main('#slider-feedbacks');
    slider2.main('#gallery');
    Jobs.slideTimerStart();
    Jobs.navPageTo();
    boxSizeFix();
});
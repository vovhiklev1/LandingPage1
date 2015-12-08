/**
 * Created by Vova on 08.12.2015.
 */
$(document).ready(function () {


    function Slider(sSelector) {
        var f = this;
        //f.main(sSelector);
        this.autoSlide = function () {
            var activeItem = f.points.find('.active');
            var active = f.pointItem.index(activeItem);
            if (active < f.pointItemMax - 1) {
                f.setList(active + 1);
            }
            if (active == f.pointItemMax - 1) {
                f.setList(0);
            }
            ;
        };
    };

    Jobs = {
        slideTimerStart: function () {
            this.slideTimerStart.sliderTimer = setInterval(function () {
                slider1.autoSlide();
                slider2.autoSlide();
            }, 3000);
        },
        slideTimerStop: function () {
            clearInterval(this.slideTimerStart.sliderTimer);
        }

    };

    List.prototype = new Component;
    Slider.prototype = new List;
    var slider1 = new Slider('#slider-feedbacks');

    Gallery.prototype = new Component;
    Slider.prototype = new Gallery;
    var slider2 = new Slider('#gallery');


    Gallery.main();
    slider1.main('#slider-feedbacks');
    slider2.main('#gallery');
    Jobs.slideTimerStart();

});
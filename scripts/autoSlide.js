/**
 * Created by Vova on 09.12.2015.
 */
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


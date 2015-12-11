/**
 * Created by Vova on 07.12.2015.
 */


function Gallery(sSelector) {
    var g = this;
    g.main = function (sSelector) {
        g.init(sSelector);
        g.pictures = g.find('.slide-item');
        g.arrowPrew = g.find('.control-left');
        g.arrowNext = g.find('.control-right');
        g.previewImage = g.find('.preview-img');
        g.previewBox = g.find('.screenshots-preview');
        g.slideList = g.find('.slider-screenshots');
        g.current = 0;
        g.max = g.pictures.length;
        g.closeBtn = g.find('.close');
        g.pointItem = g.find('.control-item1');
        g.pointItemMax = g.pointItem.length;
        g.point = g.find('.slide-control');
        g.points = g.find('.slide-control');


        g.showPreview = function () {
            var picture = $(this);
            g.display(picture, 'preview');
        };
        g.closePreview = function (event) {
            if (!event || $(event.target).hasClass('preview-img')) {
                g.previewBox.removeClass('b-preview_shown');
                g.previewImage.css({"background-size": "15%"});
                $('header').show();
            }
        };
        g.showImage = function (iShift) {
            g.current += iShift;
            if (g.current >= g.max) {
                g.current = 0;
            }
            else if (g.current < 0) {
                g.current = g.max - 1;
            }
            g.display(g.find('.slide-item:eq(' + g.current + ')'), "preview");
        };
        g.display = function (picture, displayParam) {
            if (displayParam == "preview") {
                var allImgSlider = picture.find('.b-picture__image');
                g.current = g.pictures.index(picture);
            }
            ;
            dirImg = allImgSlider.attr('src');
            g.previewImage.css('background-image', 'url("' + dirImg + '")');
            if ($(window).width() <= 768) {
                g.previewImage.animate({"background-size": "70%"}, 200);
            }
            else {
                g.previewImage.animate({"background-size": "25%"}, 200);
            }
            $('header').hide();
            g.previewBox.addClass('b-preview_shown');
        };
        g.showPrevious = function () {
            g.showImage(-1);
        };
        g.showNext = function () {
            g.showImage(1);
        };
        g.escclosePreview = function (event) {
            if (event.which == 27) {
                g.closePreview();
            }
        };
        g.closeBtn.click(function () {
            g.closePreview();
        });
        g.pointItem.click(function () {
                var list = $(this);
                var selecteddListId = g.pointItem.index(list);
                g.setList(selecteddListId)
            }
        );
        g.setList = function (selecteddListId) {
            $.each(g.slideList, function (id, value) {
                if (selecteddListId == id) {
                    g.slideList.eq(id).addClass('activeList');
                    g.slideList.eq(id).removeClass('offset-right');
                    g.slideList.eq(id).removeClass('offset-left');
                }
                if (selecteddListId < id) {
                    g.slideList.eq(id).addClass('offset-right');
                    g.slideList.eq(id).removeClass('activeList');
                    g.slideList.eq(id).removeClass('offset-left');
                }
                if (selecteddListId > id) {
                    g.slideList.eq(id).addClass('offset-left');
                    g.slideList.eq(id).removeClass('offset-right');
                    g.slideList.eq(id).removeClass('activeList');
                }
            });
            $.each(g.pointItem, function (id, value) {
                if (selecteddListId == id) {
                    g.pointItem.eq(id).addClass('active');
                }
                else {
                    g.pointItem.eq(id).removeClass('active');
                }
                ;
            });
            Jobs.slideTimerStop();
            Jobs.slideTimerStart();
        };

        g.pictures.click(g.showPreview);
        $('body').keyup(g.escclosePreview);
        g.previewBox.click(g.closePreview);
        g.arrowPrew.click(g.showPrevious);
        g.arrowNext.click(g.showNext);
        document.addEventListener('keydown', function (event) {
            if (($(document).scrollTop() >= $('#screenshots').position().top - 100) &&
                (($(document).scrollTop() <= $('#screenshots').position().top + $('#screenshots').height()))) {

                if (event.which == 37) {
                    g.showPrevious();
                }
                ;
                if (event.which == 39) {
                    g.showNext();
                }
                ;
            }
            ;
        });
    }

};






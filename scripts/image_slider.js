/**
 * Created by Vova on 07.12.2015.
 */
function Component(sSelector) {
    // alert('Component')
  var elem;
      this.init = function (sSelector) {
        elem = $(sSelector);
        if (!elem.length) {
            console.log('error init')
        }
    }
    this.find = function (sSelector) {
        this.find_result = elem.find(sSelector);
        if (this.find_result.length) {
            return this.find_result;
        }
        else {
            console.log('error find_result: '+sSelector)
        }
    }

};

function Gallery(sSelector) {
    // alert('Gallery')
    var g = this;
    //g.gallery = $('#gallery1');
    //Component.call(this, sSelector);
    g.init(sSelector);
    g.pictures = g.find('.slide-item');
    g.arrowPrew = g.find('.arrow-left');
    g.arrowNext = g.find('.arrow-right');
    //g.preview = g.find('.preview-img');
    g.previewImage = g.find('.preview-img');
    g.previewBox = g.find('.screenshots-preview');

    g.slideList = g.find('.slider-screenshots');

    g.current = 0;
    g.max = g.pictures.length;

    g.closeBtn = g.find('.close');
    g.pointItem = g.find('.control-item1');
    g.point = g.find('.slide-control');


    //метод создания маленьких картинок в превью
    g.createPoint = function () {
    }

    //g.createPoint(); //создать маленькие картинки в превью

    //виделить текущую картинку
    g.pointListChecked = function (i) {
    }

    g.showPreview = function () {
        var picture = $(this); //картинка по которой кликнул пользователь
        g.display(picture, 'preview');

    }
    g.closePreview = function (event) {
        // alert($(event.target).attr('class')+ '---' + $(this).attr('class'));
        if (!event || $(event.target).hasClass('preview-img')) {
            g.previewBox.removeClass('b-preview_shown');
            //alert('true')
        }
    }
    g.showImage = function (iShift) {
        g.current += iShift;
        if (g.current >= g.max) {
            g.current = 0;
        }
        else if (g.current < 0) {
            g.current = g.max - 1;
        }
        //alert('g.current: '+ g.current + 'iShift: '+iShift);
        g.display(g.find('.slide-item:eq(' + g.current + ')'), "preview");


    };


    g.display = function (picture, displayParam) {
        if (displayParam == "preview") {
            var smallImage = picture.find('.b-picture__image');
            g.current = g.pictures.index(picture);
        }
        /*if (displayParam == "point") {
            var smallImage = picture.find('.b-point__itemImage');
            g.current = g.pointItem.index(picture);
        };*/
       // g.previewBox.toggle();

        bigImageSrc = smallImage.attr('src');
       // alert(bigImageSrc);
       // g.previewImage.attr('src', smallImage);
        g.previewImage.css('background-image', 'url("' + bigImageSrc + '")');

        g.previewBox.addClass('b-preview_shown');

       // g.previewText.html(smallImage.attr('alt'));
       // g.pointListChecked(g.current);
    }


    g.showPrevious = function () {
        g.showImage(-1);
    }
    g.showNext = function () {
        g.showImage(1);
    }
    g.escclosePreview = function (event) {
        if (event.which == 27) {
            g.closePreview();

        }
    };
    g.closeBtn.click(function(){
        g.closePreview();
    });

    g.pointItem.click(function () {
            var list = $(this);
            //g.display(picture, 'point');
           var currList =  g.pointItem.index(list);
            //alert(currList)
            g.setList(currList)
        }
    );
    g.setList = function(id){
        g.slideList.eq(id).addClass('center');
        g.slideList.eq(id+1).addClass('offset-left');
        g.slideList.eq(id-1).addClass('offset-right');
    }

    g.pictures.click(g.showPreview);

    $('body').keyup(g.escclosePreview);
    g.previewBox.click(g.closePreview);

    g.arrowPrew.click(g.showPrevious);
    g.arrowNext.click(g.showNext);

    document.addEventListener('keydown', function (event) {
        if (event.which == 37) {
            g.showPrevious();
        };
        if (event.which == 39) {
            g.showNext();
        };
    });


    //console.log(g.max)

}
Gallery.prototype = new Component;
var gallery = new Gallery('#gallery');


/**
 * Created by Vova on 08.12.2015.
 */

/**
 * Created by Vova on 07.12.2015.
 */


function List(sSelector) {

    var g = this;

    g.main = function (sSelector) {
        g.init(sSelector);
        /*g.pictures = g.find('.slide-item');
         g.arrowPrew = g.find('.control-left');
         g.arrowNext = g.find('.control-right');
         g.previewImage = g.find('.preview-img');*/
        //g.previewBox = g.find('.screenshots-preview');
        g.slideList = g.find('.slider-feedbacks');
        g.current = 0;
        //g.max = g.pictures.length;
        // g.closeBtn = g.find('.close');
        g.pointItem = g.find('.control-item1');
        g.pointItemMax = g.pointItem.length;
        g.points = g.find('.slide-control');

        g.getObj = function(){
            return g;
        }

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
    };



};






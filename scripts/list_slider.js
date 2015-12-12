/**
 * Created by Vova on 08.12.2015.
 */

//Обьект слайдера листов
//The object of the list slider
function List(sSelector) {
    var g = this;

    g.main = function (sSelector) {
        g.init(sSelector);
        g.slideList = g.find('.slider-feedbacks');
        g.current = 0;
        g.pointItem = g.find('.control-item1');
        g.pointItemMax = g.pointItem.length;
        g.points = g.find('.slide-control');

        //Обработчик нажатия миниатюры слайдера
        //Handler clicking thumbnails slider
        g.pointItem.click(function () {
                var list = $(this);
                var selecteddListId = g.pointItem.index(list);
                g.setList(selecteddListId)
            }
        );

        //Установка активного и скрытие неактивных листов слайдера
        //Set the active and hide inactive slider lists sheets
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

            //Изменение активного thumbnail слайдера
            //Change the active thumbnail slider
            $.each(g.pointItem, function (id, value) {
                if (selecteddListId == id) {
                    g.pointItem.eq(id).addClass('active');
                }
                else {
                    g.pointItem.eq(id).removeClass('active');
                }
                ;
            });

            //Остановка и запуск автоматического перелистывания слайдера после изменения пользователем
            //Stop and start the automatic scrolling of the slider after the user changes
            Jobs.slideTimerStop();
            Jobs.slideTimerStart();
        };
    };
};






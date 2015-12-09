/**
 * Created by Vova on 09.12.2015.
 */



var child = $('body').children();
var head = $('header').find('nav ul li a[href]');
var wind = $(window).height()/2;
//alert(wind)
//console.log(head.eq(2).attr('href').replace('#', '') + ' yyy')

var deleted = true;
var del_nav_active  = function(){
    $.each(head, function (i, data) {
        //if (head.eq(i).attr('href').replace('#', '') == obj.attr('id')) {
            head.eq(i).removeClass('nav_active');
            deleted = true;
       // }
    });
};
$(document).scroll(function () {
    $.each(child, function (id, value) {
        var obj = $('body').find(child[id]);
        //console.log(obj.height())
        var top = obj.position().top;
        var h = obj.height();
        var pos = top + h;
        if ($(document).scrollTop()+20  > top && $(document).scrollTop() < pos) {
            //console.log(obj.attr('class')+' '+ child[id])
            //console.log($(document).scrollTop()+wind +' '  +top +' '+ pos  );


            $.each(head, function (i, data) {
                if (head.eq(i).attr('href').replace('#', '') == obj.attr('id')) {
                    del_nav_active();
                    head.eq(i).addClass('nav_active');


                }
            });

        }
        /*else if (($(document).scrollTop() +wind < top && $(document).scrollTop()+wind < pos) ||
            ($(document).scrollTop() > top && $(document).scrollTop() > pos) ) {

        }*/

        //console.log(child.tagName)
    });
})


//console.log(nav2.position().top,nav3.position().top,nav4.position().top);

/*
 $(document).scroll(function () {
 if ($(document).scrollTop() > nav2.position().top) {
 alert(nav2.position().top)
 }
 if ($(document).scrollTop() > nav3.position().top) {
 alert(nav3.position().top)
 }
 if ($(document).scrollTop() > nav4.position().top) {
 alert(nav4.position().top)
 }


 })*/

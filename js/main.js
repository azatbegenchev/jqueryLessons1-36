$(function () {
   // var tagP = $('.mainText p');
   // tagP.hide(2000).text('Your feauture is important for us').show(2000);

   //======================================================

   // function widthAndHeight(element) {
   //    var className = "." + element;
   //    var w = $(className).width();
   //    var h = $(className).height();
   //    $('.mainText p').text('Ширина: ' + w + '; Высота: ' + h);
   // }
   // widthAndHeight('recive')


   // var b = $('.mainText p').html("<b>This is a new header</b>");
   //======================================================


   // function elementOut(element, time) {
   //    if (time > 5000 || time < 1000 || isNaN(time)) {
   //       return false;
   //    } else {
   //       var className = "." + element;
   //       $(className).fadeOut(time);
   //    }

   // }
   // elementOut('mainText', 3000);

   //========================================================================

   // $('.mainText h2').fadeTo(2000, 0.2).fadeTo(3000, 1);
   // $('.mainText p').slideUp(2000).slideDown(1000);


   //==============================================================================

   function changeAttr(element, newAttr, newValue) {
      var className = '.' + element;
      $(className).attr(newAttr, newValue);
   }
   changeAttr('logo', 'title', 'some new text')
});
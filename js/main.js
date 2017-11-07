$(document).ready(function () {
        $(window).scroll(function () {
          if ($(window).width() >= 1024) {
            if ($(window).scrollTop() == 0) {
              $('.navbar').css('background-color', 'rgba(128, 128, 128, 1)');
            } else {
              $('.navbar').css('background-color', 'rgba(128, 128, 128, 0.2)');
            }
          }
        })


      $('#links__dropdown-button').click(function() {
        $('#links__dropdown-content a').toggleClass("links__show");
      });


     window.onclick = function(event) {
      if (!event.target.matches('.links__dropbtn')) {
        var dropdowns = document.getElementsByClassName("links__dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          dropdowns[i].classList.remove('links__show');
        }
      }
    }

    var $carouselItems = $('ol.carousel-indicators li');

    $('.history__navigation_prev').click(function(e) {
      e.stopPropagation();
      if($carouselItems.eq(1).hasClass('active')) {
        $(this).addClass('disabled');
        return false;
      }
      else {
      $('.history__navigation_next').removeClass('disabled');
      }

      $carouselItems.each(function(index, el) {
        var pos = $(this).offset().left;
        var width = $(this).outerWidth(true);
        $( this ).offset({ left : pos + width});
      });

      $('#history__carousel').carousel('prev');
      if($carouselItems.eq(1).hasClass('active')) {
        $(this).addClass('disabled');
        $('.history__navigation_next').removeClass('disabled');
      }

      return false;
    });

    $('.history__navigation_next').click(function(e) {
      e.stopPropagation();

      if($carouselItems.eq($carouselItems.length - 2).hasClass('active')) {
        $(this).addClass('disabled');
        return false;
      }
      else {
      $('.history__navigation_prev').removeClass('disabled');
      }

      $carouselItems.each(function(index, el) {
        var pos = $(this).offset().left;
        var width = $(this).outerWidth(true);
        $( this ).offset({ left : pos - width});
      });

      $('#history__carousel').carousel('next');
      if($carouselItems.eq($carouselItems.length - 2).hasClass('active')) {
        $(this).addClass('disabled');
        $('.history__navigation_prev').removeClass('disabled');
      }
      return false;
    });



});